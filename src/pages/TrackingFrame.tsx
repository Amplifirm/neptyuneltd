import { useState, useEffect } from 'react'
import './TrackingFrame.css'

const trackingSteps = [
  { id: 1, label: 'Order Placed', date: 'Jan 28', done: true },
  { id: 2, label: 'Shipped', date: 'Jan 29', done: true },
  { id: 3, label: 'In Transit', date: 'Jan 31', done: true },
  { id: 4, label: 'Out for Delivery', date: 'Feb 2', done: false },
]

export function TrackingFrame() {
  const [stage, setStage] = useState(0)
  const [typedText, setTypedText] = useState('')
  const question = 'Where is my order?'

  useEffect(() => {
    const cycle = () => {
      setStage(0)
      setTypedText('')

      // Type the question
      let i = 0
      const typeInterval = setInterval(() => {
        if (i < question.length) {
          setTypedText(question.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
        }
      }, 50)

      setTimeout(() => setStage(1), 1200) // AI processing
      setTimeout(() => setStage(2), 2000) // Show card
      setTimeout(() => setStage(3), 2400) // Show tracking steps
    }

    cycle()
    const interval = setInterval(cycle, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="tracking-frame">
      <div className="tracking-frame__container">
        {/* Left: Conversation */}
        <div className="tracking-chat">
          {/* Customer Message */}
          <div className={`chat-msg chat-msg--user ${typedText ? 'chat-msg--visible' : ''}`}>
            <div className="chat-msg__avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="chat-msg__bubble">
              <span>{typedText}</span>
              <span className="chat-msg__cursor">|</span>
            </div>
          </div>

          {/* AI Response */}
          <div className={`chat-msg chat-msg--ai ${stage >= 1 ? 'chat-msg--visible' : ''}`}>
            <div className="chat-msg__avatar chat-msg__avatar--ai">
              <img src="/Untitled design.svg" alt="AI" />
            </div>
            <div className="chat-msg__bubble">
              {stage === 1 && (
                <div className="chat-msg__typing">
                  <span></span><span></span><span></span>
                </div>
              )}
              {stage >= 2 && (
                <span>I found your order! Here's the tracking info:</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Tracking Card */}
        <div className={`tracking-card ${stage >= 2 ? 'tracking-card--visible' : ''}`}>
          <div className="tracking-card__header">
            <div className="tracking-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div className="tracking-card__title">
              <span className="tracking-card__label">Order #NP-28491</span>
              <span className="tracking-card__status">In Transit</span>
            </div>
          </div>

          <div className="tracking-card__info">
            <div className="tracking-info">
              <span className="tracking-info__label">Estimated Delivery</span>
              <span className="tracking-info__value">Today by 5:00 PM</span>
            </div>
            <div className="tracking-info">
              <span className="tracking-info__label">Carrier</span>
              <span className="tracking-info__value">Express Shipping</span>
            </div>
          </div>

          <div className="tracking-steps">
            {trackingSteps.map((step, i) => (
              <div
                key={step.id}
                className={`tracking-step ${step.done ? 'tracking-step--done' : ''} ${stage >= 3 ? 'tracking-step--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="tracking-step__dot">
                  {step.done && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </div>
                {i < trackingSteps.length - 1 && <div className="tracking-step__line"></div>}
                <div className="tracking-step__info">
                  <span className="tracking-step__label">{step.label}</span>
                  <span className="tracking-step__date">{step.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="tracking-frame__info">Order Tracking | 520 x 320px | Refresh to replay</p>
    </div>
  )
}
