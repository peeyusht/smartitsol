'use client'

import { useSmoothScroll } from '@/app/hooks/useSmoothScroll'

interface NavigationProps {
  mobileMenuOpen: boolean
  onNavigate: () => void
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#fortinet', label: 'Fortinet Solutions' },
  { href: '#deployment', label: 'Deployment & Consulting' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
]

export function Navigation({ mobileMenuOpen, onNavigate }: NavigationProps) {
  const scrollTo = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollTo(href, onNavigate)
  }

  return (
    <nav
      id="main-navigation"
      role="navigation"
      aria-label="Main navigation"
      className={mobileMenuOpen ? 'mobile-open' : ''}
    >
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get Free Assessment
          </a>
        </li>
      </ul>
    </nav>
  )
}
