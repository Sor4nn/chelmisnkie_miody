import type { Product } from '../types.ts'

const localBusiness: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://pasiekalas.pl/#business',
  name: 'Pasieka Las',
  description: 'Rodzinna pasieka oferująca naturalne miody z serca lasu.',
  url: 'https://pasiekalas.pl/',
  image: 'https://pasiekalas.pl/og-cover.svg',
  telephone: '+48-123-456-789',
  email: 'kontakt@pasiekalas.pl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Kozłowski',
    addressCountry: 'PL',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 08:00-18:00',
}

const itemList = (products: Product[]): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.description,
      image: `https://pasiekalas.pl/assets/img/products/honey-${p.id}.svg`,
      brand: { '@type': 'Brand', name: 'Pasieka Las' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PLN',
        availability: 'https://schema.org/InStock',
      },
    },
  })),
})

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function JsonLd({ products = [] }: { products?: Product[] }) {
  return (
    <>
      <JsonLdScript data={localBusiness} />
      <JsonLdScript data={itemList(products)} />
    </>
  )
}
