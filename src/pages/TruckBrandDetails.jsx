import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { PAGE_META, truckBrandMeta } from '../seo'
import PageHeader from '../components/redesign/PageHeader'
import TruckModels from '../components/redesign/TruckModels'
import { getTruckBrand } from '../data/brands'
import { ROUTES } from '../routes'

// One truck brand and its models (/truck-brands/:brandSlug)
const TruckBrandDetails = () => {
  const { brandSlug } = useParams()
  const brand = getTruckBrand(brandSlug)

  if (!brand) {
    return (
      <>
        <PageMeta meta={PAGE_META.brandNotFound} />
        <PageHeader
          crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Truck Brands', to: ROUTES.truckBrands }, { label: 'Not Found' }]}
          icon="icon-truck.svg"
          eyebrow="Truck Brands"
          title="Brand Not Found"
          intro="We couldn't find that truck brand. Please choose one from our truck brands list."
        />
        <div className="v2-not-found-actions">
          <Link to={ROUTES.truckBrands} className="v2-btn v2-btn--ghost">
            Back to All Truck Brands
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageMeta meta={truckBrandMeta(brand)} />
      <PageHeader
        crumbs={[{ label: 'Home', to: ROUTES.home }, { label: 'Truck Brands', to: ROUTES.truckBrands }, { label: brand.name }]}
        icon="icon-truck.svg"
        eyebrow={`Truck Models // ${brand.name}`}
        title={`${brand.name} Truck Models`}
        intro={brand.description}
      />
      <TruckModels brand={brand} />
    </>
  )
}

export default TruckBrandDetails
