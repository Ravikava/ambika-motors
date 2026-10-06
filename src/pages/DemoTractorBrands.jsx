import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { tractorBrands } from '../data/brands'

// Redesigned Tractor Brands page (current version: pages/TractorBrands.jsx)
const DemoTractorBrands = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/demo' }, { label: 'Tractor Brands' }]}
        icon="icon-tractor.svg"
        eyebrow="Our Coverage // Tractor Brands"
        title="Tractor Brands We Cover"
        intro="We export genuine tractor parts for all major tractor brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory brands={tractorBrands} />
    </>
  )
}

export default DemoTractorBrands
