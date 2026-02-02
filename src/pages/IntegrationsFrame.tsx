import { useState, useEffect } from 'react'
import './IntegrationsFrame.css'

const integrations = [
  { id: 'salesforce', label: 'Salesforce', color: '#00A1E0' },
  { id: 'hubspot', label: 'HubSpot', color: '#FF7A59' },
  { id: 'zendesk', label: 'Zendesk', color: '#03363D' },
  { id: 'slack', label: 'Slack', color: '#4A154B' },
  { id: 'teams', label: 'Teams', color: '#6264A7' },
  { id: 'sheets', label: 'Sheets', color: '#0F9D58' },
]

const IntegrationIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'salesforce':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.885-.06-1.305-.165a3.843 3.843 0 0 1-3.405 2.055c-.57 0-1.11-.12-1.605-.345A4.38 4.38 0 0 1 8.324 20.1a4.444 4.444 0 0 1-4.17-2.955A4.254 4.254 0 0 1 0 12.93c0-2.37 1.92-4.29 4.29-4.29.345 0 .69.045 1.02.12a4.702 4.702 0 0 1 4.696-3.345z"/>
        </svg>
      )
    case 'hubspot':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.198 2.198 0 0 0 17.233.836h-.066a2.198 2.198 0 0 0-2.198 2.198v.066c0 .864.501 1.61 1.227 1.967v2.862a5.052 5.052 0 0 0-2.331 1.108l-6.156-4.785a2.625 2.625 0 1 0-1.334 1.607l5.989 4.66a5.108 5.108 0 0 0 .203 5.7l-1.867 1.867a1.96 1.96 0 1 0 1.281 1.317l1.904-1.904a5.093 5.093 0 1 0 4.279-9.57z"/>
        </svg>
      )
    case 'zendesk':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.088 3v14.637L0 3h11.088zm1.824 6.363V24l11.088-14.637H12.912zM0 24h11.088V9.363L0 24zm12.912-6.363V3H24l-11.088 14.637z"/>
        </svg>
      )
    case 'slack':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"/>
        </svg>
      )
    case 'teams':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.625 8.073h-5.27V5.04a2.344 2.344 0 1 1 2.343 0v1.564h2.927a1.172 1.172 0 0 1 1.172 1.172v6.093a3.516 3.516 0 0 1-6.445 1.935v-4.951h-1.758v5.273a4.102 4.102 0 1 0-5.859-3.691v-1.582a5.86 5.86 0 1 1 9.375 4.687v1.172a4.688 4.688 0 0 0 9.375 0V9.245a1.172 1.172 0 0 0-1.172-1.172h-4.688z"/>
        </svg>
      )
    case 'sheets':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.385 2H4.615A2.615 2.615 0 0 0 2 4.615v14.77A2.615 2.615 0 0 0 4.615 22h14.77A2.615 2.615 0 0 0 22 19.385V4.615A2.615 2.615 0 0 0 19.385 2zM9 18H6v-3h3v3zm0-4.5H6v-3h3v3zm0-4.5H6V6h3v3zm4.5 9h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3V6h3v3zm4.5 9h-3v-3h3v3zm0-4.5h-3v-3h3v3zm0-4.5h-3V6h3v3z"/>
        </svg>
      )
    default:
      return null
  }
}

export function IntegrationsFrame() {
  const [activeConnection, setActiveConnection] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    // Rotate connections
    const connectionInterval = setInterval(() => {
      setActiveConnection(prev => (prev + 1) % integrations.length)
    }, 1200)

    // Slow orbit rotation
    const rotationInterval = setInterval(() => {
      setRotation(prev => prev + 0.5)
    }, 50)

    return () => {
      clearInterval(connectionInterval)
      clearInterval(rotationInterval)
    }
  }, [])

  return (
    <div className="integrations-frame">
      <div className="integrations-frame__container">
        {/* Connection Lines SVG */}
        <svg className="connections-svg" viewBox="0 0 600 400">
          {integrations.map((int, i) => {
            const angle = (i * 60 + rotation - 90) * (Math.PI / 180)
            const radius = 140
            const x = 300 + Math.cos(angle) * radius
            const y = 200 + Math.sin(angle) * radius
            const isActive = activeConnection === i

            return (
              <g key={int.id}>
                <line
                  x1="300" y1="200"
                  x2={x} y2={y}
                  className={`connection-line ${isActive ? 'connection-line--active' : ''}`}
                  stroke={isActive ? int.color : '#e0e0e0'}
                />
                {isActive && (
                  <circle r="4" fill={int.color}>
                    <animateMotion
                      dur="0.8s"
                      repeatCount="indefinite"
                      path={`M300,200 L${x},${y}`}
                    />
                  </circle>
                )}
              </g>
            )
          })}
        </svg>

        {/* Center Logo */}
        <div className="center-node">
          <div className="center-node__inner">
            <img src="/Untitled design.svg" alt="Neptyune" />
          </div>
          <div className="center-node__ring"></div>
        </div>

        {/* Integration Nodes */}
        {integrations.map((int, i) => {
          const angle = i * 60 + rotation - 90
          const isActive = activeConnection === i

          return (
            <div
              key={int.id}
              className={`integration-node ${isActive ? 'integration-node--active' : ''}`}
              style={{
                '--angle': `${angle}deg`,
                '--color': int.color,
              } as React.CSSProperties}
            >
              <div className="integration-node__icon" style={{ color: int.color }}>
                <IntegrationIcon id={int.id} />
              </div>
              <span className="integration-node__label">{int.label}</span>
            </div>
          )
        })}

        {/* Data Flow Label */}
        <div className="data-flow-label">
          <span className="data-flow-label__dot"></span>
          <span>Live Data Sync</span>
        </div>
      </div>

      <p className="integrations-frame__info">Integrations Network | 600 x 400px | Refresh to replay</p>
    </div>
  )
}
