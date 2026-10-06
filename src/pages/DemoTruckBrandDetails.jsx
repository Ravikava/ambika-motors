import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/redesign/PageHeader'
import TruckModels from '../components/redesign/TruckModels'
import { getTruckBrand } from '../data/brands'

// Redesigned truck brand page with its models (current version: pages/BrandDetails.jsx)
const DemoTruckBrandDetails = () => {
  const { brandSlug } = useParams()
  const brand = getTruckBrand(brandSlug)

  if (!brand) {
    return (
      <>
        <PageHeader
          crumbs={[{ label: 'Home', to: '/demo' }, { label: 'Truck Brands', to: '/demo-truck-brands' }, { label: 'Not Found' }]}
          icon="icon-truck.svg"
          eyebrow="Truck Brands"
          title="Brand Not Found"
          intro="We couldn't find that truck brand. Please choose one from our truck brands list."
        />
        <div className="v2-not-found-actions">
          <Link to="/demo-truck-brands" className="v2-btn v2-btn--ghost">
            Back to All Truck Brands
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/demo' }, { label: 'Truck Brands', to: '/demo-truck-brands' }, { label: brand.name }]}
        icon="icon-truck.svg"
        eyebrow={`Truck Models // ${brand.name}`}
        title={`${brand.name} Truck Models`}
        intro={brand.description}
      />
      <TruckModels brand={brand} />
    </>
  )
}

export default DemoTruckBrandDetails
