import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#hero', label: 'Strona główna' },
  { href: '#about', label: 'O nas' },
  { href: '#offer', label: 'Oferta' },
  { href: '#process', label: 'Jak powstaje' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
]

function scrollToTop(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const [year, setYear] = useState<string>('')
  useEffect(() => setYear(String(new Date().getFullYear())), [])
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2l2.5 4.5L19 8l-3.5 3.5L17 17l-5-2.5L7 17l1.5-5.5L5 8l4.5-1.5L12 2z" />
              </svg>
            </span>
            <span className="footer__name">Pasieka Las</span>
          </div>
          <nav className="footer__nav" aria-label="Nawigacja w stopce">
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__divider" />
        <div className="footer__bottom">
          <p>&copy; {year || '2026'} Pasieka Las. Wszelkie prawa zastrzeżone.</p>
          <p className="footer__legal">
            Strona nie zbiera danych analitycznych. Wyłącznie formularz kontaktowy przetwarza podane dane
            w celu odpowiedzi na zapytanie.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="footer__back-to-top"
        onClick={scrollToTop}
        aria-label="Wróć na górę strony"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  )
}
