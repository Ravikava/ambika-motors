import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'
import './theme.css'

// Shell for every page: navbar, page content, footer, in the orange theme (theme.css).
const SiteLayout = () => {
  return (
    <div className="am-v2">
      <Navbar />
      <main className="v2-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
