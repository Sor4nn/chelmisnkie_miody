import { useEffect, useState } from 'react'
import { useNav } from '../hooks/useNav.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import type { NavItem } from '../types.ts'

const LINKS: NavItem[] = [
  { href: '#about', label: 'O nas' },
  { href: '#offer', label: 'Oferta' },
  { href: '#process', label: 'Jak powstaje' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
]

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export default function Header() {
  const { isOpen, toggle, close, ACTIVE_CLASS } = useNav()
  const activeId = useScrollSpy(SECTION_IDS)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`navbar ${scrolled ? 'is-scrolled' : ''}`.trim()}
      id="navbar"
    >
      <div className="container">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" aria-label="Pasieka Las — strona główna">
            <span className="navbar__logo-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" role="img">
                <path d="M12 2l2.5 4.5L19 8l-3.5 3.5L17 17l-5-2.5L7 17l1.5-5.5L5 8l4.5-1.5L12 2z" />
              </svg>
            </span>
            Pasieka Las
          </a>
          <button
            className="navbar__toggle"
            onClick={toggle}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
            aria-controls="navLinks"
          >
            <span aria-hidden="true">{isOpen ? '\u2715' : '\u2630'}</span>
          </button>
          <ul
            className={`navbar__links ${isOpen ? ACTIVE_CLASS : ''}`.trim()}
            id="navLinks"
          >
            {LINKS.map((link) => {
              const id = link.href.slice(1)
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className={isActive ? 'is-active' : ''}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
