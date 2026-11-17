import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import PageHeader from '../components/redesign/PageHeader'
import BrandDirectory from '../components/redesign/BrandDirectory'
import { truckBrands } from '../data/brands'
import { ROUTES, truckBrandPath } from '../routes'

const TruckBrands = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.truckBrands} />
      <PageHeader
        crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Truck Brands' }]}
        icon="icon-truck.svg"
        eyebrow="Our Coverage // Truck Brands"
        title="Truck Brands We Cover"
        intro="We export genuine truck auto parts for all major Indian truck brands. Quality assured and export-ready components for global markets."
      />
      <BrandDirectory
        brands={truckBrands}
        linkFor={(brand) => truckBrandPath(brand.slug)}
        linkLabel="View Models"
      />
    </>
  )
}

export default TruckBrands
