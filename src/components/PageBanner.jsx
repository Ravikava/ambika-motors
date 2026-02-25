import { Link } from 'react-router-dom'
import './PageBanner.css'

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <section className="ambika-page-banner about-banner centred" style={{ backgroundImage: 'url(/images/about/1.jpg)' }}>
      <div className="container">
        <div className="content-box">
          <span className="section-label">{title}</span>
          <div className="small-border"></div>
          <ul className="bread-crumb"  style={{ listStyle: 'none' }}>
            <li><Link to="/">Home</Link></li>
            {breadcrumb && <li>{breadcrumb}</li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageBanner

