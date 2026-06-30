import products from '../data/products.ts'
import type { Product } from '../types.ts'

function ProductCard({ product }: { product: Product }) {
  const isBestseller = product.tag === 'Bestseller'
  return (
    <article
      className={`card reveal ${isBestseller ? 'card--bestseller' : ''}`.trim()}
      data-product-id={product.id}
    >
      <div className="card__image">
        <img
          src={product.image}
          alt={product.name}
          width="600"
          height="220"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="card__body">
        <span className="card__tag">{product.tag}</span>
        <h3 className="card__title">{product.name}</h3>
        <p className="card__text">{product.description}</p>
        <div className="card__meta">
          <span className="card__weight">{product.weight}</span>
          <span className="card__price">{product.price}</span>
        </div>
      </div>
    </article>
  )
}

export default function Offer() {
  return (
    <section className="section offer" id="offer" aria-labelledby="offerTitle">
      <div className="container">
        <span className="section-eyebrow text-center">Nasze produkty</span>
        <h2 className="section-title" id="offerTitle">
          Nasze Miody
        </h2>
        <p className="section-subtitle">
          Każdy słoiczek to unikalny smak i właściwości zdrowotne. Wybierz swój ulubiony miód z naszej
          oferty.
        </p>
        <div className="offer__grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
