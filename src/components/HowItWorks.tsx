import { MessageCircle, Settings, Rocket } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Describe your agent',
    description: 'Tell us what you want in plain English. "I need a voicebot that handles appointment bookings and answers FAQs about our services."',
    video: '/Screen Recording 2026-02-02 at 13.46.24.mov'
  },
  {
    number: '02',
    icon: Settings,
    title: 'Customize & train',
    description: 'Fine-tune responses, add your knowledge base, and set up integrations. Our AI learns your business in minutes, not months.',
    video: '/Screen Recording 2026-02-02 at 13.58.26.mov'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy anywhere',
    description: 'Connect to your phone system, embed on your website, or integrate with Slack. Your voice agent goes live with one click.',
    video: '/Screen Recording 2026-02-02 at 14.31.42.mov'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="how-it-works__header reveal">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            From idea to live agent<br />in three steps
          </h2>
        </div>

        <div className="how-it-works__bento stagger-children">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`hiw-card hiw-card--${index + 1} reveal card-shine`}
            >
              <div className="hiw-card__content">
                <span className="hiw-card__number">{step.number}</span>
                <h3 className="hiw-card__title">{step.title}</h3>
                <p className="hiw-card__desc">{step.description}</p>
              </div>
              <div className="hiw-card__graphic">
                <video
                  className="hiw-card__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={step.video} type="video/quicktime" />
                  <source src={step.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
