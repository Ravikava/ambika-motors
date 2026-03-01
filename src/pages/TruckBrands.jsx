import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const TruckBrands = () => {
  const truckBrands = [
    { 
      name: 'Tata', 
      logo: '/images/truck-brand/tata-logo.png', 
      description: 'Complete range of genuine Tata truck parts for export',
      slug: 'tata'
    },
    { 
      name: 'Ashok Leyland', 
      logo: '/images/truck-brand/ashok-leyland-logo.png', 
      description: 'Export-quality Ashok Leyland truck components',
      slug: 'ashok-leyland'
    },
    { 
      name: 'Mahindra', 
      logo: '/images/truck-brand/mahindra-logo.png', 
      description: 'Genuine Mahindra truck parts and accessories',
      slug: 'mahindra'
    },
    { 
      name: 'Eicher', 
      logo: '/images/truck-brand/eicher-logo.png', 
      description: 'High-quality Eicher truck parts for global markets',
      slug: 'eicher'
    },
    { 
      name: 'ISUZU', 
      logo: '/images/truck-brand/isuzu-logo.png', 
      description: 'Complete ISUZU truck parts catalog for export',
      slug: 'isuzu'
    },
    { 
      name: 'BharatBenz', 
      logo: '/images/truck-brand/bharat-benz-logo.png', 
      description: 'Complete BharatBenz truck parts catalog for export',
      slug: 'bharatbenz'
    },
    // { 
    //   name: 'New Holland', 
    //   logo: '/images/brand/6.png', 
    //   description: 'Complete New Holland truck parts catalog for export',
    //   slug: 'new-holland'
    // },
    // { 
    //   name: 'Tafe', 
    //   logo: '/images/brand/7.png', 
    //   description: 'Complete Tafe truck parts catalog for export',
    //   slug: 'tafe'
    // },
  ]

  return (
    <>
      <PageBanner title="Truck Brands" breadcrumb="Truck Brands" />
      
      <section className="page-content-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">Our Coverage</span>
              <h2 className="section-title">Truck Brands We Cover</h2>
              <div className="small-border"></div>
              <p className="section-intro">
                We export genuine truck auto parts for all major Indian truck brands.<br />
                Quality assured and export-ready components for global markets.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: '50px', marginLeft: '0', marginRight: '0' }}>
            {truckBrands.map((brand, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <Link 
                  to={`/truck-brands/${brand.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div className="single-brand-card" style={{ 
                    textAlign: 'center', 
                    padding: '30px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    maxWidth: '100%',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ambika-primary)'
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '130px' }}>
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        style={{ maxWidth: '100%', width: 'auto', maxHeight: '130px', height: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                    <h3 style={{ marginBottom: '15px', fontSize: '24px', fontWeight: '600', color: '#222' }}>
                      {brand.name}
                    </h3>
                    <p style={{ color: '#666', fontSize: '14px' }}>
                      {brand.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TruckBrands

