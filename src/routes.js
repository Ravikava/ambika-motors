// Every page address on the site, used by the router and by all internal links

export const ROUTES = {
  home: '/',
  truckBrands: '/truck-brands',
  tractorBrands: '/tractor-brands',
  partsBrands: '/parts-brands',
  about: '/about-us',
  contact: '/contact-us',
}

export const truckBrandPath = (slug) => `${ROUTES.truckBrands}/${slug}`

// Old addresses and where they lead now: the /demo… preview links shared before the redesign went live,
// /index.html, and two tractor brands that used to have truck-brand pages
export const REDIRECTS = {
  '/index.html': ROUTES.home,
  '/truck-brands/new-holland': ROUTES.tractorBrands,
  '/truck-brands/tafe': ROUTES.tractorBrands,
  '/demo': ROUTES.home,
  '/demo-2': ROUTES.home,
  '/demo-about-us': ROUTES.about,
  '/demo-contact-us': ROUTES.contact,
  '/demo-truck-brands': ROUTES.truckBrands,
  '/demo-tractor-brands': ROUTES.tractorBrands,
  '/demo-parts-brands': ROUTES.partsBrands,
}
