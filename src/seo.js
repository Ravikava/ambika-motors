// What search engines and link previews (WhatsApp, Facebook, LinkedIn…) show for each page:
// the title, the one-line description, and the business details Google can show.
// Used in two places: when the site is built (scripts/seo-pages.js writes one HTML file per page with these
// details already in it) and in the browser (PageMeta keeps them current while visitors move around the site).
// Titles: keep them under ~60 characters; descriptions: under ~160 characters (Google cuts off the rest).

import { ROUTES, truckBrandPath } from './routes.js'
import { partsBrands, tractorBrands, truckBrands } from './data/brands.js'
import { MAIN_CONTACT, SOCIAL_LINKS, INQUIRY_EMAIL, addressLines } from './data/contact.js'

export const SITE = {
  url: 'https://ambicamotors.com',
  name: 'Ambika Motors',
  // The domain and the Google Maps listing spell it "Ambica", so searches for either spelling should match
  alternateName: 'Ambica Motors',
  // Picture shown when a link to the site is shared (1200 × 630)
  shareImage: { path: '/images/share/ambika-motors-share.jpg', width: 1200, height: 630, alt: 'Ambika Motors logo – Exporting Excellence From India' },
  logo: '/icon-512.png',
  // Business address for Google, split into the parts it expects (the printed address is in src/data/contact.js)
  address: {
    streetAddress: 'Shop No: 1, Ambika Compound, Vedachha Patiya',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    postalCode: '395010',
    addressCountry: 'IN',
  },
}

const names = (brands) => brands.map((brand) => brand.name)

// "A, B and C"
const listOf = (items) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items.at(-1)}` : items.join(''))

export const PAGE_META = {
  home: {
    path: ROUTES.home,
    title: 'Ambika Motors | Quality Auto Parts. Best Prices. Global Delivery.',
    description:
      'Exporter of premium-quality truck, tractor and auto parts and automotive oils from India, with reliable quality, competitive pricing and timely shipments.',
  },
  truckBrands: {
    path: ROUTES.truckBrands,
    title: 'Truck Brands We Cover | Ambika Motors',
    description: `We export genuine truck parts for all major Indian truck brands: ${listOf(names(truckBrands))}. Quality assured and export-ready.`,
  },
  tractorBrands: {
    path: ROUTES.tractorBrands,
    title: 'Tractor Brands We Cover | Ambika Motors',
    description: `We export genuine tractor parts for ${listOf(names(tractorBrands))}. Quality assured and export-ready.`,
  },
  partsBrands: {
    path: ROUTES.partsBrands,
    title: 'Our Parts Brands | Ambika Motors',
    description: `Genuine auto parts and oils for export from leading brands, including ${listOf(names(partsBrands).slice(0, 6))}.`,
  },
  about: {
    path: ROUTES.about,
    title: 'About Us | Ambika Motors',
    description:
      'Ambika Motors is a professionally managed export firm from India for premium-quality auto parts and automotive oils, backed by strict quality control.',
  },
  contact: {
    path: ROUTES.contact,
    title: 'Contact Us | Ambika Motors',
    description:
      `Send us an export inquiry${MAIN_CONTACT.phone ? ` or call ${MAIN_CONTACT.phone.value}` : ''}. ` +
      `Ambika Motors, ${MAIN_CONTACT.address ? addressLines(MAIN_CONTACT.address).join(' ') : 'India'}.`,
  },
  // Not-found pages: kept out of search results (noindex)
  notFound: {
    title: 'Page Not Found | Ambika Motors',
    description: "The page you're looking for doesn't exist or has moved.",
    noindex: true,
  },
  brandNotFound: {
    title: 'Brand Not Found | Ambika Motors',
    description: "We couldn't find that truck brand. Please choose one from our truck brands list.",
    noindex: true,
  },
}

// One truck brand's page (/truck-brands/tata …): its description plus as many model names as fit
export const truckBrandMeta = (brand) => {
  const intro = `${brand.description}.`
  const models = brand.models.map((model) => model.name)
  let description = intro
  for (let count = models.length; count > 0; count--) {
    const more = count < models.length ? ' and more' : ''
    const candidate = `${intro} Models: ${models.slice(0, count).join(', ')}${more}.`
    if (candidate.length <= 160) { description = candidate; break }
  }
  return { path: truckBrandPath(brand.slug), title: `${brand.name} Truck Models | Ambika Motors`, description }
}

// Every page that gets its own HTML file (and a place in sitemap.xml)
export const INDEXED_PAGES = [
  PAGE_META.home,
  PAGE_META.truckBrands,
  ...truckBrands.map(truckBrandMeta),
  PAGE_META.tractorBrands,
  PAGE_META.partsBrands,
  PAGE_META.about,
  PAGE_META.contact,
]

export const absoluteUrl = (path) => `${SITE.url}${path}`

// Business details for Google (schema.org Organization), placed on the home page
export const organizationData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: `${SITE.url}/`,
  logo: absoluteUrl(SITE.logo),
  email: MAIN_CONTACT.email?.value ?? INQUIRY_EMAIL,
  ...(MAIN_CONTACT.phone && { telephone: MAIN_CONTACT.phone.value }),
  address: { '@type': 'PostalAddress', ...SITE.address },
  sameAs: SOCIAL_LINKS.filter((link) => !link.href.includes('wa.me')).map((link) => link.href),
})
