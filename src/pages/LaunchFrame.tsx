import { useState, useEffect } from 'react'
import './LaunchFrame.css'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 60 + 20,
  delay: Math.random() * 2,
  duration: Math.random() * 1.5 + 1.5,
  size: Math.random() * 4 + 2,
}))

const stars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 80 + 10,
  y: Math.random() * 50 + 10,
  delay: Math.random() * 1.5,
  size: Math.random() * 3 + 2,
}))

export function LaunchFrame() {
  const [launched, setLaunched] = useState(false)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    const cycle = () => {
      setLaunched(false)
      setShowStars(false)

      setTimeout(() => setLaunched(true), 500)
      setTimeout(() => setShowStars(true), 1800)
    }

    cycle()
    const interval = setInterval(cycle, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="launch-frame">
      <div className="launch-frame__container">
        {/* Background Stars */}
        <div className={`stars-layer ${showStars ? 'stars-layer--visible' : ''}`}>
          {stars.map(star => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
          {/* Constellation Lines */}
          <svg className="constellation-lines" viewBox="0 0 480 360">
            <path
              className="constellation-path"
              d="M80,80 L160,120 L240,60 L320,140 L400,100"
              fill="none"
              stroke="#8BC34A"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <path
              className="constellation-path"
              d="M120,200 L200,160 L280,220 L360,180"
              fill="none"
              stroke="#8BC34A"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ animationDelay: '0.3s' }}
            />
          </svg>
        </div>

        {/* Rocket */}
        <div className={`rocket ${launched ? 'rocket--launched' : ''}`}>
          <div className="rocket__body">
            <div className="rocket__tip"></div>
            <div className="rocket__middle">
              <img src="/Untitled design.svg" alt="Neptyune" />
            </div>
            <div className="rocket__fins">
              <div className="rocket__fin rocket__fin--left"></div>
              <div className="rocket__fin rocket__fin--right"></div>
            </div>
          </div>

          {/* Exhaust */}
          <div className={`exhaust ${launched ? 'exhaust--active' : ''}`}>
            <div className="exhaust__flame"></div>
            <div className="exhaust__flame exhaust__flame--2"></div>
          </div>
        </div>

        {/* Trailing Particles */}
        <div className={`particles ${launched ? 'particles--active' : ''}`}>
          {particles.map(p => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: `${p.x}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                width: p.size,
                height: p.size,
              }}
            />
          ))}
        </div>

        {/* Label */}
        <div className={`launch-label ${showStars ? 'launch-label--visible' : ''}`}>
          <span>Launch Your Voice AI</span>
        </div>
      </div>

      <p className="launch-frame__info">Launch Animation | 480 x 360px | Refresh to replay</p>
    </div>
  )
}
