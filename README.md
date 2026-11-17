# Ambika Motors website

Website of Ambika Motors, an exporter of truck, tractor and auto parts and automotive oils from Surat, India:
**https://ambicamotors.com**

React 19 + Vite 7, no backend. The contact form sends emails through EmailJS.

## Run it on your computer

Needs Node.js 20.19 or newer (the live build uses Node 24).

```bash
npm install
npm run dev       # http://localhost:3000 (opens a browser tab)
npm run build     # the finished site, in dist/
npm run preview   # serves dist/ to check the build
npm run lint
```

## Where to change things

| To change… | Edit |
|---|---|
| Phone, email, address, map, Facebook / Instagram / WhatsApp links | `src/data/contact.js` |
| Brands, logos and truck models | `src/data/brands.js` (its top comment gives the image sizes to use) |
| Page titles and descriptions (Google, link previews) | `src/seo.js` |
| Images | `public/images/` |
| Page addresses, and redirects from old addresses | `src/routes.js` |
| Page layout and look | `src/pages/` and `src/components/redesign/` (each section has its own CSS file; colours and spacing in `theme.css`) |

A new truck brand needs only an entry in `src/data/brands.js`: its page, its search details and its place in the
sitemap follow from that. A new page needs a route in `src/routes.js` and `src/App.jsx`, and an entry in `PAGE_META` and
`INDEXED_PAGES` in `src/seo.js`.

## Contact form (EmailJS)

The form needs three EmailJS keys: in `.env` on your computer (copy `.env.example`), and as repository secrets on
GitHub for the live site. Step-by-step: `EMAILJS_SETUP.txt`. `.env` is never committed.

## Publishing

Every push to `main` publishes the site within a minute or two: GitHub Actions
(`.github/workflows/deploy-pages.yml`) builds it and puts it on GitHub Pages, at the domain in `public/CNAME`.

Besides the pages themselves, the build (`scripts/seo-pages.js`) writes:

- one HTML file per page with its own title, description and link-preview details, so search engines and WhatsApp /
  Facebook previews see them
- small redirect pages for the old addresses in `src/routes.js`
- `404.html` for unknown addresses, `sitemap.xml` and `robots.txt`
