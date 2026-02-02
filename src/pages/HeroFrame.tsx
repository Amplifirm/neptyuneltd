import { useState, useEffect } from 'react'
import './HeroFrame.css'

const userMessage = "I need a voicebot that handles appointment bookings and answers FAQs about our services."

export function HeroFrame() {
  const [typedText, setTypedText] = useState('')
  const [showUserBubble, setShowUserBubble] = useState(false)
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index = 0
      const typeInterval = setInterval(() => {
        if (index < userMessage.length) {
          setTypedText(userMessage.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setShowUserBubble(true)
            setTypedText('')
            setTimeout(() => {
              setShowTypingIndicator(true)
              setTimeout(() => {
                setShowTypingIndicator(false)
                setShowAIResponse(true)
                // Start progress animation
                let prog = 0
                const progressInterval = setInterval(() => {
                  prog += 2
                  setProgress(prog)
                  if (prog >= 100) {
                    clearInterval(progressInterval)
                  }
                }, 50)
              }, 1200)
            }, 400)
          }, 300)
        }
      }, 40)

      return () => clearInterval(typeInterval)
    }, 800)

    return () => clearTimeout(startDelay)
  }, [])

  return (
    <div className="hero-frame">
      <div className="hero-frame__container">
        <div className="chat-interface">
          <div className="chat-interface__header">
            <div className="chat-interface__logo">
              <span className="chat-interface__logo-icon">N</span>
              <span className="chat-interface__logo-text">neptyune</span>
            </div>
            <div className="chat-interface__status">
              <span className="chat-interface__status-dot"></span>
              Online
            </div>
          </div>

          <div className="chat-interface__body">
            <div className="chat-interface__welcome">
              <div className="chat-interface__avatar">
                <div className="chat-interface__avatar-inner">N</div>
              </div>
              <div className="chat-interface__welcome-text">
                <h3>Hi there!</h3>
                <p>Describe the voice agent you want to build.</p>
              </div>
            </div>

            <div className="chat-interface__messages">
              {showUserBubble && (
                <div className="message message--user animate-in">
                  <p>{userMessage}</p>
                </div>
              )}

              {showTypingIndicator && (
                <div className="message message--ai animate-in">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}

              {showAIResponse && (
                <div className="message message--ai animate-in">
                  <p className="ai-response-text">Got it! Building your agent...</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-label">{progress}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="chat-interface__input">
            <div className="chat-interface__input-field">
              {typedText ? (
                <span className="chat-interface__typed">{typedText}<span className="cursor"></span></span>
              ) : (
                <span className="chat-interface__placeholder">
                  {showUserBubble ? 'Type a message...' : 'Describe your voice agent...'}
                </span>
              )}
            </div>
            <button className="chat-interface__send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <p className="hero-frame__info">Chat Interface Animation | Refresh to replay</p>
    </div>
  )
}
