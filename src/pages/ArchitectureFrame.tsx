import { useState, useEffect } from 'react'
import './ArchitectureFrame.css'

const outputs = [
  { id: 'phone', label: 'Phone' },
  { id: 'sms', label: 'SMS' },
  { id: 'web', label: 'Web' },
  { id: 'email', label: 'Email' },
]

export function ArchitectureFrame() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const cycle = () => {
      setStage(0)
      setTimeout(() => setStage(1), 400)
      setTimeout(() => setStage(2), 1200)
      setTimeout(() => setStage(3), 2000)
    }

    cycle()
    const interval = setInterval(cycle, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="arch-frame">
      <div className="arch-frame__container">
        {/* Background Elements */}
        <div className="arch-bg">
          <div className="arch-bg__glow arch-bg__glow--1"></div>
          <div className="arch-bg__glow arch-bg__glow--2"></div>
        </div>

        {/* Main Content */}
        <div className="arch-content">
          {/* Voice Input */}
          <div className={`arch-input ${stage >= 1 ? 'arch-input--active' : ''}`}>
            <div className="arch-input__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              {stage >= 1 && (
                <div className="arch-input__waves">
                  <span></span><span></span><span></span>
                </div>
              )}
            </div>
            <div className="arch-input__text">
              <span className="arch-input__label">Voice Input</span>
              <span className="arch-input__sample">"Help with my order"</span>
            </div>
          </div>

          {/* Flow Line 1 */}
          <div className={`arch-line ${stage >= 1 ? 'arch-line--active' : ''}`}>
            <div className="arch-line__track">
              <div className="arch-line__dot"></div>
            </div>
          </div>

          {/* AI Core */}
          <div className={`arch-core ${stage >= 2 ? 'arch-core--active' : ''}`}>
            <div className="arch-core__ring"></div>
            <div className="arch-core__inner">
              <img src="/Untitled design.svg" alt="Neptyune" />
            </div>
            {stage >= 2 && <div className="arch-core__pulse"></div>}
            <span className="arch-core__label">AI Engine</span>
          </div>

          {/* Flow Line 2 */}
          <div className={`arch-line arch-line--branch ${stage >= 2 ? 'arch-line--active' : ''}`}>
            <div className="arch-line__track">
              <div className="arch-line__dot"></div>
            </div>
          </div>

          {/* Outputs */}
          <div className="arch-outputs">
            {outputs.map((out, i) => (
              <div
                key={out.id}
                className={`arch-output ${stage >= 3 ? 'arch-output--active' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="arch-output__icon">
                  {out.id === 'phone' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  )}
                  {out.id === 'sms' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  )}
                  {out.id === 'web' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  )}
                  {out.id === 'email' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  )}
                </div>
                <span className="arch-output__label">{out.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connection Lines */}
        <svg className="arch-lines" viewBox="0 0 600 400">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8BC34A" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#8BC34A" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#8BC34A" stopOpacity="0.1"/>
            </linearGradient>
          </defs>

          {/* Input to Core */}
          <path
            className={`arch-path ${stage >= 1 ? 'arch-path--active' : ''}`}
            d="M140,200 L260,200"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
          />

          {/* Core to Outputs */}
          <path
            className={`arch-path ${stage >= 2 ? 'arch-path--active' : ''}`}
            d="M360,200 Q420,200 480,115"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            style={{ transitionDelay: '0s' }}
          />
          <path
            className={`arch-path ${stage >= 2 ? 'arch-path--active' : ''}`}
            d="M360,200 Q420,200 480,172"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            style={{ transitionDelay: '0.1s' }}
          />
          <path
            className={`arch-path ${stage >= 2 ? 'arch-path--active' : ''}`}
            d="M360,200 Q420,200 480,228"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            style={{ transitionDelay: '0.2s' }}
          />
          <path
            className={`arch-path ${stage >= 2 ? 'arch-path--active' : ''}`}
            d="M360,200 Q420,200 480,285"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            style={{ transitionDelay: '0.3s' }}
          />
        </svg>
      </div>

      <p className="arch-frame__info">Platform Architecture | 600 x 400px | Refresh to replay</p>
    </div>
  )
}
