import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
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
import DemoLayout from './components/redesign/DemoLayout'
import Demo from './pages/Demo'
import DemoContactUs from './pages/DemoContactUs'
import DemoAboutUs from './pages/DemoAboutUs'
import DemoTruckBrands from './pages/DemoTruckBrands'
import DemoTruckBrandDetails from './pages/DemoTruckBrandDetails'
import DemoTractorBrands from './pages/DemoTractorBrands'
import DemoPartsBrands from './pages/DemoPartsBrands'

// Current site shell; the /demo* redesign pages render outside it in DemoLayout
function SiteLayout() {
  return (
    <div className="boxed_wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Preloader />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/truck-brands" element={<TruckBrands />} />
          <Route path="/truck-brands/:brandSlug" element={<BrandDetails />} />
          <Route path="/tractor-brands" element={<TractorBrands />} />
          <Route path="/parts-brands" element={<PartsBrands />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
        {/* Home: the frosted-glass version at /demo, the orange version kept at /demo-2 */}
        <Route element={<DemoLayout theme="glass" />}>
          <Route path="/demo" element={<Demo />} />
        </Route>
        <Route element={<DemoLayout homePath="/demo-2" />}>
          <Route path="/demo-2" element={<Demo />} />
        </Route>
        <Route element={<DemoLayout />}>
          <Route path="/demo-truck-brands" element={<DemoTruckBrands />} />
          <Route path="/demo-truck-brands/:brandSlug" element={<DemoTruckBrandDetails />} />
          <Route path="/demo-tractor-brands" element={<DemoTractorBrands />} />
          <Route path="/demo-parts-brands" element={<DemoPartsBrands />} />
          <Route path="/demo-about-us" element={<DemoAboutUs />} />
          <Route path="/demo-contact-us" element={<DemoContactUs />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </Router>
  )
}

export default App
