'use client'

import { useState } from 'react'
import { useHeaderScroll } from '@/app/hooks/useHeaderScroll'
import { Logo } from '../ui/Logo'
import { Navigation } from './Navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useHeaderScroll()

  const handleNavigate = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      role="banner"
      className={isScrolled ? 'header-scrolled' : ''}
      style={{
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.98)'
          : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled
          ? '0 8px 32px rgba(0, 0, 0, 0.08)'
          : '0 8px 32px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" aria-label="Smart IT Solutions - Home">
              <Logo />
            </a>
          </div>

          <Navigation
            mobileMenuOpen={mobileMenuOpen}
            onNavigate={handleNavigate}
          />

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
