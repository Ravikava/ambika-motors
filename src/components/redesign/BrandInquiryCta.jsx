import { Link } from 'react-router-dom'
import './BrandInquiryCta.css'

// Inquiry prompt at the bottom of the brand pages
const BrandInquiryCta = ({ title, text }) => {
  return (
    <div className="v2-brand-cta">
      <div className="v2-brand-cta-copy">
        <h2 className="v2-brand-cta-title">{title}</h2>
        <p className="v2-brand-cta-text">{text}</p>
      </div>
      <Link to="/demo-contact-us" className="v2-btn v2-brand-cta-btn">
        Send an Inquiry
        <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right-sm.svg" alt="" />
      </Link>
    </div>
  )
}

export default BrandInquiryCta
