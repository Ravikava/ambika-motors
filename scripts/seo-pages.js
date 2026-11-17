// Vite plugin: gives every page its own HTML file with its title, description and share details built in.
//
// Why: GitHub Pages only has files to serve. Without a file per page, every address except the home page was
// answered by 404.html with HTTP status 404 ("not found"), so search engines skipped those pages, and link
// previews (WhatsApp, Facebook…) showed no title or description, because they don't run the site's JavaScript.
//
// After `vite build`, dist/ gets:
//  - index.html and one file per page from src/seo.js (about-us.html → served at /about-us, truck-brands/tata.html …)
//  - a small redirect page for each old address in src/routes.js REDIRECTS (/demo, /truck-brands/tafe …)
//  - 404.html for any other address (status 404, kept out of search results; the site still shows its own
//    "Page Not Found" page)
//  - sitemap.xml and robots.txt
// In `vite dev`, index.html gets the home page's tags.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { REDIRECTS } from '../src/routes.js'
import { INDEXED_PAGES, PAGE_META, SITE, absoluteUrl, organizationData } from '../src/seo.js'

const MARKER = '<!-- page-meta -->'
const BLOCK = /<!-- page-meta:start -->[\s\S]*<!-- page-meta:end -->/

const escapeHtml = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// The <head> tags for one page
const headTags = (meta, { structuredData = false } = {}) => {
  const image = SITE.shareImage
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    meta.noindex && '<meta name="robots" content="noindex" />',
    meta.path && `<link rel="canonical" href="${absoluteUrl(meta.path)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    meta.path && `<meta property="og:url" content="${absoluteUrl(meta.path)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:image" content="${absoluteUrl(image.path)}" />`,
    `<meta property="og:image:width" content="${image.width}" />`,
    `<meta property="og:image:height" content="${image.height}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(image.alt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    // "<" escaped so the JSON can never close the <script> early
    structuredData &&
      `<script type="application/ld+json">${JSON.stringify(organizationData()).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.filter(Boolean).join('\n    ')
}

// Old address → tiny page that sends visitors (and search engines) to the new one
const redirectPage = (to) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting… | ${escapeHtml(SITE.name)}</title>
    <link rel="canonical" href="${absoluteUrl(to)}" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <style>html, body { margin: 0; background: #060a12; color: #cbd5e1; font: 16px sans-serif; }</style>
  </head>
  <body>
    <p style="padding: 24px">This page has moved to <a href="${to}" style="color: #fb923c">${absoluteUrl(to)}</a>.</p>
  </body>
</html>
`

// '/' → index.html, '/about-us' → about-us.html, '/truck-brands/tata' → truck-brands/tata.html
const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${INDEXED_PAGES.map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc></url>`).join('\n')}
</urlset>
`

const robots = () => `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`

export default function seoPages() {
  return {
    name: 'seo-pages',
    // Home page tags (between markers, so each page's file can swap in its own)
    transformIndexHtml(html) {
      if (!html.includes(MARKER)) throw new Error(`seo-pages: index.html is missing ${MARKER}`)
      return html.replace(
        MARKER,
        `<!-- page-meta:start -->\n    ${headTags(PAGE_META.home, { structuredData: true })}\n    <!-- page-meta:end -->`,
      )
    },
    // writeBundle (not closeBundle) so a failed build reports its real error instead of a missing index.html
    writeBundle(options) {
      const outDir = options.dir
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      if (!BLOCK.test(template)) throw new Error('seo-pages: built index.html has no page-meta block')
      const write = (file, content) => {
        mkdirSync(dirname(join(outDir, file)), { recursive: true })
        writeFileSync(join(outDir, file), content)
      }
      const pageHtml = (meta, options) => template.replace(BLOCK, headTags(meta, options))

      const files = new Set()
      for (const page of INDEXED_PAGES) {
        write(fileFor(page.path), pageHtml(page, { structuredData: page === PAGE_META.home }))
        files.add(fileFor(page.path))
      }
      // A page whose address is also a folder (/truck-brands, because of /truck-brands/tata) gets a second copy
      // inside it, in case GitHub Pages serves the folder rather than truck-brands.html
      for (const page of INDEXED_PAGES) {
        if (page.path !== '/' && INDEXED_PAGES.some((other) => other.path.startsWith(`${page.path}/`))) {
          write(`${page.path.slice(1)}/index.html`, pageHtml(page))
        }
      }
      for (const [from, to] of Object.entries(REDIRECTS)) {
        if (from.endsWith('.html') || files.has(fileFor(from))) continue // /index.html is the home page itself
        write(fileFor(from), redirectPage(to))
      }
      write('404.html', pageHtml(PAGE_META.notFound))
      write('sitemap.xml', sitemap())
      write('robots.txt', robots())
    },
  }
}
