import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'
import './theme.css'

// Shell for the redesign preview pages (/demo and the /demo-* pages)
const DemoLayout = () => {
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

export default DemoLayout
