import { useEffect, useRef } from 'react'
import { INTERSECTION_OBSERVER_OPTIONS } from '../constants'

export function useScrollObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Unobserve to prevent re-triggering
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, INTERSECTION_OBSERVER_OPTIONS)

    // Observe all fade-in elements
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
}
