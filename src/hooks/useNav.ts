import { useEffect, useState } from 'react'

const ACTIVE_CLASS = 'active'
const BREAKPOINT = 768

export function useNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = (): void => setIsOpen((v) => !v)
  const close = (): void => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return undefined
    document.body.classList.add('nav-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  useEffect(() => {
    const onResize = (): void => {
      if (window.innerWidth > BREAKPOINT && isOpen) close()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOpen])

  return { isOpen, toggle, close, ACTIVE_CLASS }
}
