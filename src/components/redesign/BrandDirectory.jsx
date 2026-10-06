import { Link } from 'react-router-dom'
import BrandInquiryCta from './BrandInquiryCta'
import './BrandDirectory.css'

// Brand cards for the Truck / Tractor / Parts brand pages. Cards link only when `linkFor` is given.
const BrandDirectory = ({ brands, linkFor, linkLabel }) => {
  return (
    <section className="v2-brand-dir">
      <div className="v2-brand-dir-inner">
        <ul className="v2-brand-dir-grid">
          {brands.map((brand) => {
            const content = (
              <>
                <span className="v2-brand-card-logo">
                  <img src={brand.logo} alt="" loading="lazy" />
                </span>
                <h2 className="v2-brand-card-name">{brand.name}</h2>
                <p className="v2-brand-card-text">{brand.description}</p>
                {linkFor && (
                  <span className="v2-brand-card-more">
                    {linkLabel}
                    <img src="/images/redesign/icon-arrow-right-brand.svg" alt="" />
                  </span>
                )}
              </>
            )

            return (
              <li key={brand.name}>
                {linkFor ? (
                  <Link to={linkFor(brand)} className="v2-brand-card v2-brand-card--link">{content}</Link>
                ) : (
                  <div className="v2-brand-card">{content}</div>
                )}
              </li>
            )
          })}
        </ul>

        <BrandInquiryCta
          title="Don't see your brand?"
          text="Tell us the brand, part details and destination port, and we'll get back to you with availability and pricing."
        />
      </div>
    </section>
  )
}

export default BrandDirectory
