import MainSlider from '../components/MainSlider'
import CategorySection from '../components/CategorySection'
import CollectionSection from '../components/CollectionSection'
import OfferSection from '../components/OfferSection'
import FactCounter from '../components/FactCounter'
import BrandSection from '../components/BrandSection'
import PartsBrandSection from '../components/PartsBrandSection'

const Home = () => {
  return (
    <>
      <MainSlider />
      <CategorySection />
      <CollectionSection />
      {/* <OfferSection /> */}
      <FactCounter />
      <BrandSection />
      <PartsBrandSection />
    </>
  )
}

export default Home

