import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`scroll-to-top scroll-to-target ${isVisible ? 'visible' : ''}`}
      data-target=".main-header"
      onClick={scrollToTop}
    >
      <span className="icon fa fa-angle-up"></span>
    </div>
  )
}

export default ScrollToTop

