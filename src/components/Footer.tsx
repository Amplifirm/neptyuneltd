import { Twitter, Linkedin, Youtube } from 'lucide-react'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">neptyune</span>
            <p className="footer__tagline">Voice AI for the modern business</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link">
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Solutions</h4>
            <a href="#solutions">Triton for SMBs</a>
            <a href="#solutions">Proteus for Enterprise</a>
            <a href="#solutions">Thalassa IVR</a>
            <a href="#contact">Pricing</a>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>
            <a href="#contact">Documentation</a>
            <a href="#contact">API Reference</a>
            <a href="#contact">Blog</a>
            <a href="#contact">Case Studies</a>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Careers</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Press</a>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
            <a href="#">GDPR</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Neptyune. All rights reserved.</p>
          <p className="footer__credits">
            Named after the moons of Neptune: Triton, Proteus, Thalassa
          </p>
        </div>
      </div>
    </footer>
  )
}
