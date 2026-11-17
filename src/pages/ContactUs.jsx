import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import ContactSection from '../components/redesign/ContactSection'

// Contact Us (Figma: Contact Us – version B)
const ContactUs = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.contact} />
      <ContactSection />
    </>
  )
}

export default ContactUs
