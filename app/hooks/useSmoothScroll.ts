import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollToElement = useCallback((id: string, onComplete?: () => void) => {
    const element = document.getElementById(id.replace('#', ''))
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Focus management for accessibility
    const heading = element.querySelector('h1, h2')
    if (heading && heading instanceof HTMLElement) {
      heading.setAttribute('tabindex', '-1')
      heading.focus()
      // Remove tabindex after focus
      heading.addEventListener('blur', () => {
        heading.removeAttribute('tabindex')
      }, { once: true })
    }

    onComplete?.()
  }, [])

  return scrollToElement
}
