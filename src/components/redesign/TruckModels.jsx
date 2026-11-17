import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import BrandInquiryCta from './BrandInquiryCta'
import './TruckModels.css'

// Model gallery for one truck brand (/truck-brands/:brandSlug)
const TruckModels = ({ brand }) => {
  return (
    <section className="v2-truck-models">
      <div className="v2-truck-models-inner">
        <div className="v2-truck-models-logo">
          <img src={brand.logo} alt={`${brand.name} logo`} />
        </div>

        <ul className="v2-truck-models-grid">
          {brand.models.map((model) => (
            <li key={model.name}>
              <figure className="v2-truck-model">
                {/* Whole truck on a white plate: the photos mix cut-out PNGs and JPGs.
                    alt is empty because the caption below already names the model. */}
                <span className="v2-truck-model-photo">
                  <img src={model.image} alt="" loading="lazy" />
                </span>
                <figcaption className="v2-truck-model-name">{model.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="v2-truck-models-actions">
          <Link to={ROUTES.truckBrands} className="v2-btn v2-btn--ghost">
            Back to All Truck Brands
          </Link>
        </div>

        <BrandInquiryCta
          title={`Need ${brand.name} parts?`}
          text="Send us the model, part details and destination port, and we'll get back to you with availability and pricing."
        />
      </div>
    </section>
  )
}

export default TruckModels
