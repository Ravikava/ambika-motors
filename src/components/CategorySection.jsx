import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const CategorySection = () => {
  const swiperRef = useRef(null)
  const categories = [
    {
      image: '/images/home/c1.jpg',
      title: 'Engine Parts',
      description: 'Complete range of engine components including pistons, cylinders, gaskets, and more for all major truck brands.'
    },
    {
      image: '/images/home/c2.jpg',
      title: 'Wheels & Tires',
      description: 'High-quality wheels, rims, and tire components designed for heavy-duty truck applications.'
    },
    {
      image: '/images/home/c3.jpg',
      title: 'Body Parts',
      description: 'Bumpers, fenders, doors, and other body components manufactured to original specifications.'
    }
  ]

  return (
    <section className="category-section">
      <div className="container-fluid">
        <div className="category-title page-title">Category</div>
        <div className="row">
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="category-content">
              <div className="sec-title">
                <h2>WELCOME <br />TO TRUCKS AUTOPARTS EXPORT</h2>
              </div>
              <div className="text">
                We specialize in exporting genuine truck auto parts 
                for major Indian truck brands. Quality assured and 
                export-ready components.
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="category-carousel-wrapper" style={{ position: 'relative' }}>
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  }
                }}
                className="category-carousel three-column-carousel"
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-category-content">
                      <div className="img-box">
                        <img 
                          src={category.image} 
                          alt={category.title} 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block'
                          }} 
                        />
                        <div className="img-content">{category.title}</div>
                      </div>
                      <div className="hover-content">
                        <div className="content">
                          <div className="title">
                            <a href="#">{category.title}</a>
                          </div>
                          <div className="text">
                            <p>{category.description}</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation Buttons - Mobile Only (below carousel) */}
              <div className="category-nav-buttons-mobile">
                <button 
                  className="category-carousel-prev-mobile"
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
                  className="category-carousel-next-mobile"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection

