import { useEffect } from 'react'
import { SITE, absoluteUrl } from '../seo'

// Keeps the tab title, description and link-preview tags in <head> matching the current page.
// Each page's HTML file already has them (scripts/seo-pages.js); this keeps them right after moving to another
// page inside the site, e.g. for the phone's share button, which shares the page's canonical address.
// Usage: <PageMeta meta={PAGE_META.about} /> (see src/seo.js)

// Set an attribute on the <head> tag matching `selector`, creating it if needed; null removes the tag
const setHeadTag = (selector, create, attribute, value) => {
  let tag = document.head.querySelector(selector)
  if (value == null) {
    tag?.remove()
    return
  }
  if (!tag) {
    tag = create()
    document.head.appendChild(tag)
  }
  tag.setAttribute(attribute, value)
}

const metaTag = (key, name) => () => {
  const tag = document.createElement('meta')
  tag.setAttribute(key, name)
  return tag
}

const PageMeta = ({ meta }) => {
  const { title, description, path, noindex } = meta

  useEffect(() => {
    const url = path ? absoluteUrl(path) : null
    document.title = title
    setHeadTag('meta[name="description"]', metaTag('name', 'description'), 'content', description)
    setHeadTag('meta[name="robots"]', metaTag('name', 'robots'), 'content', noindex ? 'noindex' : null)
    setHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
    setHeadTag('meta[property="og:url"]', metaTag('property', 'og:url'), 'content', url)
    setHeadTag('meta[property="og:title"]', metaTag('property', 'og:title'), 'content', title)
    setHeadTag('meta[property="og:description"]', metaTag('property', 'og:description'), 'content', description)
    setHeadTag('meta[property="og:site_name"]', metaTag('property', 'og:site_name'), 'content', SITE.name)
  }, [title, description, path, noindex])

  return null
}

export default PageMeta
