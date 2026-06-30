import type { Testimonial } from '../types.ts'

const ITEMS: Testimonial[] = [
  {
    quote: 'Najlepszy miód, jaki jadłem. Smak lipy jest wyraźny, a konsystencja idealna — ani za rzadki, ani za gęsty.',
    name: 'Anna K.',
    role: 'Stała klientka',
  },
  {
    quote: 'Zamawiam co sezon. Gryczany pomógł mi przy anemii — polecam wszystkim, którzy potrzebują naturalnego wsparcia.',
    name: 'Marek W.',
    role: 'Stały klient',
  },
  {
    quote: 'Widać pasję w każdym słoiczku. Szybka wysyłka, świetny kontakt i miód, który smakuje jak z babcinej spiżarni.',
    name: 'Joanna P.',
    role: 'Klientka',
  },
]

function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : ''
  return (first + last).toUpperCase() || '?'
}

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials" aria-labelledby="testimonialsTitle">
      <div className="container">
        <span className="section-eyebrow text-center">Opinie klientów</span>
        <h2 className="section-title" id="testimonialsTitle">
          Co mówią klienci
        </h2>
        <p className="section-subtitle">
          Prawdziwe opinie tych, którzy wracają po kolejny słoiczek.
        </p>
        <div className="testimonials__grid">
          {ITEMS.map((t) => (
            <figure className="testimonial reveal" key={t.name}>
              <div className="testimonial__stars" aria-label="Ocena 5 na 5">
                ★★★★★
              </div>
              <blockquote className="testimonial__quote">
                <span className="testimonial__quote-text">{t.quote}</span>
              </blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span className="testimonial__author-info">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
