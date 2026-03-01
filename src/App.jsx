import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import TruckBrands from './pages/TruckBrands'
import BrandDetails from './pages/BrandDetails'
import TractorBrands from './pages/TractorBrands'
import PartsBrands from './pages/PartsBrands'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="boxed_wrapper">
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/truck-brands" element={<TruckBrands />} />
          <Route path="/truck-brands/:brandSlug" element={<BrandDetails />} />
          <Route path="/tractor-brands" element={<TractorBrands />} />
          <Route path="/parts-brands" element={<PartsBrands />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
