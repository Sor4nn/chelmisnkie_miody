import products from '../data/products.ts'
import lipaImg from '../assets/img/products/honey-lipa.svg'

const FEATURED = products.find((p) => p.id === 'lipa') ?? products[0]

const FACTS = ['100% naturalny', 'Wirowany na zimno', 'Pasieka w sercu lasu']

export default function Featured() {
  if (!FEATURED) return null
  return (
    <section className="section featured" id="featured" aria-labelledby="featuredTitle">
      <div className="container">
        <div className="featured__grid">
          <div className="featured__media reveal">
            <span className="featured__badge">Bestseller</span>
            <img
              src={lipaImg}
              alt={`Słoik ${FEATURED.name}`}
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="featured__content reveal">
            <span className="section-eyebrow">Nasz bestseller</span>
            <h2 id="featuredTitle">{FEATURED.name}</h2>
            <p>{FEATURED.description}</p>
            <ul className="featured__facts" aria-label="Najważniejsze cechy">
              {FACTS.map((f) => (
                <li key={f} className="featured__fact">
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--amber btn--large">
              Zamów {FEATURED.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
