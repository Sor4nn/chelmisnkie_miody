import type { FaqItem } from '../types.ts'

const ITEMS: FaqItem[] = [
  {
    q: 'Jak przechowywać miód?',
    a: 'Przechowuj w szczelnie zamkniętym słoiczku, w suchym i chłodnym miejscu, z dala od światła słonecznego. Miód nie wymaga lodówki — w temperaturze pokojowej zachowuje świeżość nawet do 2 lat.',
  },
  {
    q: 'Jaki jest termin ważności miodu?',
    a: 'Naturalny miód nie psuje się. Z czasem może ulec krystalizacji — to naturalny proces, nie wada. Aby przywrócić płynną konsystencję, wystarczy podgrzać słoiczek w kąpieli wodnej do 40°C.',
  },
  {
    q: 'Jak wygląda dostawa?',
    a: 'Wysyłamy kurierem lub do paczkomatu w ciągu 2–3 dni roboczych. Koszt dostawy zależy od wybranej formy i rozmiaru zamówienia — szczegóły potwierdzamy mailowo.',
  },
  {
    q: 'Jakie formy płatności akceptujecie?',
    a: 'Przelew tradycyjny, szybki przelew online oraz płatność przy odbiorze (za pobraniem). Faktura VAT na życzenie.',
  },
  {
    q: 'Czy miód jest pasteryzowany?',
    a: 'Nie. Nasz miód jest wirowany na zimno i nie podlega obróbce termicznej. Dzięki temu zachowuje pełnię enzymów, witamin i naturalnych właściwości.',
  },
]

export default function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faqTitle">
      <div className="container">
        <h2 className="section-title" id="faqTitle">
          Najczęstsze pytania
        </h2>
        <p className="section-subtitle">Wszystko, co warto wiedzieć przed zamówieniem.</p>
        <div className="faq__list">
          {ITEMS.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary className="faq__question">{item.q}</summary>
              <div className="faq__answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
