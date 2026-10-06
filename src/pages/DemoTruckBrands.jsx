import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { truckBrands } from '../data/brands'

// Redesigned Truck Brands page (current version: pages/TruckBrands.jsx)
const DemoTruckBrands = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/demo' }, { label: 'Truck Brands' }]}
        icon="icon-truck.svg"
        eyebrow="Our Coverage // Truck Brands"
        title="Truck Brands We Cover"
        intro="We export genuine truck auto parts for all major Indian truck brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory
        brands={truckBrands}
        linkFor={(brand) => `/demo-truck-brands/${brand.slug}`}
        linkLabel="View Models"
      />
    </>
  )
}

export default DemoTruckBrands
