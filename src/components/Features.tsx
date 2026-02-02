import { MessageSquare, Smartphone, Brain, Zap, Shield, Plug } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational Setup',
    description: 'Describe your voicebot in plain English. Our AI understands context, intent, and nuance to build exactly what you need.'
  },
  {
    icon: Smartphone,
    title: 'Multi-Channel',
    description: 'Phone, SMS, email, Slack, web—meet your customers wherever they are. One agent, every channel.'
  },
  {
    icon: Brain,
    title: 'Context-Aware',
    description: 'Our agents remember conversation history and customer data. No more repeating information.'
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description: 'Track every call, measure sentiment, and identify trends. Make data-driven decisions instantly.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant. SSO, audit logs, role-based access, and data encryption at rest and in transit.'
  },
  {
    icon: Plug,
    title: 'Deep Integrations',
    description: 'Connect to Salesforce, HubSpot, Zendesk, and 100+ tools. Your voice agent works with your stack.'
  }
]

export function Features() {
  return (
    <section id="about" className="features section">
      <div className="container">
        <div className="features__layout">
          <div className="features__header reveal-left">
            <span className="section-tag">Platform</span>
            <h2 className="section-title">
              Built for scale,<br />
              designed for simplicity
            </h2>
            <p className="features__subtitle">
              Enterprise-grade infrastructure with a no-code interface.
              Powerful enough for Fortune 500, simple enough for startups.
            </p>
          </div>

          <div className="features__visual reveal-right">
            <video
              className="features__video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Screen Recording 2026-02-02 at 15.01.54.mov" type="video/quicktime" />
              <source src="/Screen Recording 2026-02-02 at 15.01.54.mov" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="features__bento stagger-children">
          {features.map((feature, i) => (
            <div key={i} className={`feature-card feature-card--${i + 1} reveal card-shine`}>
              <div className="feature-card__icon icon-circle">
                <feature.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
