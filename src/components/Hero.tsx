export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="heroTitle">
      {/* Floating honeycomb particles */}
      <div className="hero__particles" aria-hidden="true">
        <div className="hero__particle hero__particle--1" />
        <div className="hero__particle hero__particle--2" />
        <div className="hero__particle hero__particle--3" />
        <div className="hero__particle hero__particle--4" />
        <div className="hero__particle hero__particle--5" />
        <div className="hero__particle hero__particle--6" />
      </div>
      <div className="hero__content">
        <span className="hero__badge" aria-hidden="true">
          🌿 100% naturalnie
        </span>
        <h1 className="hero__title" id="heroTitle">
          Naturalne Miody
          <br />z <span>Serca Lasu</span>
        </h1>
        <p className="hero__text">
          Odkryj smak prawdziwego miodu, prosto z naszej rodzinnej pasieki. Bez dodatków, bez kompromisów —
          tylko natura, pszczoły i miłość do rzemiosła.
        </p>
        <div className="hero__ctas">
          <a href="#offer" className="btn btn--primary btn--large">
            Sprawdź naszą ofertę
          </a>
          <a href="#about" className="btn btn--outline btn--large">
            Poznaj naszą historię
          </a>
        </div>
      </div>
      <a href="#featured" className="scroll-indicator" aria-label="Przewiń niżej">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}
