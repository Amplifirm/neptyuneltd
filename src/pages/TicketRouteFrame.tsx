import { useState, useEffect } from 'react'
import './TicketRouteFrame.css'

export function TicketRouteFrame() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const cycle = () => {
      setStage(0)
      setTimeout(() => setStage(1), 400)   // Ticket created
      setTimeout(() => setStage(2), 1200)  // Routing
      setTimeout(() => setStage(3), 1800)  // Slack
      setTimeout(() => setStage(4), 2200)  // Email
      setTimeout(() => setStage(5), 2600)  // Status
    }

    cycle()
    const interval = setInterval(cycle, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="ticketroute-frame">
      <div className="ticketroute-frame__container">
        {/* Ticket Card */}
        <div className={`ticket-card ${stage >= 1 ? 'ticket-card--visible' : ''}`}>
          <div className="ticket-card__header">
            <div className="ticket-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div className="ticket-card__info">
              <span className="ticket-card__id">#TKT-4821</span>
              <span className="ticket-card__time">Just now</span>
            </div>
          </div>
          <div className="ticket-card__body">
            <span className="ticket-card__subject">Billing inquiry</span>
            <span className="ticket-card__preview">Customer asking about invoice...</span>
          </div>
          <div className="ticket-card__footer">
            <span className="ticket-card__priority">High Priority</span>
            <span className="ticket-card__tag">Auto-created</span>
          </div>
        </div>

        {/* Center: Routing */}
        <div className="ticket-routing">
          <div className={`routing-hub ${stage >= 2 ? 'routing-hub--active' : ''}`}>
            <img src="/Untitled design.svg" alt="AI" />
            {stage >= 2 && <div className="routing-hub__pulse"></div>}
          </div>
          <span className="routing-label">AI Routing</span>
        </div>

        {/* Actions */}
        <div className="ticket-actions">
          <div className={`action-item ${stage >= 3 ? 'action-item--done' : ''}`}>
            <div className="action-item__icon action-item__icon--slack">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="13" y="2" width="3" height="8" rx="1.5"/>
                <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/>
                <rect x="8" y="14" width="3" height="8" rx="1.5"/>
                <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/>
              </svg>
            </div>
            <div className="action-item__content">
              <span className="action-item__title">Slack</span>
              <span className="action-item__desc">Team notified</span>
            </div>
            {stage >= 3 && (
              <div className="action-item__check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            )}
          </div>

          <div className={`action-item ${stage >= 4 ? 'action-item--done' : ''}`}>
            <div className="action-item__icon action-item__icon--email">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="action-item__content">
              <span className="action-item__title">Email</span>
              <span className="action-item__desc">Confirmation sent</span>
            </div>
            {stage >= 4 && (
              <div className="action-item__check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            )}
          </div>

          <div className={`action-item ${stage >= 5 ? 'action-item--done' : ''}`}>
            <div className="action-item__icon action-item__icon--status">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="action-item__content">
              <span className="action-item__title">Status</span>
              <span className="action-item__desc">Set to Open</span>
            </div>
            {stage >= 5 && (
              <div className="action-item__check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="ticketroute-frame__info">Ticket Routing | 520 x 320px | Refresh to replay</p>
    </div>
  )
}
