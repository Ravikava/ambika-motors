import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const BrandDetails = () => {
  const { brandSlug } = useParams()

  // Brand data with truck models
  const brandData = {
    'tata': {
      name: 'Tata',
      logo: '/images/brand/1.png',
      description: 'Complete range of genuine Tata truck parts for export',
      models: [
        { name: 'Tata 407', image: '/images/home/c1.jpg' },
        { name: 'Tata 709', image: '/images/home/c2.jpg' },
        { name: 'Tata 1109', image: '/images/home/c3.jpg' },
        { name: 'Tata 1613', image: '/images/home/c1.jpg' },
        { name: 'Tata 2518', image: '/images/home/c2.jpg' },
        { name: 'Tata 3118', image: '/images/home/c3.jpg' },
      ]
    },
    'ashok-leyland': {
      name: 'Ashok Leyland',
      logo: '/images/brand/2.png',
      description: 'Export-quality Ashok Leyland truck components',
      models: [
        { name: 'Ashok Leyland 1613', image: '/images/home/c1.jpg' },
        { name: 'Ashok Leyland 2518', image: '/images/home/c2.jpg' },
        { name: 'Ashok Leyland 3120', image: '/images/home/c3.jpg' },
        { name: 'Ashok Leyland 4018', image: '/images/home/c1.jpg' },
      ]
    },
    'mahindra': {
      name: 'Mahindra',
      logo: '/images/brand/3.png',
      description: 'Genuine Mahindra truck parts and accessories',
      models: [
        { name: 'Mahindra Bolero Pickup', image: '/images/home/c1.jpg' },
        { name: 'Mahindra Load King', image: '/images/home/c2.jpg' },
        { name: 'Mahindra Furio', image: '/images/home/c3.jpg' },
      ]
    },
    'eicher': {
      name: 'Eicher',
      logo: '/images/brand/4.png',
      description: 'High-quality Eicher truck parts for global markets',
      models: [
        { name: 'Eicher 11.10', image: '/images/home/c1.jpg' },
        { name: 'Eicher 20.16', image: '/images/home/c2.jpg' },
        { name: 'Eicher 25.16', image: '/images/home/c3.jpg' },
      ]
    },
    'isuzu': {
      name: 'ISUZU',
      logo: '/images/brand/5.png',
      description: 'Complete ISUZU truck parts catalog for export',
      models: [
        { name: 'ISUZU NPR', image: '/images/home/c1.jpg' },
        { name: 'ISUZU NQR', image: '/images/home/c2.jpg' },
        { name: 'ISUZU FTR', image: '/images/home/c3.jpg' },
      ]
    },
    'new-holland': {
      name: 'New Holland',
      logo: '/images/brand/6.png',
      description: 'Complete New Holland truck parts catalog for export',
      models: [
        { name: 'New Holland T7', image: '/images/home/c1.jpg' },
        { name: 'New Holland T8', image: '/images/home/c2.jpg' },
      ]
    },
    'tafe': {
      name: 'Tafe',
      logo: '/images/brand/7.png',
      description: 'Complete Tafe truck parts catalog for export',
      models: [
        { name: 'Tafe 45', image: '/images/home/c1.jpg' },
        { name: 'Tafe 55', image: '/images/home/c2.jpg' },
        { name: 'Tafe 75', image: '/images/home/c3.jpg' },
      ]
    }
  }

  const brand = brandData[brandSlug] || brandData['tata']

  return (
    <>
      <PageBanner title={brand.name} breadcrumb={`${brand.name} Models`} />

      <section className="brand-section sec-pad centred" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="sec-title"><h2>{brand.name} Truck Models</h2></div>
          <div className="text font-16">
            {brand.description}<br />
            Click on any model to view available parts.
          </div>

          {/* Brand Logo */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <img 
              src={brand.logo} 
              alt={brand.name} 
              style={{ 
                maxWidth: '300px', 
                height: 'auto', 
                maxHeight: '150px', 
                objectFit: 'contain' 
              }} 
            />
          </div>

          {/* Truck Models Grid */}
          <div className="row masonary-layout filter-layout centred" style={{ marginTop: '50px' }}>
            {brand.models.map((model, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12 filter-item" style={{ marginBottom: '30px' }}>
                <div className="item-holder" style={{ 
                  background: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <div className="img-box">
                    <figure>
                      <img 
                        src={model.image} 
                        alt={model.name}
                        style={{ 
                          width: '100%', 
                          height: '250px', 
                          objectFit: 'cover',
                          display: 'block'
                        }} 
                      />
                    </figure>
                  </div>
                  <div className="lower-content" style={{ 
                    padding: '20px',
                    textAlign: 'center',
                    background: '#fff'
                  }}>
                    <h3 style={{ 
                      margin: '0',
                      fontSize: '20px', 
                      fontWeight: '600',
                      color: '#222',
                      fontFamily: "'Montserrat', sans-serif"
                    }}>
                      {model.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Brands Button */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/truck-brands" className="btn-one btn-border">
              Back to All Brands
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandDetails

