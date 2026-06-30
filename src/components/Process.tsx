import type { ProcessStep } from '../types.ts'

const STEPS: ProcessStep[] = [
  {
    icon: 'flower',
    title: 'Zbiór nektaru',
    text: 'Pszczoły zbierają nektar z dziko rosnących kwiatów w czystym lesie.',
  },
  {
    icon: 'honeycomb',
    title: 'Dojrzewanie',
    text: 'Miód dojrzewa w plastrach, zyskując pełnię smaku i właściwości.',
  },
  {
    icon: 'centrifuge',
    title: 'Wirowanie',
    text: 'Ostrożnie wirujemy miód na zimno — bez podgrzewania, by zachować enzymy.',
  },
  {
    icon: 'package',
    title: 'Pakowanie',
    text: 'Ręcznie rozlewamy do słoiczków i etykietujemy partiami.',
  },
]

function ProcessIcon({ name }: { name: string }) {
  switch (name) {
    case 'flower':
      return (
        <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
          <circle cx="24" cy="18" r="5" fill="currentColor" opacity="0.9"/>
          <circle cx="18" cy="22" r="4.5" fill="currentColor" opacity="0.7"/>
          <circle cx="30" cy="22" r="4.5" fill="currentColor" opacity="0.7"/>
          <circle cx="20" cy="28" r="4.5" fill="currentColor" opacity="0.7"/>
          <circle cx="28" cy="28" r="4.5" fill="currentColor" opacity="0.7"/>
          <circle cx="24" cy="24" r="4" fill="#fff" opacity="0.9"/>
          <line x1="24" y1="32" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
          <path d="M24 36 Q20 34 18 36" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M24 39 Q28 37 30 39" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      )
    case 'honeycomb':
      return (
        <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
          <polygon points="24,6 32,11 32,21 24,26 16,21 16,11" fill="currentColor" opacity="0.85"/>
          <polygon points="34,17 42,22 42,32 34,37 26,32 26,22" fill="currentColor" opacity="0.6"/>
          <polygon points="14,17 22,22 22,32 14,37 6,32 6,22" fill="currentColor" opacity="0.6"/>
          <polygon points="24,28 32,33 32,43 24,48 16,43 16,33" fill="currentColor" opacity="0.45"/>
          {/* Honey drop */}
          <circle cx="24" cy="16" r="3" fill="#fff" opacity="0.5"/>
        </svg>
      )
    case 'centrifuge':
      return (
        <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
          <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.9"/>
          {/* Spinning motion lines */}
          <path d="M24 8 Q28 6 30 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          <path d="M38 18 Q42 20 40 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          <path d="M8 26 Q6 22 8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
          {/* Drops */}
          <circle cx="36" cy="32" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    case 'package':
      return (
        <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
          <rect x="8" y="14" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
          <path d="M8 22 L40 22" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          {/* Flaps */}
          <path d="M8 14 L16 6 L32 6 L40 14" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
          {/* Ribbon */}
          <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
          {/* Bow */}
          <path d="M18 14 Q24 8 30 14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
          <circle cx="24" cy="14" r="2" fill="currentColor" opacity="0.8"/>
          {/* Heart */}
          <path d="M22 30 Q24 27 26 30 Q24 34 22 30 Z" fill="currentColor" opacity="0.5"/>
        </svg>
      )
    default:
      return null
  }
}

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="processTitle">
      <div className="container">
        <span className="section-eyebrow text-center">Nasz proces</span>
        <h2 className="section-title" id="processTitle">
          Jak powstaje nasz miód
        </h2>
        <p className="section-subtitle">
          Od kwiatu do słoiczka — dbamy o każdy etap, by zachować czystość i smak.
        </p>
        <div className="process__grid">
          {STEPS.map((step, i) => (
            <div className="process__item reveal" key={step.title}>
              <div className="process__icon" aria-hidden="true">
                <ProcessIcon name={step.icon} />
              </div>
              <div className="process__step">Krok {i + 1}</div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
