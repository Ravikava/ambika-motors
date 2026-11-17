import ContactCards from './ContactCards'
import ContactForm from './ContactForm'
import FindUsCard from './FindUsCard'
import SectionHeading from './SectionHeading'
import './ContactSection.css'

// Contact page: heading, then the contact cards (one per location in src/data/contact.js),
// then the inquiry form, then the map. Content from Figma Contact Us – version B.
const ContactSection = () => {
  return (
    <section className="v2-contact">
      <div className="v2-contact-inner">
        <SectionHeading
          as="h1"
          icon="icon-support.svg"
          eyebrow="Get In Touch // Global Trade Inquiries"
          title="Contact Us"
          subtitle="Have questions about our truck parts export services? We are here to help."
        />

        <ContactCards />

        <div className="v2-contact-form">
          <ContactForm />
        </div>

        <FindUsCard className="v2-contact-findus" />
      </div>
    </section>
  )
}

export default ContactSection
