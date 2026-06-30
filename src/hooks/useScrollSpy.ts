import { useEffect, useState } from 'react'

export function useScrollSpy(
  ids: string[],
  options: { rootMargin?: string; threshold?: number } = {},
): string | null {
  const { rootMargin = '-45% 0px -45% 0px', threshold = 0 } = options
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return undefined

    const visible = new Map<string, IntersectionObserverEntry>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry)
          } else {
            visible.delete(entry.target.id)
          }
        }
        if (visible.size === 0) return
        const top = [...visible.entries()].reduce((a, b) =>
          a[1].boundingClientRect.top <= b[1].boundingClientRect.top ? a : b,
        )
        setActiveId(top[0])
      },
      { rootMargin, threshold },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin, threshold])

  return activeId
}
