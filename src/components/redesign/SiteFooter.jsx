import { Link, useLocation } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MAIN_CONTACT, SOCIAL_LINKS, addressLines, telHref } from '../../data/contact'
import BreakableEmail from './BreakableEmail'
import { navLinks } from './navLinks'
import './SiteFooter.css'

const socialIcons = { WhatsApp: FaWhatsapp, Facebook: FaFacebookF, Instagram: FaInstagram }

// The footer shows the main contact group only; each field is optional, like on the contact card
const { phone, email, address } = MAIN_CONTACT
const footerAddress = addressLines(address)

// Footer for the redesign pages – not in Figma; follows the redesign's tokens and the current footer's content
const SiteFooter = ({ homePath = '/demo' }) => {
  const { pathname } = useLocation()

  // A same-route Link does nothing, so on the contact page the CTA jumps to the form instead
  const handleInquiryClick = (e) => {
    if (pathname !== '/demo-contact-us') return
    e.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('v2-inquiry')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    document.getElementById('v2-inquiry-name')?.focus({ preventScroll: true })
  }

  return (
    <footer className="v2-footer">
      <div className="v2-footer-inner">
        <div className="v2-footer-grid">
          <div className="v2-footer-brand">
            <Link to={homePath} className="v2-footer-logo">
              <img src="/images/redesign/logo-mark.png" alt="Ambika Motors" />
            </Link>
            <p className="v2-footer-tagline">Quality Auto Parts. Best Prices. Global Delivery.</p>
            <p className="v2-footer-text">Ambika Motors – Exporting excellence from India.</p>
            <ul className="v2-footer-social">
              {SOCIAL_LINKS.map(({ name, href }) => {
                const Icon = socialIcons[name]
                return (
                  <li key={name}>
                    <a href={href} className="v2-footer-social-link" aria-label={name} target="_blank" rel="noopener noreferrer">
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav className="v2-footer-col" aria-labelledby="v2-footer-links-title">
            <h2 id="v2-footer-links-title" className="v2-footer-heading">Quick Links</h2>
            <ul className="v2-footer-links">
              {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <Link to={end ? homePath : to} className="v2-footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="v2-footer-col">
            <h2 className="v2-footer-heading">Contact Info</h2>
            <ul className="v2-footer-contact">
              {phone && (
                <li>
                  <span className="v2-footer-contact-icon"><img src="/images/redesign/icon-phone.svg" alt="" /></span>
                  <a href={telHref(phone.value)} className="v2-footer-link">{phone.value}</a>
                </li>
              )}
              {email && (
                <li>
                  <span className="v2-footer-contact-icon"><img src="/images/redesign/icon-mail.svg" alt="" /></span>
                  <a href={`mailto:${email.value}`} className="v2-footer-link v2-footer-email">
                    <BreakableEmail email={email.value} />
                  </a>
                </li>
              )}
              {footerAddress.length > 0 && (
                <li>
                  <span className="v2-footer-contact-icon"><img src="/images/redesign/icon-pin-small.svg" alt="" /></span>
                  <address className="v2-footer-address">
                    {/* The last line (e.g. "India-395010") stays unbroken when the address has more than one line */}
                    {footerAddress.length > 1 ? (
                      <>
                        {footerAddress.slice(0, -1).join(' ')}{' '}
                        <span className="v2-footer-nowrap">{footerAddress.at(-1)}</span>
                      </>
                    ) : (
                      footerAddress[0]
                    )}
                  </address>
                </li>
              )}
            </ul>
          </div>

          <div className="v2-footer-quote">
            <h2 className="v2-footer-heading">Need a Quote?</h2>
            <p className="v2-footer-text">Share your quantity and destination for our best export rates.</p>
            <Link to="/demo-contact-us" className="v2-btn v2-footer-cta" onClick={handleInquiryClick}>
              Send Export Inquiry
              <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right-sm.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="v2-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ambika Motors. All rights reserved.</p>
          <p>Surat, Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
