import { useState, useEffect, useRef } from 'react'
import './BuilderFrame.css'

const conversation = [
  { id: 1, type: 'ai', text: 'Hi! Thanks for calling Acme Support. How can I help you today?' },
  { id: 2, type: 'user', text: "I'd like to check my account balance" },
  { id: 3, type: 'ai', text: 'Of course! Let me pull up your account...' },
  { id: 4, type: 'ai', text: 'Your current balance is $247.50. Would you like me to send a detailed statement?' },
  { id: 5, type: 'user', text: 'Yes please, and can you update my address?' },
  { id: 6, type: 'ai', text: "Sure! What's your new address?" },
  { id: 7, type: 'user', text: '456 Oak Avenue, Suite 12' },
  { id: 8, type: 'ai', text: "Got it! I've updated your address to 456 Oak Avenue, Suite 12. Is there anything else?" },
  { id: 9, type: 'user', text: "No that's all, thanks!" },
  { id: 10, type: 'ai', text: "You're welcome! Have a great day. Goodbye!" },
]

const blockTypes = [
  { id: 'greeting', label: 'Greet' },
  { id: 'question', label: 'Ask' },
  { id: 'action', label: 'Action' },
  { id: 'transfer', label: 'Transfer' },
]

const BlockIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'greeting':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    case 'question':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      )
    case 'action':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    case 'transfer':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    default:
      return null
  }
}

export function BuilderFrame() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [waveformBars, setWaveformBars] = useState<number[]>(Array(24).fill(20))
  const [isRinging, setIsRinging] = useState(true)
  const [callTime, setCallTime] = useState(0)
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null)
  const [showDropZone, setShowDropZone] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleMessages, showDropZone])

  useEffect(() => {
    // Show messages one by one
    const messageInterval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev < conversation.length) {
          return prev + 1
        }
        return prev
      })
    }, 1000)

    // Animate waveform
    const waveInterval = setInterval(() => {
      setWaveformBars(Array(24).fill(0).map(() => Math.random() * 80 + 10))
    }, 80)

    // Stop ringing
    const ringTimeout = setTimeout(() => setIsRinging(false), 1500)

    // Call timer
    const timerInterval = setInterval(() => {
      setCallTime(prev => prev + 1)
    }, 1000)

    // Simulate drag and drop
    const dragSequence = setTimeout(() => {
      setDraggedBlock('action')
      setTimeout(() => {
        setShowDropZone(true)
        setTimeout(() => {
          setDraggedBlock(null)
          setShowDropZone(false)
        }, 1200)
      }, 600)
    }, 5000)

    // Repeat drag sequence
    const dragRepeat = setInterval(() => {
      const blocks = ['greeting', 'question', 'action', 'transfer']
      const randomBlock = blocks[Math.floor(Math.random() * blocks.length)]
      setDraggedBlock(randomBlock)
      setTimeout(() => {
        setShowDropZone(true)
        setTimeout(() => {
          setDraggedBlock(null)
          setShowDropZone(false)
        }, 1000)
      }, 500)
    }, 7000)

    return () => {
      clearInterval(messageInterval)
      clearInterval(waveInterval)
      clearTimeout(ringTimeout)
      clearInterval(timerInterval)
      clearTimeout(dragSequence)
      clearInterval(dragRepeat)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="builder-frame">
      <div className="builder-frame__container">
        {/* Header */}
        <div className="builder__header">
          <div className="builder__header-left">
            <div className={`call-status ${isRinging ? 'call-status--ringing' : 'call-status--active'}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {isRinging && <span className="call-ring"></span>}
            </div>
            <div className="call-info">
              <span className="call-info__title">Live Call Preview</span>
              <span className="call-info__time">{formatTime(callTime)}</span>
            </div>
          </div>
          <div className="waveform">
            {waveformBars.map((height, i) => (
              <div key={i} className="waveform__bar" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        {/* Block Palette */}
        <div className="block-palette">
          {blockTypes.map(block => (
            <div
              key={block.id}
              className={`block-item ${draggedBlock === block.id ? 'block-item--dragging' : ''}`}
            >
              <span className="block-item__icon">
                <BlockIcon type={block.id} />
              </span>
              <span className="block-item__label">{block.label}</span>
            </div>
          ))}
        </div>

        {/* Conversation */}
        <div className="conversation">
          <div className="conversation__messages">
            {conversation.slice(0, visibleMessages).map((msg, i) => (
              <div
                key={msg.id}
                className={`message message--${msg.type} ${i === visibleMessages - 1 ? 'message--new' : ''}`}
              >
                <div className="message__bubble">
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Drop Zone */}
            {showDropZone && (
              <div className="drop-zone">
                <div className="drop-zone__inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  <span>Drop block here</span>
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {visibleMessages < conversation.length && visibleMessages > 0 && conversation[visibleMessages]?.type === 'ai' && (
              <div className="message message--ai">
                <div className="message__bubble message__bubble--typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <p className="builder-frame__info">Conversation Builder | 380 x 760px | Refresh to replay</p>
    </div>
  )
}
