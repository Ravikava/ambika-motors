import HeroSection from '../components/redesign/HeroSection'
import BrandsSection from '../components/redesign/BrandsSection'
import AboutSection from '../components/redesign/AboutSection'
import ContactStrip from '../components/redesign/ContactStrip'

// Redesigned home page: the same sections as the current home (pages/Home.jsx) in the new style
const Demo = () => {
  return (
    <>
      <title>Ambika Motors | Quality Auto Parts. Best Prices. Global Delivery.</title>
      <HeroSection />
      <BrandsSection />
      <AboutSection variant="teaser" />
      <ContactStrip />
    </>
  )
}

export default Demo
