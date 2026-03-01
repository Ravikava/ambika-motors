import PageBanner from '../components/PageBanner'

const TractorBrands = () => {
  const tractorBrands = [
    { name: 'Farmtrac', logo: '/images/tractor-brand/farmtrac-logo.jpg', description: 'Complete range of genuine Farmtrac tractor parts for export' },
    { name: 'Force', logo: '/images/tractor-brand/force-logo.jpg', description: 'Export-quality Force tractor components' },
    { name: 'John Deere', logo: '/images/tractor-brand/john-deere-logo.png', description: 'Complete range of genuine John Deere tractor parts for export' },
    { name: 'Mahindra', logo: '/images/truck-brand/mahindra-logo.png', description: 'Complete Mahindra tractor parts catalog for export' },
    { name: 'New Holland', logo: '/images/tractor-brand/new-holland-logo.png', description: 'Genuine New Holland tractor parts and accessories' },
    { name: 'SML', logo: '/images/tractor-brand/sml-logo.jpg', description: 'High-quality SML tractor parts for global markets' },
    { name: 'Sonalika', logo: '/images/tractor-brand/Sonalika-logo.jpg', description: 'Complete Sonalika tractor parts catalog for export' },
    { name: 'TAFE', logo: '/images/tractor-brand/tafe-logo.png', description: 'Complete TAFE tractor parts catalog for export' },
  ]

  return (
    <>
      <PageBanner title="Tractor Brands" breadcrumb="Tractor Brands" />

      <section className="page-content-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">Our Coverage</span>
              <h2 className="section-title">Tractor Brands We Cover</h2>
              <div className="small-border"></div>
              <p className="section-intro">
                We export genuine tractor parts for all major tractor brands.<br />
                Quality assured and export-ready components for global markets.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: '50px', marginLeft: '0', marginRight: '0' }}>
            {tractorBrands.map((brand, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '40px' }}>
                <div className="single-brand-card" style={{
                  textAlign: 'center',
                  padding: '30px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  width: '100%',
                  maxWidth: '100%'
                }}>
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

export default TractorBrands
