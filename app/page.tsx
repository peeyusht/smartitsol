'use client'

import { useEffect, useRef, FormEvent } from 'react'
import './home.css'

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    // Header background change on scroll
    const handleScroll = () => {
      const header = headerRef.current
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(255, 255, 255, 0.98)'
          header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
        } else {
          header.style.background = 'rgba(255, 255, 255, 0.95)'
          header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.04)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.')
      return
    }

    // Simulate form submission
    const submitBtn = form.querySelector('.form-submit') as HTMLButtonElement
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.")
      form.reset()
      if (originalText) submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  }

  return (
    <>
      <header ref={headerRef}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg width="300" height="75" viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#0f172a', stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:'#1e293b', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#0ea5e9', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#0891b2', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:0.1}} />
                    <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.05}} />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="45" fill="url(#backgroundGradient)"/>
                <path d="M40 35 L60 25 L80 35 L80 55 Q80 70 60 80 Q40 70 40 55 Z" fill="url(#primaryGradient)" stroke="#0ea5e9" strokeWidth="2"/>
                <circle cx="52" cy="45" r="3" fill="#ffffff"/>
                <circle cx="68" cy="45" r="3" fill="#ffffff"/>
                <circle cx="60" cy="58" r="3" fill="#ffffff"/>
                <circle cx="60" cy="40" r="2" fill="#ffffff"/>
                <line x1="52" y1="45" x2="60" y2="40" stroke="#ffffff" strokeWidth="1.5"/>
                <line x1="68" y1="45" x2="60" y2="40" stroke="#ffffff" strokeWidth="1.5"/>
                <line x1="52" y1="45" x2="60" y2="58" stroke="#ffffff" strokeWidth="1.5"/>
                <line x1="68" y1="45" x2="60" y2="58" stroke="#ffffff" strokeWidth="1.5"/>
                <rect x="57" y="48" width="6" height="6" rx="1" fill="#ffffff" stroke="#f97316" strokeWidth="0.5"/>
                <path d="M58 48 Q58 46 60 46 Q62 46 62 48" stroke="#f97316" strokeWidth="1.5" fill="none"/>
                <text x="130" y="50" fontFamily="Space Grotesk, sans-serif" fontSize="26" fontWeight="bold" fill="#0f172a">
                  Smart IT <tspan fill="url(#accentGradient)">Solutions</tspan>
                </text>
                <text x="130" y="75" fontFamily="Inter, sans-serif" fontSize="11" fill="#475569">
                  Network Audits • Security Reviews • System Deployment
                </text>
              </svg>
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact" className="nav-cta">Get Quote</a></li>
              </ul>
            </nav>
            <button className="mobile-menu-btn">☰</button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Secure Your Digital Future</h1>
              <p className="hero-subtitle">
                Expert IT services specializing in comprehensive network audits, thorough security reviews, and professional system deployment. We ensure your infrastructure is robust, secure, and future-ready.
              </p>
              <a href="#contact" className="hero-cta">
                Start Your Project
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Our Core Services</h2>
              <p className="section-subtitle">
                Comprehensive IT solutions designed to protect and optimize your business infrastructure
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card fade-in">
                <div className="service-icon">🔍</div>
                <h3>Network Audits</h3>
                <p>
                  Comprehensive analysis of your network infrastructure to identify vulnerabilities, bottlenecks, and optimization opportunities. Our detailed audits provide actionable insights to enhance security, performance, and compliance with industry standards.
                </p>
              </div>

              <div className="service-card fade-in">
                <div className="service-icon">🛡️</div>
                <h3>Security Reviews</h3>
                <p>
                  In-depth cybersecurity assessments that evaluate your current security posture. We identify potential threats, assess risk levels, and provide strategic recommendations to strengthen your defense against evolving cyber attacks.
                </p>
              </div>

              <div className="service-card fade-in">
                <div className="service-icon">🚀</div>
                <h3>System Deployment</h3>
                <p>
                  Professional deployment services for network infrastructure, security systems, and cybersecurity solutions. We ensure seamless implementation with minimal downtime, maximum efficiency, and comprehensive testing for your business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text fade-in">
                <h2>Why Choose Smart IT Solutions?</h2>
                <p>
                  With extensive experience in IT infrastructure and cybersecurity, we deliver solutions that protect and empower your business. Our team of certified professionals stays ahead of emerging threats and cutting-edge technologies.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients, providing ongoing support and strategic guidance to ensure your IT infrastructure evolves seamlessly with your business needs and industry requirements.
                </p>

                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime Achieved</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support Available</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Why Partner With Us</h2>
              <p className="section-subtitle">
                Experience the difference that expertise, dedication, and cutting-edge solutions can make
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card fade-in">
                <div className="feature-icon">🏆</div>
                <h3>Industry Expertise</h3>
                <p>Certified professionals with deep knowledge across multiple technology domains and industry best practices.</p>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-icon">⚡</div>
                <h3>Rapid Response</h3>
                <p>Quick deployment and emergency response capabilities to minimize downtime and business disruption.</p>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-icon">🔒</div>
                <h3>Security First</h3>
                <p>Comprehensive security approach built into every solution, protecting your data and operations.</p>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-icon">📈</div>
                <h3>Scalable Solutions</h3>
                <p>Future-ready infrastructure that grows with your business needs and adapts to market changes.</p>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-icon">🎯</div>
                <h3>Custom Approach</h3>
                <p>Tailored strategies designed specifically for your unique business requirements and objectives.</p>
              </div>

              <div className="feature-card fade-in">
                <div className="feature-icon">💬</div>
                <h3>Ongoing Support</h3>
                <p>Continuous monitoring, maintenance, and support to ensure optimal performance and reliability.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info fade-in">
                <h2>Ready to Secure Your Future?</h2>
                <p>
                  Let&apos;s discuss how Smart IT Solutions can enhance your network security, optimize your infrastructure, and prepare your business for tomorrow&apos;s challenges.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <strong>Email Us</strong>
                      <p>info@smartitsolutions.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <strong>Call Us</strong>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">🌐</div>
                    <div>
                      <strong>Service Areas</strong>
                      <p>Nationwide Coverage Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="contact-form fade-in" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your Company" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="network-audit">Network Audit</option>
                    <option value="security-review">Security Review</option>
                    <option value="system-deployment">System Deployment</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Smart IT Solutions</h3>
              <p>Your trusted partner for comprehensive network audits, security reviews, and professional system deployment services.</p>
              <p>Building secure, reliable IT infrastructure for the digital age, one client at a time.</p>
            </div>

            <div className="footer-section">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#services">Network Audits</a></li>
                <li><a href="#services">Security Reviews</a></li>
                <li><a href="#services">System Deployment</a></li>
                <li><a href="#services">Cybersecurity Consulting</a></li>
                <li><a href="#services">Infrastructure Planning</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Get Quote</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <p>📧 info@smartitsolutions.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🌐 Available Nationwide</p>
              <p>🕒 24/7 Emergency Support</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Smart IT Solutions. All rights reserved. | Network Audits • Security Reviews • System Deployment</p>
          </div>
        </div>
      </footer>
    </>
  )
}
