'use client'

import { useState, useRef, useEffect } from 'react'

interface ShowMoreToggleProps {
  children: React.ReactNode
  maxHeight?: number // in pixels
  className?: string
}

export function ShowMoreToggle({
  children,
  maxHeight = 150,
  className = ''
}: ShowMoreToggleProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [shouldShowToggle, setShouldShowToggle] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight
        setShouldShowToggle(contentHeight > maxHeight)
      }
    }

    // Check immediately and after a short delay to ensure content is rendered
    checkHeight()
    const timer = setTimeout(checkHeight, 100)

    return () => clearTimeout(timer)
  }, [maxHeight, children])

  if (!shouldShowToggle) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={`show-more-wrapper ${className}`}>
      <div
        ref={contentRef}
        className={`show-more-content ${isExpanded ? 'expanded' : 'collapsed'}`}
        style={{
          maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {children}
        {!isExpanded && (
          <div className="show-more-fade" />
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="show-more-btn"
        aria-expanded={isExpanded}
        type="button"
      >
        {isExpanded ? (
          <>
            Show Less
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="12 10 8 6 4 10"></polyline>
            </svg>
          </>
        ) : (
          <>
            Show More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 6 8 10 12 6"></polyline>
            </svg>
          </>
        )}
      </button>
    </div>
  )
}
