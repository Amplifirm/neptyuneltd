import { useState, useEffect } from 'react'
import './DeployFrame.css'

const channels = [
  { id: 'phone', label: 'Phone', angle: 0 },
  { id: 'web', label: 'Web', angle: 72 },
  { id: 'slack', label: 'Slack', angle: 144 },
  { id: 'sms', label: 'SMS', angle: 216 },
  { id: 'email', label: 'Email', angle: 288 },
]

export function DeployFrame() {
  const [activeChannel, setActiveChannel] = useState(0)
  const [pulseLines, setPulseLines] = useState<number[]>([])

  useEffect(() => {
    // Cycle through channels
    const channelInterval = setInterval(() => {
      setActiveChannel(prev => (prev + 1) % channels.length)
    }, 1200)

    // Trigger pulse animations
    const pulseInterval = setInterval(() => {
      const randomChannels = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5).slice(0, 3)
      setPulseLines(randomChannels)
      setTimeout(() => setPulseLines([]), 800)
    }, 1000)

    return () => {
      clearInterval(channelInterval)
      clearInterval(pulseInterval)
    }
  }, [])

  return (
    <div className="deploy-frame">
      <div className="deploy-frame__container">
        <div className="deploy-visual">
          {/* Connection Lines */}
          <svg className="connections" viewBox="0 0 320 320">
            {channels.map((channel, i) => {
              const angle = (channel.angle - 90) * (Math.PI / 180)
              const x2 = 160 + Math.cos(angle) * 110
              const y2 = 160 + Math.sin(angle) * 110
              return (
                <g key={channel.id}>
                  <line
                    className="connection-line"
                    x1="160" y1="160"
                    x2={x2} y2={y2}
                  />
                  <line
                    className={`connection-pulse ${pulseLines.includes(i) ? 'active' : ''}`}
                    x1="160" y1="160"
                    x2={x2} y2={y2}
                  />
                </g>
              )
            })}
          </svg>

          {/* Center Logo */}
          <div className="center-logo">
            <div className="center-logo__inner">
              <img src="/Untitled design.svg" alt="Neptyune" />
            </div>
            <div className="center-logo__ring"></div>
            <div className="center-logo__ring center-logo__ring--2"></div>
          </div>

          {/* Channel Icons */}
          {channels.map((channel, i) => {
            const angle = (channel.angle - 90) * (Math.PI / 180)
            const x = 50 + Math.cos(angle) * 35
            const y = 50 + Math.sin(angle) * 35
            return (
              <div
                key={channel.id}
                className={`channel-icon channel-icon--${channel.id} ${activeChannel === i ? 'active' : ''}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="channel-icon__inner">
                  {channel.id === 'phone' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  )}
                  {channel.id === 'web' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  )}
                  {channel.id === 'slack' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="13" y="2" width="3" height="8" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect x="8" y="14" width="3" height="8" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect x="14" y="13" width="8" height="3" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect x="2" y="8" width="8" height="3" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/>
                    </svg>
                  )}
                  {channel.id === 'sms' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  )}
                  {channel.id === 'email' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  )}
                </div>
                <span className="channel-icon__label">{channel.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <p className="deploy-frame__info">Multi-Channel Visual | 720 x 320px | Refresh to replay</p>
    </div>
  )
}
