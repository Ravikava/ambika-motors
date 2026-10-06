import ContactForm from './ContactForm'
import ContactInfoCard from './ContactInfoCard'
import FindUsCard from './FindUsCard'
import SectionHeading from './SectionHeading'
import './ContactSection.css'

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

        <div className="v2-contact-grid">
          <ContactForm />
          {/* Lists every group in src/data/contact.js */}
          <ContactInfoCard />
        </div>

        <FindUsCard className="v2-contact-findus" />
      </div>
    </section>
  )
}

export default ContactSection
