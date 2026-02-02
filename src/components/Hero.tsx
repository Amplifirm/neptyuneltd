import { useEffect, useState } from 'react'
import { Button } from './Button'
import './Hero.css'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className={`hero__content ${isVisible ? 'animate-slide-left' : ''}`}>
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Voice AI Platform
            </div>
            <h1 className="hero__title">
              Build voice agents<span className="hero__title-accent"> in conversation</span>
            </h1>
            <p className="hero__subtitle">
              Create intelligent voicebots as easily as describing what you need.
              No code, no complexity—just tell us what you want your voice agent to do,
              and watch it come to life in minutes.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" href="#contact">Start Building Free</Button>
              <Button variant="ghost" size="lg" href="#contact">Watch Demo</Button>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">50M+</span>
                <span className="hero__stat-label">Calls handled</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-value">2,000+</span>
                <span className="hero__stat-label">Businesses</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-value">99.9%</span>
                <span className="hero__stat-label">Uptime</span>
              </div>
            </div>
          </div>

          <div className={`hero__visual ${isVisible ? 'animate-slide-right delay-2' : ''}`}>
            <div className="hero__visual-container">
              <video
                className="hero__video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/hero-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
