import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { partsBrands } from '../data/brands'

// Redesigned Parts Brands page (current version: pages/PartsBrands.jsx)
const DemoPartsBrands = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/demo' }, { label: 'Parts Brands' }]}
        icon="icon-wrench.svg"
        eyebrow="What We Distribute // Parts Brands"
        title="Our Parts Brands"
        intro="We export genuine auto parts from leading international brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory brands={partsBrands} />
    </>
  )
}

export default DemoPartsBrands
