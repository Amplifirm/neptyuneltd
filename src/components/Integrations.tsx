import { Zap, Code } from 'lucide-react'
import './Integrations.css'

const integrations = [
  {
    name: 'Salesforce',
    logo: 'https://mitto.ch/wp-content/uploads/2024/01/salesforce@2x-8-1.png'
  },
  {
    name: 'HubSpot',
    logo: 'https://p7.hiclipart.com/preview/684/991/798/hubspot-inc-business-logo-inbound-marketing-portable-network-graphics-business.jpg'
  },
  {
    name: 'Zendesk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zendesk_logo.svg/1280px-Zendesk_logo.svg.png'
  },
  {
    name: 'Slack',
    logo: 'https://thumbs.bfldr.com/at/pl546j-7le8zk-btwjnu/v/2925183?expiry=1770173759&fit=bounds&height=400&sig=NGQ5NDNjODA3ZmViOTA0YTMxNDVlZTU0Zjc4ZmQ2YTJlYzExN2Q5Mg%3D%3D&width=550'
  },
  {
    name: 'Microsoft Teams',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Microsoft_Teams.png/826px-Microsoft_Teams.png'
  },
  {
    name: 'Twilio',
    logo: 'https://download.logo.wine/logo/Twilio/Twilio-Logo.wine.png'
  },
  {
    name: 'Google Calendar',
    logo: 'https://1000logos.net/wp-content/uploads/2021/12/Google-Calendar-Logo.png'
  },
  {
    name: 'Zapier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png'
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="integrations section">
      <div className="container">
        <div className="integrations__header reveal">
          <span className="section-tag">Integrations</span>
          <h2 className="section-title">
            Connects seamlessly<br />
            to your stack
          </h2>
        </div>

        <div className="integrations__carousel-wrapper reveal">
          <div className="integrations__carousel">
            <div className="integrations__carousel-track">
              {[...integrations, ...integrations].map((integration, i) => (
                <div key={i} className="integration-logo">
                  <img src={integration.logo} alt={integration.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="integrations__bento stagger-children">
          <div className="integrations__main reveal card-shine">
            <div className="icon-circle icon-circle--lg">
              <Zap size={24} strokeWidth={1.5} />
            </div>
            <h3 className="integrations__title">
              Native integrations with<br />
              the tools you already use
            </h3>
            <p className="integrations__desc">
              Connect to your CRM, helpdesk, calendar, and communication tools.
              Data flows automatically between your voice agents and your stack.
            </p>
            <a href="#contact" className="integrations__link animated-link">View all integrations →</a>
          </div>

          <div className="integrations__graphic reveal">
            <video
              className="integrations__video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Screen Recording 2026-02-02 at 15.13.30.mov" type="video/quicktime" />
              <source src="/Screen Recording 2026-02-02 at 15.13.30.mov" type="video/mp4" />
            </video>
          </div>

          <div className="integrations__api reveal card-shine">
            <div className="icon-circle icon-circle--lg">
              <Code size={24} strokeWidth={1.5} />
            </div>
            <h3>API & Webhooks</h3>
            <p>Build custom integrations with our RESTful API and real-time webhooks.</p>
            <a href="#contact" className="animated-link">Read the docs →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
