import './Testimonials.css'

const testimonials = [
  {
    quote: "We replaced our entire IVR system with Thalassa. Customer satisfaction jumped 40% in the first month.",
    author: "Sarah Chen",
    role: "VP of Customer Experience",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
  },
  {
    quote: "Triton paid for itself in week one. We're handling 3x the call volume with the same team.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    quote: "Our IT team finally has time for strategic work. Proteus handles 80% of employee requests automatically.",
    author: "Jennifer Park",
    role: "CIO",
    company: "Meridian Health",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face"
  }
]

export function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Trusted by teams<br />
            who value their time
          </h2>
        </div>

        <div className="testimonials__grid stagger-children">
          {testimonials.map((testimonial, i) => (
            <div key={i} className={`testimonial-card testimonial-card--${i + 1} reveal card-shine`}>
              <div className="testimonial-card__quote">
                "{testimonial.quote}"
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="testimonial-card__info">
                  <span className="testimonial-card__name">{testimonial.author}</span>
                  <span className="testimonial-card__role">{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
