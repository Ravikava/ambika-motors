import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const heroImages = [
    { desktop: '/images/slider/Hero Section 01.jpg', mobile: '/images/slider/Hero Section Mobile 01.jpg' },
    { desktop: '/images/slider/Hero Section 02.jpg', mobile: '/images/slider/Hero Section Mobile 02.jpg' }
  ]

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768)
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-slider">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={isMobile ? (image.mobile || image.desktop) : image.desktop}
              alt={`Slide ${index + 1}`}
              className="hero-image"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="hero-content">
          {/* <div className="hero-content-inner">
            <h1 className="hero-title">Exporting Genuine Auto Parts & Oils Worldwide</h1>
            <p className="hero-subtitle">Reliable quality, best prices, and on-time global delivery from India.</p>
          </div> */}
          <div className="hero-content-inner">
            <h1 className="hero-title">Quality Auto Parts. Best Prices. Global Delivery.</h1>
            <p className="hero-subtitle">Ambika Motors – Exporting excellence from India.</p>
          </div>
        </div>
        <div className="slide-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
