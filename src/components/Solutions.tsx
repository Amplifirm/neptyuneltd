import { Phone, Building2, Mic, Check } from 'lucide-react'
import './Solutions.css'

const solutions = [
  {
    name: 'Triton',
    tagline: 'For SMBs',
    description: 'Build voicebots conversationally. Just describe what you need—inbound or outbound—and watch it come to life. Perfect for small and medium businesses ready to scale their customer communication.',
    features: ['Conversational builder', 'Inbound & outbound', 'No-code setup', 'Pay as you grow'],
    color: 'green',
    icon: Phone,
    video: '/Screen Recording 2026-02-02 at 14.46.03.mov'
  },
  {
    name: 'Proteus',
    tagline: 'For Enterprise',
    description: 'Internal helpdesks powered by conversational AI. Employees contact your help center through voice, and we handle ticket creation, routing, and resolution tracking.',
    features: ['Multi-channel (SMS, email, phone, Slack)', 'Auto ticket creation', 'Smart routing', 'Enterprise SSO'],
    color: 'white',
    icon: Building2,
    video: '/Screen Recording 2026-02-02 at 14.52.47.mov'
  },
  {
    name: 'Thalassa',
    tagline: 'IVR Solution',
    description: 'Intelligent voice response that actually understands. Replace frustrating phone trees with natural conversation. Customers speak normally, and Thalassa routes them right.',
    features: ['Natural language routing', 'Zero hold times', 'Smart escalation', 'Real-time analytics'],
    color: 'light',
    icon: Mic,
    video: '/Screen Recording 2026-02-02 at 14.57.40.mov'
  }
]

export function Solutions() {
  return (
    <section id="solutions" className="solutions section--large">
      <div className="container">
        <div className="solutions__header reveal">
          <span className="section-tag">Solutions</span>
          <h2 className="section-title">
            Named after Neptune's moons,<br />
            built for your world
          </h2>
          <p className="solutions__subtitle">
            Three products, one mission: make voice AI accessible to every business.
          </p>
        </div>

        <div className="solutions__bento stagger-children">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              className={`solution-card solution-card--${solution.color} solution-card--${index + 1} reveal card-shine`}
            >
              <div className="solution-card__header">
                <div className="solution-card__badge">
                  <div className="icon-circle icon-circle--sm">
                    <solution.icon size={16} strokeWidth={1.5} />
                  </div>
                  <span>{solution.tagline}</span>
                </div>
                <h3 className="solution-card__name">{solution.name}</h3>
                <p className="solution-card__desc">{solution.description}</p>
              </div>

              <ul className="solution-card__features">
                {solution.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-check">
                      <Check size={12} strokeWidth={2} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="solution-card__graphic">
                <video
                  className="solution-card__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={solution.video} type="video/quicktime" />
                  <source src={solution.video} type="video/mp4" />
                </video>
              </div>

              <a href="#contact" className="solution-card__link animated-link">
                Learn more about {solution.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
