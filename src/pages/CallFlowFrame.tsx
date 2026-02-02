import { useState, useEffect } from 'react'
import './CallFlowFrame.css'

const departments = [
  { id: 'orders', label: 'Orders', color: '#E3F2FD', iconColor: '#1565C0' },
  { id: 'billing', label: 'Billing', color: '#F3E5F5', iconColor: '#7B1FA2' },
  { id: 'support', label: 'Support', color: '#E8F5E9', iconColor: '#2E7D32' },
]

export function CallFlowFrame() {
  const [activePhase, setActivePhase] = useState(0)
  const [activeDept, setActiveDept] = useState<number | null>(null)

  useEffect(() => {
    // Phase 0: Speech bubble appears
    // Phase 1: AI processing
    // Phase 2: Route to department
    const phaseTimings = [800, 1500, 1000]

    const runAnimation = () => {
      setActivePhase(0)
      setActiveDept(null)

      setTimeout(() => {
        setActivePhase(1)
        setTimeout(() => {
          setActivePhase(2)
          setActiveDept(Math.floor(Math.random() * 3))
        }, phaseTimings[1])
      }, phaseTimings[0])
    }

    runAnimation()
    const interval = setInterval(runAnimation, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="callflow-frame">
      <div className="callflow-frame__container">
        {/* Left: Caller */}
        <div className="callflow__caller">
          <div className="caller-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div className={`speech-bubble ${activePhase >= 0 ? 'speech-bubble--visible' : ''}`}>
            <span className="speech-bubble__text">"I need help with my order"</span>
            <div className="speech-bubble__tail"></div>
          </div>
        </div>

        {/* Center: AI Processing */}
        <div className="callflow__center">
          <div className={`flow-line flow-line--left ${activePhase >= 1 ? 'flow-line--active' : ''}`}>
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
            <div className="flow-dot"></div>
          </div>

          <div className={`ai-node ${activePhase >= 1 ? 'ai-node--active' : ''}`}>
            <div className="ai-node__inner">
              <img src="/Untitled design.svg" alt="Neptyune" />
            </div>
            {activePhase === 1 && (
              <div className="ai-node__pulse"></div>
            )}
          </div>

          <div className="flow-branches">
            {departments.map((dept, i) => (
              <div
                key={dept.id}
                className={`flow-line flow-line--right ${activePhase >= 2 && activeDept === i ? 'flow-line--active' : ''}`}
              >
                <div className="flow-dot"></div>
                <div className="flow-dot"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Departments */}
        <div className="callflow__departments">
          {departments.map((dept, i) => (
            <div
              key={dept.id}
              className={`dept-node ${activePhase >= 2 && activeDept === i ? 'dept-node--active' : ''}`}
              style={{
                background: dept.color,
                borderColor: activeDept === i ? dept.iconColor : 'transparent'
              }}
            >
              <span className="dept-node__icon" style={{ color: dept.iconColor }}>
                {dept.id === 'orders' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                )}
                {dept.id === 'billing' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                )}
                {dept.id === 'support' && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                  </svg>
                )}
              </span>
              <span className="dept-node__label">{dept.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="callflow-frame__info">Call Flow Routing | 400 x 200px | Refresh to replay</p>
    </div>
  )
}
