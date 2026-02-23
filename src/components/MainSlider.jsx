import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null)

  const slides = [
    {
      image: '/images/slider/new-1.jpg',
      title: 'Export Quality',
      subtitle: 'Truck Auto Parts',
      text: 'We provide genuine truck auto parts for export with the highest quality standards and competitive pricing.',
      buttonText: 'Contact Us'
    },
    {
      image: '/images/slider/new-2.jpg',
      title: 'Global Export',
      subtitle: 'Trusted Worldwide',
      text: 'Serving customers across the globe with reliable truck parts export services and timely delivery.',
      buttonText: 'Learn More'
    },
    {
      image: '/images/slider/new-3.jpg',
      title: 'Premium Quality',
      subtitle: 'Bumper to Bumper',
      text: 'Complete range of truck parts from engine components to body parts, all export-ready and quality assured.',
      buttonText: 'View Brands'
    }
  ]

  useEffect(() => {
    if (swiperInstance) {
      setActiveIndex(swiperInstance.realIndex)
      // Ensure first slide is visible on mount
      setTimeout(() => {
        setActiveIndex(swiperInstance.realIndex)
      }, 100)
    }
  }, [swiperInstance])

  return (
    <section className="main-slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="main-slider-carousel"
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => {
          // For loop mode, check if this is the active slide
          const isActive = activeIndex === index
          return (
            <SwiperSlide key={index}>
              <div 
                className={`slide ${isActive ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="container">
                  <div className={`content ${isActive ? 'active' : ''}`}>
                    <div className={`title ${isActive ? 'active' : ''}`}>
                      <span>{slide.title}</span> {slide.subtitle}
                    </div>
                    <div className={`text ${isActive ? 'active' : ''}`}>{slide.text}</div>
                    <div className={`tp-btn ${isActive ? 'active' : ''}`}>
                      <a href="/contact-us" className="btn-one btn-border">{slide.buttonText}</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <style>{`
        .main-slider .slide.active .title,
        .main-slider .slide.active .text,
        .main-slider .slide.active .tp-btn,
        .main-slider .content.active .title,
        .main-slider .content.active .text,
        .main-slider .content.active .tp-btn {
          opacity: 1 !important;
          -webkit-transform: translateY(0) !important;
          -moz-transform: translateY(0) !important;
          -ms-transform: translateY(0) !important;
          -o-transform: translateY(0) !important;
          transform: translateY(0) !important;
        }
        /* Ensure first slide is visible on initial load */
        .main-slider .swiper-slide-active .slide {
          opacity: 1;
        }
        .main-slider .swiper-slide-active .title,
        .main-slider .swiper-slide-active .text,
        .main-slider .swiper-slide-active .tp-btn {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}

export default MainSlider

