import { useState, useEffect } from 'react'
import './LeadFlowFrame.css'

const leads = [
  { id: 1, name: 'Alex M.', score: 92 },
  { id: 2, name: 'Sarah K.', score: 78 },
  { id: 3, name: 'John D.', score: 45 },
  { id: 4, name: 'Emma R.', score: 88 },
]

export function LeadFlowFrame() {
  const [currentLead, setCurrentLead] = useState(0)
  const [stage, setStage] = useState(0)
  const [bookings, setBookings] = useState<string[]>([])

  useEffect(() => {
    const lead = leads[currentLead]

    const cycle = () => {
      setStage(0)
      setTimeout(() => setStage(1), 400)
      setTimeout(() => setStage(2), 1000)
      setTimeout(() => setStage(3), 1600)
      setTimeout(() => {
        if (lead.score >= 70) {
          setBookings(prev => [lead.name, ...prev].slice(0, 3))
        }
        setCurrentLead(prev => (prev + 1) % leads.length)
      }, 2200)
    }

    cycle()
  }, [currentLead])

  const lead = leads[currentLead]
  const qualified = lead.score >= 70

  return (
    <div className="leadflow-frame">
      <div className="leadflow-frame__container">
        {/* Left: Lead Card */}
        <div className={`lead-card ${stage >= 1 ? 'lead-card--visible' : ''}`}>
          <div className="lead-card__avatar">{lead.name.charAt(0)}</div>
          <span className="lead-card__name">{lead.name}</span>
          <span className="lead-card__tag">New Lead</span>
        </div>

        {/* Center: Scoring */}
        <div className="lead-scoring">
          <div className={`scoring-box ${stage >= 2 ? 'scoring-box--active' : ''}`}>
            <div className="scoring-box__header">
              <img src="/Untitled design.svg" alt="AI" className="scoring-box__logo" />
              <span>AI Score</span>
            </div>
            <div className="scoring-box__score">
              <div className="score-ring">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e0e0e0" strokeWidth="3"/>
                  <circle
                    cx="18" cy="18" r="16" fill="none"
                    stroke={qualified ? '#8BC34A' : '#EF5350'}
                    strokeWidth="3"
                    strokeDasharray={`${lead.score} 100`}
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                    className={stage >= 2 ? 'score-ring--animated' : ''}
                  />
                </svg>
                <span className={`score-number ${qualified ? 'score-number--high' : 'score-number--low'}`}>
                  {stage >= 2 ? lead.score : '—'}
                </span>
              </div>
            </div>
            {stage >= 3 && (
              <div className={`scoring-box__result ${qualified ? 'scoring-box__result--qualified' : 'scoring-box__result--rejected'}`}>
                {qualified ? 'Qualified' : 'Not Qualified'}
              </div>
            )}
          </div>
        </div>

        {/* Right: Bookings */}
        <div className="lead-bookings">
          <div className="bookings-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>Booked</span>
          </div>
          <div className="bookings-list">
            {bookings.length === 0 ? (
              <span className="bookings-empty">No bookings yet</span>
            ) : (
              bookings.map((name, i) => (
                <div key={`${name}-${i}`} className="booking-item">
                  <div className="booking-item__avatar">{name.charAt(0)}</div>
                  <span className="booking-item__name">{name}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <p className="leadflow-frame__info">Lead Flow | 520 x 320px | Refresh to replay</p>
    </div>
  )
}
