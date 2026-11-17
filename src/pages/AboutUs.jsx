import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import AboutSection from '../components/redesign/AboutSection'

// About Us (Figma: About Us – version B)
const AboutUs = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.about} />
      <AboutSection />
    </>
  )
}

export default AboutUs
