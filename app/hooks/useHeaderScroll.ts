import { useEffect, useRef, useState } from 'react'
import { SCROLL_THRESHOLDS } from '../constants'

export function useHeaderScroll(threshold = SCROLL_THRESHOLDS.HEADER_CHANGE) {
  const [isScrolled, setIsScrolled] = useState(false)
  const rafId = useRef<number>()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      // Cancel pending animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }

      // Use requestAnimationFrame for smooth updates
      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        // Only update if crossing threshold
        if (
          (lastScrollY.current <= threshold && currentScrollY > threshold) ||
          (lastScrollY.current > threshold && currentScrollY <= threshold)
        ) {
          setIsScrolled(currentScrollY > threshold)
        }
        lastScrollY.current = currentScrollY
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [threshold])

  return isScrolled
}
