import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const tractorBrands = [
  { name: 'Farmtrac', logo: '/images/tractor-brand/farmtrac-logo.jpg' },
  { name: 'Force', logo: '/images/tractor-brand/force-logo.jpg' },
  { name: 'New Holland', logo: '/images/tractor-brand/new-holland-logo.png' },
  { name: 'SML', logo: '/images/tractor-brand/sml-logo.jpg' },
  { name: 'Sonalika', logo: '/images/tractor-brand/Sonalika-logo.jpg' },
  { name: 'TAFE', logo: '/images/tractor-brand/tafe-logo.png' },
]

const TractorBrandSection = () => {
  const swiperRef = useRef(null)

  return (
    <section className="tractor-brands-section-home sec-pad centred">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="section-label">Our Coverage</span>
            <h2 className="section-title"><span className="id-color">Tractor Brands We Cover</span></h2>
            <div className="small-border"></div>
            <div className="text font-16" style={{ marginTop: '16px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              We export genuine tractor parts for major tractor brands.<br />
              Quality assured and export-ready components.
            </div>
          </div>
        </div>
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
            className="brand-carousel tractor-brand-carousel"
          >
            {tractorBrands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="single-brand-content item-holder" style={{ textAlign: 'center' }}>
                  <div className="img-box">
                    <figure>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="tractor-brand-logo"
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
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/tractor-brands" className="btn-cta">
            Show All Brands
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TractorBrandSection
