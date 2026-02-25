import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`ambika-header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-content">
                <div className="logo">
                  <Link to="/" onClick={closeMenu}>
                    <img src="/images/logo/logo.png" alt="Ambika Motors" className="logo-img" />
                  </Link>
                </div>

                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                  <ul>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/truck-brands" onClick={closeMenu}>Truck Brands</Link></li>
                    <li><Link to="/parts-brands" onClick={closeMenu}>Parts Brands</Link></li>
                    <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                    <li><Link to="/contact-us" onClick={closeMenu}>Contact Us</Link></li>
                    <li className="mobile-cta">
                      <Link to="/contact-us" className="btn-contact-mobile" onClick={closeMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                {isMenuOpen && (
                  <div className="menu-overlay" onClick={closeMenu} aria-hidden="true" />
                )}

                <div className="header-actions">
                  <Link to="/contact-us" className="btn-contact desktop-only">
                    Contact
                  </Link>
                  <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
