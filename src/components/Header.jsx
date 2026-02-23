import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className="main-header">
        {/* header-top */}
        <div className="header-top">
          <div className="container-fluid">
            <ul className="top-left in-block">
              <li><i className="fa fa-envelope-o"></i> support@ambikamotors.com</li>
              <li><i className="fa fa-phone"></i> +91-7359550113</li>
            </ul>
            <div className="top-right">
              {/* <div className="select-box">
                <i className="fa fa-angle-down"></i>
                <select className="text-capitalize selectpicker form-control required" name="form_subject" data-style="g-select" data-width="100%">
                  <option value="0" defaultValue>USD</option>
                  <option value="1">INR</option>
                  <option value="2">EUR</option>
                </select>
              </div> */}
              {/* <div className="language-switcher">
                <div id="polyglotLanguageSwitcher" className="">
                  <form action="#">
                    <select id="polyglot-language-options">
                      <option id="en" value="en" defaultValue>ENG</option>
                      <option id="fr" value="fr">Fre</option>
                      <option id="de" value="de">Ger</option>
                      <option id="it" value="it">Ita</option>
                      <option id="es" value="es">Span</option>
                    </select>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* main-menu-area */}
        <div className={`theme_menu stricky ${isScrolled ? 'fixed' : ''}`}>
          <div className="container-fluid">
            <div className="main-header-content">
              <div className="logo-box">
                <Link to="/"><img src="/images/logo/logo.png" alt="Ambika Motors" style={{ width: '115px', height: 'auto' }} /></Link>
              </div>
              <nav className="main-menu">
                <div className="navbar-header">
                  <button 
                    type="button" 
                    className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      cursor: 'pointer',
                      zIndex: 1000,
                      position: 'relative'
                    }}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className={`navbar-collapse collapse clearfix ${isMenuOpen ? 'in' : ''}`}>
                  <ul className="navigation clearfix">
                    <li className={isActive('/') ? 'current' : ''}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={isActive('/truck-brands') ? 'current' : ''}>
                      <Link to="/truck-brands">Truck Brands</Link>
                    </li>
                    <li className={isActive('/parts-brands') ? 'current' : ''}>
                      <Link to="/parts-brands">Parts Brands</Link>
                    </li>
                    <li className={isActive('/about-us') ? 'current' : ''}>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li className={isActive('/contact-us') ? 'current' : ''}>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>

                  {/* mobile menu */}
                  <ul className="mobile-menu clearfix">
                    <li className={isActive('/') ? 'current' : ''}>
                      <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className={isActive('/truck-brands') ? 'current' : ''}>
                      <Link to="/truck-brands" onClick={toggleMenu}>Truck Brands</Link>
                    </li>
                    <li className={isActive('/parts-brands') ? 'current' : ''}>
                      <Link to="/parts-brands" onClick={toggleMenu}>Parts Brands</Link>
                    </li>
                    <li className={isActive('/about-us') ? 'current' : ''}>
                      <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
                    </li>
                    <li className={isActive('/contact-us') ? 'current' : ''}>
                      <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <div className="nav-right-content">
                <div className="input-form">
                  <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input type="search" name="search-field" placeholder="Search" />
                      <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

