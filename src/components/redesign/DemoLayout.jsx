import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'
import './theme.css'
import './theme-glass.css'

// Shell for the redesign preview pages (/demo and the /demo-* pages).
// theme="glass" switches to the frosted-glass variant; homePath is where the Home link and logo go.
const DemoLayout = ({ theme, homePath = '/demo' }) => {
  const isGlass = theme === 'glass'

  return (
    <div className={isGlass ? 'am-v2 am-v2--glass' : 'am-v2'}>
      <Navbar homePath={homePath} />
      <main className="v2-main">
        <Outlet />
      </main>
      <SiteFooter homePath={homePath} />
    </div>
  )
}

export default DemoLayout
