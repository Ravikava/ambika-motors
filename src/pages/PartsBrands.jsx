import PageBanner from '../components/PageBanner'

const PartsBrands = () => {

  
  const partsBrands = [
    { 
      name: 'Valvoline',
      logo: '/images/part_brand/valvoline-logo.png',
      description: 'High-performance Valvoline lubricants and engine oils'
    },
    {
      name: 'Valeo',
      logo: '/images/part_brand/valeo-logo.png',
      description: 'Premium Valeo automotive electrical and thermal systems'
    },
    {
      name: 'LUK Clutches',
      logo: '/images/part_brand/luk-clutches-logo.png',
      description: 'Reliable LUK clutches assemblies and components'
    },
    {
      name: 'Wabco',
      logo: '/images/part_brand/wabco-logo.png',
      description: 'Advanced Wabco vehicle control systems and parts'
    },
    {
      name: 'Delux Bearing',
      logo: '/images/part_brand/delux-bearing-logo.jpg',
      description: 'Durable Delux Bearing products for various vehicles'
    },
    {
      name: 'TVS-Girling',
      logo: '/images/part_brand/tvs-girling-logo.jpg',
      description: 'Quality TVS-Girling components and spare parts'
    },
    {
      name: 'emmbros AXLE',
      logo: '/images/part_brand/emmbros-logo.jpg',
      description: 'Precision Emmbros Axle assemblies and solutions'
    },
    {
      name: 'Meritor',
      logo: '/images/part_brand/meritor-logo.jpg',
      description: 'Renowned Meritor axles and vehicular drivetrain parts'
    },
    {
      name: 'Everest Genuine Parts',
      logo: '/images/part_brand/everest-logo.png',
      description: 'Genuine Everest replacement and maintenance parts'
    },
    {
      name: 'Remsons',
      logo: '/images/part_brand/remsons-logo.png',
      description: 'Reliable Remsons cables and control systems'
    },
    {
      name: 'Fras-le ( ASK )',
      logo: '/images/part_brand/ask-fras-le-logo.png',
      description: 'Trusted Fras-le (ASK) brake lining and friction materials'
    }
  ]

  // const partsBrands = [
  //   // { 
  //   //   name: 'Bosch', 
  //   //   logo: '/images/part_brand/1.png', 
  //   //   description: 'Premium quality Bosch auto parts for trucks'
  //   // },
  //   { 
  //     name: 'Delphi', 
  //     logo: '/images/part_brand/1.png', 
  //     description: 'Genuine Delphi truck parts and components'
  //   },
  //   { 
  //     name: 'Dayco', 
  //     logo: '/images/part_brand/3.png', 
  //     description: 'High-quality Dayco auto parts for export'
  //   },
  //   { 
  //     name: 'Valeo', 
  //     logo: '/images/part_brand/2.png', 
  //     description: 'Export-quality Valeo truck components'
  //   },
  //   { 
  //     name: 'Knorr Bremse', 
  //     logo: '/images/part_brand/5.png', 
  //     description: 'Complete Knorr Bremse parts catalog for trucks'
  //   },
  //   { 
  //     name: 'Wabco', 
  //     logo: '/images/part_brand/4.png', 
  //     description: 'Genuine Wabco parts and filters'
  //   },
  //   // { 
  //   //   name: 'Mann Filter', 
  //   //   logo: '/images/part_brand/7.png', 
  //   //   description: 'Premium Mann Filter parts for trucks'
  //   // },
  //   // { 
  //   //   name: 'Continental', 
  //   //   logo: '/images/part_brand/1.png', 
  //   //   description: 'High-quality Continental truck parts'
  //   // },
  //   // { 
  //   //   name: 'ZF', 
  //   //   logo: '/images/part_brand/2.png', 
  //   //   description: 'Genuine ZF transmission and parts'
  //   // },
  // ]

  return (
    <>
      <PageBanner title="Parts Brands" breadcrumb="Parts Brands" />
      
      <section className="page-content-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">What We Distribute</span>
              <h2 className="section-title">Our Parts Brands</h2>
              <div className="small-border"></div>
              <p className="section-intro">
                We export genuine auto parts from leading international brands.<br />
                Quality assured and export-ready components for global markets.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: '50px', marginLeft: '0', marginRight: '0' }}>
            {partsBrands.map((brand, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <div className="single-brand-card" style={{ 
                  textAlign: 'center', 
                  padding: '30px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  maxWidth: '100%'
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PartsBrands

