import { useState, useEffect } from 'react'
import './TicketsFrame.css'

const tickets = [
  { id: 1, name: 'Sarah Chen', message: 'Having trouble with subscription...', channel: 'email', priority: 'high', time: '2m' },
  { id: 2, name: 'Mike Johnson', message: 'Question about API rate limits', channel: 'slack', priority: 'medium', time: '5m' },
  { id: 3, name: 'Emily Davis', message: 'Thanks! That fixed my issue.', channel: 'phone', priority: 'low', time: '12m' },
]

const ChannelIcon = ({ channel }: { channel: string }) => {
  switch (channel) {
    case 'email':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    case 'slack':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="13" y="2" width="3" height="8" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect x="8" y="14" width="3" height="8" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect x="14" y="13" width="8" height="3" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect x="2" y="8" width="8" height="3" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/>
        </svg>
      )
    case 'phone':
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    default:
      return null
  }
}

export function TicketsFrame() {
  const [visibleTickets, setVisibleTickets] = useState(0)
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null)

  useEffect(() => {
    // Show tickets one by one
    const ticketInterval = setInterval(() => {
      setVisibleTickets(prev => {
        if (prev < tickets.length) return prev + 1
        return prev
      })
    }, 400)

    // Auto-select tickets
    setTimeout(() => {
      const selectInterval = setInterval(() => {
        setSelectedTicket(prev => {
          if (prev === null) return 0
          return (prev + 1) % tickets.length
        })
      }, 2000)
      return () => clearInterval(selectInterval)
    }, 1500)

    return () => clearInterval(ticketInterval)
  }, [])

  return (
    <div className="tickets-frame">
      <div className="tickets-frame__container">
        {/* Left - Logo & Stats */}
        <div className="tickets__sidebar">
          <div className="tickets__logo">
            <img src="/Untitled design.svg" alt="Neptyune" />
          </div>
          <div className="tickets__stats">
            <div className="stat">
              <span className="stat__value">24</span>
              <span className="stat__label">Open</span>
            </div>
            <div className="stat">
              <span className="stat__value">2.4m</span>
              <span className="stat__label">Avg</span>
            </div>
          </div>
        </div>

        {/* Right - Ticket List */}
        <div className="tickets__main">
          <div className="tickets__header">
            <span className="tickets__title">Support Queue</span>
            <span className="tickets__badge">3 new</span>
          </div>
          <div className="tickets__list">
            {tickets.slice(0, visibleTickets).map((ticket, i) => (
              <div
                key={ticket.id}
                className={`ticket ${selectedTicket === i ? 'ticket--selected' : ''}`}
              >
                <div className="ticket__left">
                  <span className={`ticket__channel ticket__channel--${ticket.channel}`}>
                    <ChannelIcon channel={ticket.channel} />
                  </span>
                  <div className="ticket__info">
                    <span className="ticket__name">{ticket.name}</span>
                    <span className="ticket__message">{ticket.message}</span>
                  </div>
                </div>
                <div className="ticket__right">
                  <span className={`ticket__priority ticket__priority--${ticket.priority}`} />
                  <span className="ticket__time">{ticket.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="tickets-frame__info">Ticket Dashboard | 400 x 200px | Refresh to replay</p>
    </div>
  )
}
