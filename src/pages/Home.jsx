import Hero from '../components/Hero'
import PartsBrandSection from '../components/PartsBrandSection'
import BrandSection from '../components/BrandSection'
import AboutSection from '../components/AboutSection'
import ContactSectionHome from '../components/ContactSectionHome'

const Home = () => {
  return (
    <>
      <Hero />
      <PartsBrandSection useTemplateHeading sectionLabel="What We Distribute" sectionTitle="Parts Brands We Distribute" />
      <BrandSection useTemplateHeading sectionLabel="Our Coverage" sectionTitle="Truck Brands We Cover" />
      <AboutSection />
      <ContactSectionHome />
    </>
  )
}

export default Home
