import PageBanner from '../components/PageBanner'

const PartsBrands = () => {
  const partsBrands = [
    // { 
    //   name: 'Bosch', 
    //   logo: '/images/part_brand/1.png', 
    //   description: 'Premium quality Bosch auto parts for trucks'
    // },
    { 
      name: 'Delphi', 
      logo: '/images/part_brand/1.png', 
      description: 'Genuine Delphi truck parts and components'
    },
    { 
      name: 'Dayco', 
      logo: '/images/part_brand/3.png', 
      description: 'High-quality Dayco auto parts for export'
    },
    { 
      name: 'Valeo', 
      logo: '/images/part_brand/2.png', 
      description: 'Export-quality Valeo truck components'
    },
    { 
      name: 'Knorr Bremse', 
      logo: '/images/part_brand/5.png', 
      description: 'Complete Knorr Bremse parts catalog for trucks'
    },
    { 
      name: 'Wabco', 
      logo: '/images/part_brand/4.png', 
      description: 'Genuine Wabco parts and filters'
    },
    // { 
    //   name: 'Mann Filter', 
    //   logo: '/images/part_brand/7.png', 
    //   description: 'Premium Mann Filter parts for trucks'
    // },
    // { 
    //   name: 'Continental', 
    //   logo: '/images/part_brand/1.png', 
    //   description: 'High-quality Continental truck parts'
    // },
    // { 
    //   name: 'ZF', 
    //   logo: '/images/part_brand/2.png', 
    //   description: 'Genuine ZF transmission and parts'
    // },
  ]

  return (
    <>
      <PageBanner title="Parts Brands" breadcrumb="Parts Brands" />
      
      <section className="brand-section sec-pad centred" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="sec-title"><h2>Our Parts Brands</h2></div>
          <div className="text font-16">
            We export genuine auto parts from leading international brands.<br />
            Quality assured and export-ready components for global markets.
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
                  e.currentTarget.style.borderColor = '#ff3c00'
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

