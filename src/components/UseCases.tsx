import { Headphones, TrendingUp, Settings } from 'lucide-react'
import './UseCases.css'

const useCases = [
  {
    icon: Headphones,
    category: 'Customer Support',
    title: '24/7 support without the headcount',
    description: 'Handle 80% of customer inquiries automatically. Instant answers, zero wait times, happier customers.',
    stat: '80%',
    statLabel: 'calls resolved',
    video: '/Screen Recording 2026-02-02 at 15.05.22.mov'
  },
  {
    icon: TrendingUp,
    category: 'Sales',
    title: 'Qualify leads while you sleep',
    description: 'Outbound campaigns that sound human. Book meetings, qualify prospects, and fill your pipeline around the clock.',
    stat: '3x',
    statLabel: 'more meetings',
    video: '/Screen Recording 2026-02-02 at 15.08.52.mov'
  },
  {
    icon: Settings,
    category: 'Internal Ops',
    title: 'IT helpdesk on autopilot',
    description: 'Password resets, FAQ answers, ticket routing—all handled by voice. Your IT team focuses on what matters.',
    stat: '60%',
    statLabel: 'time saved',
    video: '/Screen Recording 2026-02-02 at 15.10.58.mov'
  }
]

export function UseCases() {
  return (
    <section className="use-cases section--large">
      <div className="container">
        <div className="use-cases__header reveal">
          <span className="section-tag">Use Cases</span>
          <h2 className="section-title">
            Voice AI that works<br />
            across your business
          </h2>
        </div>

        <div className="use-cases__grid">
          {useCases.map((useCase, index) => (
            <div key={index} className={`use-case-card reveal card-shine`}>
              <div className="use-case-card__content">
                <span className="use-case-card__category">{useCase.category}</span>
                <h3 className="use-case-card__title">{useCase.title}</h3>
                <p className="use-case-card__desc">{useCase.description}</p>
                <div className="use-case-card__stat">
                  <span className="use-case-card__stat-value gradient-text">{useCase.stat}</span>
                  <span className="use-case-card__stat-label">{useCase.statLabel}</span>
                </div>
              </div>
              <div className="use-case-card__graphic">
                <video
                  className="use-case-card__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={useCase.video} type="video/quicktime" />
                  <source src={useCase.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
