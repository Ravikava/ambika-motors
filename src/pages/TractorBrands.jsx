import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { tractorBrands } from '../data/brands'
import { ROUTES } from '../routes'

const TractorBrands = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.tractorBrands} />
      <PageHeader
        crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Tractor Brands' }]}
        icon="icon-tractor.svg"
        eyebrow="Our Coverage // Tractor Brands"
        title="Tractor Brands We Cover"
        intro="We export genuine tractor parts for all major tractor brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory brands={tractorBrands} />
    </>
  )
}

export default TractorBrands
