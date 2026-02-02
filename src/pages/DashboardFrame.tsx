import { useState, useEffect } from 'react'
import './DashboardFrame.css'

export function DashboardFrame() {
  const [progress, setProgress] = useState(0)
  const [toggles, setToggles] = useState({
    greeting: true,
    fallback: false,
    transfer: true
  })

  useEffect(() => {
    const t1 = setTimeout(() => setToggles(t => ({ ...t, fallback: true })), 1500)
    const t2 = setTimeout(() => setToggles(t => ({ ...t, greeting: false })), 3000)
    const t3 = setTimeout(() => setToggles(t => ({ ...t, greeting: true })), 4000)

    const progressStart = setTimeout(() => {
      let prog = 0
      const interval = setInterval(() => {
        prog += 1
        setProgress(prog)
        if (prog >= 100) clearInterval(interval)
      }, 60)
    }, 800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(progressStart)
    }
  }, [])

  const circumference = 2 * Math.PI * 28
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="dashboard-frame">
      <div className="dashboard-frame__container">
        <div className="dashboard">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar__logo">N</div>
            <nav className="sidebar__nav">
              <div className="sidebar__item sidebar__item--active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
              </div>
              <div className="sidebar__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div className="sidebar__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div className="sidebar__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="sidebar__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="main">
            {/* Top Bar */}
            <div className="topbar">
              <div className="topbar__title">
                <h2>Agent Configuration</h2>
                <span className="topbar__badge">Shipping Support Bot</span>
              </div>
              <div className="topbar__actions">
                <button className="btn-secondary">Test</button>
                <button className="btn-primary">Deploy</button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="content">
              {/* Settings Panel */}
              <div className="panel">
                <div className="panel__header">
                  <h3>Behavior Settings</h3>
                </div>
                <div className="panel__body">
                  <div className="setting-row">
                    <div className="setting-info">
                      <span className="setting-label">Custom greeting</span>
                      <span className="setting-desc">Personalized welcome message</span>
                    </div>
                    <div className={`toggle ${toggles.greeting ? 'toggle--on' : ''}`}>
                      <div className="toggle__knob"></div>
                    </div>
                  </div>
                  <div className="setting-row">
                    <div className="setting-info">
                      <span className="setting-label">Fallback to human</span>
                      <span className="setting-desc">Transfer when unsure</span>
                    </div>
                    <div className={`toggle ${toggles.fallback ? 'toggle--on' : ''}`}>
                      <div className="toggle__knob"></div>
                    </div>
                  </div>
                  <div className="setting-row">
                    <div className="setting-info">
                      <span className="setting-label">Call transfer</span>
                      <span className="setting-desc">Enable warm transfers</span>
                    </div>
                    <div className={`toggle ${toggles.transfer ? 'toggle--on' : ''}`}>
                      <div className="toggle__knob"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="right-col">
                {/* Knowledge Base */}
                <div className="panel panel--small">
                  <div className="panel__header">
                    <h3>Knowledge Base</h3>
                    <span className="panel__count">2 files</span>
                  </div>
                  <div className="files">
                    <div className="file">
                      <div className="file__icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        </svg>
                      </div>
                      <span className="file__name">FAQ.pdf</span>
                      <span className="file__check">✓</span>
                    </div>
                    <div className="file">
                      <div className="file__icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        </svg>
                      </div>
                      <span className="file__name">Products.csv</span>
                      <span className="file__check">✓</span>
                    </div>
                  </div>
                </div>

                {/* Training Progress */}
                <div className="training-card">
                  <div className="training-card__info">
                    <span className="training-card__title">Training Progress</span>
                    <span className="training-card__status">{progress < 100 ? 'Processing...' : 'Complete!'}</span>
                  </div>
                  <div className="training-card__progress">
                    <svg className="progress-ring" viewBox="0 0 64 64">
                      <circle className="progress-ring__bg" cx="32" cy="32" r="28" fill="none" strokeWidth="5"/>
                      <circle
                        className="progress-ring__fill"
                        cx="32" cy="32" r="28"
                        fill="none" strokeWidth="5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="training-card__value">{progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="dashboard-frame__info">Dashboard Preview | 400 x 280px | Refresh to replay</p>
    </div>
  )
}
