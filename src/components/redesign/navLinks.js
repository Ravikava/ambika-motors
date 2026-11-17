import { ROUTES } from '../../routes'

// Site links shared by the navbar and the footer
export const navLinks = [
  { to: ROUTES.home, label: 'Home', end: true },
  { to: ROUTES.truckBrands, label: 'Truck Brands' },
  { to: ROUTES.tractorBrands, label: 'Tractor Brands' },
  { to: ROUTES.partsBrands, label: 'Parts Brands' },
  { to: ROUTES.about, label: 'About Us' },
  { to: ROUTES.contact, label: 'Contact' },
]
