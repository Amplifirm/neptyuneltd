import { Button } from './Button'
import './CTA.css'

export function CTA() {
  return (
    <section className="cta section--large">
      <div className="container">
        <div className="cta__card cta__card--centered reveal-scale">
          <h2 className="cta__title">
            Ready to give your<br />
            business a voice?
          </h2>
          <p className="cta__desc">
            Join thousands of companies building the future of customer communication.
            Start free, scale when you're ready.
          </p>
          <div className="cta__actions">
            <Button variant="primary" size="lg" href="#contact">Start Free Trial</Button>
            <Button variant="ghost" size="lg" href="#contact">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
