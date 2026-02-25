import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const PartsBrandSection = ({ brands = null, showButton = true, useTemplateHeading = false, sectionLabel = 'What We Distribute', sectionTitle = 'Parts Brands We Distribute' }) => {
  const swiperRef = useRef(null)
  // Default parts brands if not provided
  const defaultBrands = brands || [
    { name: 'Delphi', logo: '/images/part_brand/1.png' },
    { name: 'Valeo', logo: '/images/part_brand/2.png' },
    { name: 'Dayco', logo: '/images/part_brand/3.png' },
    { name: 'Wabco', logo: '/images/part_brand/4.png' },
    { name: 'Knorr Bremse', logo: '/images/part_brand/5.png' },
  ]

  return (
    <section className={useTemplateHeading ? 'parts-brands-section-home sec-pad' : 'brand-section sec-pad centred'}>
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
            <div className="sec-title"><h2>Parts Brands</h2></div>
            <div className="text font-16">
              We export genuine auto parts from leading international brands.<br />
              Quality assured and export-ready components for global markets.
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
            className="brand-carousel parts-brand-carousel"
          >
            {defaultBrands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="single-brand-content item-holder" style={{ textAlign: 'center' }}>
                  <div className="img-box">
                    <Link to="/parts-brands">
                      <figure>
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="parts-brand-logo"
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
                    {/* <h3>
                      <Link to="/parts-brands" style={{ color: '#222', textDecoration: 'none' }}>
                        {brand.name}
                      </Link>
                    </h3> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons - Mobile Only */}
        <div className="brand-nav-buttons-mobile parts-brand-nav-buttons" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '30px'
        }}>
          <button 
            className="parts-brand-carousel-prev-mobile"
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
            className="parts-brand-carousel-next-mobile"
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
            <Link to="/parts-brands" className={useTemplateHeading ? 'btn-cta' : 'btn-one btn-border'}>
              Show All Parts Brands
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default PartsBrandSection

