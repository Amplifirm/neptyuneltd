import './Nav.css'

export function Nav() {
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
      </div>
    </nav>
  )
}
