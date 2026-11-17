import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import SiteLayout from './components/redesign/SiteLayout'
import Home from './pages/Home'
import TruckBrands from './pages/TruckBrands'
import TruckBrandDetails from './pages/TruckBrandDetails'
import TractorBrands from './pages/TractorBrands'
import PartsBrands from './pages/PartsBrands'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import { REDIRECTS, ROUTES, truckBrandPath } from './routes'

// Old preview links to a truck brand (/demo-truck-brands/tata) keep working
const PreviewTruckBrandRedirect = () => {
  const { brandSlug } = useParams()
  return <Navigate to={truckBrandPath(brandSlug)} replace />
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Preloader />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.truckBrands} element={<TruckBrands />} />
          <Route path={`${ROUTES.truckBrands}/:brandSlug`} element={<TruckBrandDetails />} />
          <Route path={ROUTES.tractorBrands} element={<TractorBrands />} />
          <Route path={ROUTES.partsBrands} element={<PartsBrands />} />
          <Route path={ROUTES.about} element={<AboutUs />} />
          <Route path={ROUTES.contact} element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {Object.entries(REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="/demo-truck-brands/:brandSlug" element={<PreviewTruckBrandRedirect />} />
      </Routes>
      <ScrollToTop />
    </Router>
  )
}

export default App
