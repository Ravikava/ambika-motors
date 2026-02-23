import { Link } from 'react-router-dom'

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <section className="about-banner centred" style={{ backgroundImage: 'url(/images/about/1.jpg)' }}>
      <div className="container">
        <div className="content-box">
          <div className="title">{title}</div>
          <ul className="bread-crumb">
            <li><Link to="/">Home</Link></li>
            {breadcrumb && <li>{breadcrumb}</li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageBanner

