import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const elements = [...document.querySelectorAll('[data-reveal]')]
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.documentElement.dataset.motion = 'on'
    elements.forEach((element: Element) => {
      element.classList.add('scroll-reveal')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      delete document.documentElement.dataset.motion
    }
  }, [])
}
