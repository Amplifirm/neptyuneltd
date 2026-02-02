import { useState } from 'react'
import './Nav.css'

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav__island">
        <a href="/" className="nav__logo">
          <img src="/Untitled design.svg" alt="Neptyune" className="nav__logo-img" />
        </a>

        <div className="nav__links">
          <a href="#solutions">Solutions</a>
          <a href="#about">Platform</a>
          <a href="#integrations">Integrations</a>
        </div>

        <a href="#contact" className="nav__cta">Get Started</a>

        <button
          className="nav__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav__mobile-menu ${isMenuOpen ? 'nav__mobile-menu--open' : ''}`}>
        <div className="nav__mobile-header">
          <a href="/" className="nav__logo" onClick={closeMenu}>
            <img src="/Untitled design.svg" alt="Neptyune" className="nav__logo-img" />
          </a>
          <button
            className="nav__close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav__mobile-links">
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#about" onClick={closeMenu}>Platform</a>
          <a href="#integrations" onClick={closeMenu}>Integrations</a>
          <a href="#contact" className="nav__mobile-cta" onClick={closeMenu}>Get Started</a>
        </div>
      </div>

      {isMenuOpen && <div className="nav__overlay" onClick={closeMenu}></div>}
    </nav>
  )
}
