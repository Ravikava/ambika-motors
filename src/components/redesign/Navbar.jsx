import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from './navLinks'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  // Close the mobile menu when keyboard focus moves to something outside the header.
  // A blur with no new focus target is ignored: iOS Safari doesn't focus links on tap, so
  // closing then would hide the menu before the tapped link's click lands.
  const handleBlur = (e) => {
    if (isMenuOpen && e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!isMenuOpen) return
    // The links come before the toggle in the DOM, so move focus into the opened menu
    navRef.current?.querySelector('a')?.focus()
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    // Taps / clicks outside the header close the menu
    const handlePointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className={`v2-navbar ${isMenuOpen ? 'menu-open' : ''}`} onBlur={handleBlur}>
      <div className="v2-navbar-inner">
        <Link to="/demo" className="v2-navbar-logo" onClick={closeMenu}>
          <img src="/images/redesign/logo-mark.png" alt="Ambika Motors" />
        </Link>

        <nav id="v2-primary-nav" ref={navRef} className="v2-navbar-links" aria-label="Primary">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="v2-navbar-link"
              // On a sub-page (e.g. a truck brand) the link marks the current section, not the current page
              aria-current={pathname.replace(/\/$/, '') === to ? 'page' : 'true'}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="v2-navbar-actions">
          <Link to="/demo-contact-us" className="v2-btn" onClick={closeMenu}>
            Contact
            <img src="/images/redesign/icon-headset.svg" alt="" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="v2-navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="v2-primary-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
