import aboutImg from '../assets/img/about/about.svg'

const STATS = [
  { number: '3+', label: 'Pokolenia pszczelarzy' },
  { number: '100%', label: 'Naturalna pasieka' },
  { number: '15+', label: 'Lat doświadczenia' },
]

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="aboutTitle">
      <div className="container">
        <div className="about__grid">
          <div className="about__image reveal">
            <img
              src={aboutImg}
              alt="Pszczelarz kontrolujący ramki w pasiece"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about__content reveal">
            <span className="section-eyebrow">Pasieka z tradycją</span>
            <h2 id="aboutTitle">O naszej pasiece</h2>
            <p>
              Jesteśmy rodziną z pasją do pszczelarstwa, która od pokoleń dba o zdrowie pszczół i jakość
              miodu. Nasza pasieka leży w sercu czystego lasu, z dala od zanieczyszczeń i miejskiego
              zgiełku.
            </p>
            <p>
              Wierzymy, że najlepszy miód powstaje w harmonii z naturą. Dlatego nasze pszczoły zbierają
              nektar z dziko rosnących kwiatów, a każdy słoiczek jest dowodem naszej troski i szacunku
              dla tych niezwykłych owadów.
            </p>
            <div className="about__stats" aria-label="Pasieka w liczbach">
              {STATS.map((s) => (
                <div key={s.label} className="about__stat">
                  <div className="about__stat-number">{s.number}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn--outline">
              Skontaktuj się
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
