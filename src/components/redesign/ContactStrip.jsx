import { Link } from 'react-router-dom'
import { MAIN_CONTACT } from '../../data/contact'
import ContactInfoCard from './ContactInfoCard'
import FindUsCard from './FindUsCard'
import SectionHeading from './SectionHeading'
import './ContactStrip.css'

// Compact home-page contact section: details + map, with the form on /demo-contact-us
const ContactStrip = () => {
  return (
    <section className="v2-contact-strip">
      <div className="v2-contact-strip-inner">
        <SectionHeading
          icon="icon-support.svg"
          eyebrow="Get In Touch // Global Trade Inquiries"
          title="Contact Us"
          subtitle="Have questions about our truck parts export services? We are here to help."
        />

        <div className="v2-contact-strip-grid">
          {/* Compact: only the main contact group (the contact page lists them all) */}
          <ContactInfoCard groups={[MAIN_CONTACT]} titleAs="h3">
            <Link to="/demo-contact-us" className="v2-btn v2-contact-strip-cta">
              Send an Export Inquiry
              <img className="v2-btn-arrow" src="/images/redesign/icon-arrow-right-sm.svg" alt="" />
            </Link>
          </ContactInfoCard>
          <FindUsCard className="v2-contact-strip-map" titleAs="h3" />
        </div>
      </div>
    </section>
  )
}

export default ContactStrip
