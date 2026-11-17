import PageMeta from '../components/PageMeta'
import { PAGE_META } from '../seo'
import HeroSection from '../components/redesign/HeroSection'
import BrandsSection from '../components/redesign/BrandsSection'
import AboutSection from '../components/redesign/AboutSection'
import ContactStrip from '../components/redesign/ContactStrip'

const Home = () => {
  return (
    <>
      <PageMeta meta={PAGE_META.home} />
      <HeroSection />
      <BrandsSection />
      <AboutSection variant="teaser" />
      <ContactStrip />
    </>
  )
}

export default Home
