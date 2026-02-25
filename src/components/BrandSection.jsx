import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const BrandSection = ({ brands = null, showButton = true, useTemplateHeading = false, sectionLabel = 'Our Coverage', sectionTitle = 'Truck Brands We Cover' }) => {
  const swiperRef = useRef(null)
  // Default brands if not provided
  const defaultBrands = brands || [
    { name: 'Tata', logo: '/images/brand/1.png', slug: 'tata' },
    { name: 'Ashok Leyland', logo: '/images/brand/2.png', slug: 'ashok-leyland' },
    { name: 'Mahindra', logo: '/images/brand/3.png', slug: 'mahindra' },
    { name: 'Eicher', logo: '/images/brand/4.png', slug: 'eicher' },
    { name: 'ISUZU', logo: '/images/brand/5.png', slug: 'isuzu' },
    { name: 'New Holland', logo: '/images/brand/6.png', slug: 'new-holland' },
    { name: 'Tafe', logo: '/images/brand/7.png', slug: 'tafe' },
  ]

  return (
    <section className={useTemplateHeading ? 'truck-brands-section-home sec-pad' : 'brand-section sec-pad centred'}>
      <div className="container">
        {useTemplateHeading ? (
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-label">{sectionLabel}</span>
              <h2 className="section-title"><span className="id-color">{sectionTitle}</span></h2>
              <div className="small-border"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="sec-title"><h2>Trusted Brands</h2></div>
            <div className="text font-16">
              We export genuine truck auto parts for all major Indian truck brands.<br />
              Quality assured and export-ready components.
            </div>
          </>
        )}
        <div className="three-column-carousel owl-dots-none" style={{ marginTop: '50px', marginBottom: '40px', position: 'relative' }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              }
            }}
            className="brand-carousel"
          >
            {defaultBrands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="single-brand-content item-holder" style={{ textAlign: 'center' }}>
                  <div className="img-box">
                    <Link to={`/truck-brands/${brand.slug}`}>
                      <figure>
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          style={{ 
                            width: '100%', 
                            maxWidth: '200px', 
                            height: 'auto', 
                            maxHeight: '120px', 
                            objectFit: 'contain',
                            margin: '0 auto',
                            display: 'block'
                          }} 
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to={`/truck-brands/${brand.slug}`} style={{ color: '#222', textDecoration: 'none' }}>
                        {brand.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons - Mobile Only */}
        <div className="brand-nav-buttons-mobile" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '30px'
        }}>
          <button 
            className="brand-carousel-prev-mobile"
            onClick={() => swiperRef.current?.slidePrev()}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              color: '#ff3c00',
              cursor: 'pointer',
              boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff3c00'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
              e.currentTarget.style.color = '#ff3c00'
            }}
          >
            <i className="fa fa-angle-left"></i>
          </button>
          <button 
            className="brand-carousel-next-mobile"
            onClick={() => swiperRef.current?.slideNext()}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              color: '#ff3c00',
              cursor: 'pointer',
              boxShadow: '0 2px 15px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff3c00'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
              e.currentTarget.style.color = '#ff3c00'
            }}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
        
        {showButton && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '30px'
          }}>
            <Link to="/truck-brands" className={useTemplateHeading ? 'btn-cta' : 'btn-one btn-border'}>
              Show All Brands
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default BrandSection

