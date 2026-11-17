import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { partsBrands } from '../data/brands'
import { ROUTES } from '../routes'

const PartsBrands = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.partsBrands} />
      <PageHeader
        crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Parts Brands' }]}
        icon="icon-wrench.svg"
        eyebrow="What We Distribute // Parts Brands"
        title="Our Parts Brands"
        intro="We export genuine auto parts from leading international brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory brands={partsBrands} />
    </>
  )
}

export default PartsBrands
