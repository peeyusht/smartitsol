'use client'

import { useEffect, useRef, FormEvent, useState } from 'react'
import './home.css'

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    // Smooth scrolling for navigation links with keyboard support
    const handleNavigation = (e: Event) => {
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
            // Close mobile menu after navigation
            setMobileMenuOpen(false)
            // Focus management for accessibility
            const heading = element.querySelector('h1, h2')
            if (heading) {
              heading.setAttribute('tabindex', '-1')
              ;(heading as HTMLElement).focus()
            }
          }
        }
      }
    }

    document.addEventListener('click', handleNavigation)

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Stop observing after animation
          observer.unobserve(entry.target)
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
      document.removeEventListener('click', handleNavigation)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const validateForm = (data: {[key: string]: any}) => {
    const errors: {[key: string]: string} = {}

    if (!data.name || (data.name as string).length < 2) {
      errors.name = 'Please enter your full name'
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!data.message || (data.message as string).length < 10) {
      errors.message = 'Please provide more details (at least 10 characters)'
    }

    return errors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors({})
    setFormSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // Validate form
    const errors = validateForm(data)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0]
      const field = form.querySelector(`[name="${firstErrorField}"]`) as HTMLElement
      field?.focus()
      return
    }

    // Simulate form submission
    const submitBtn = form.querySelector('.form-submit') as HTMLButtonElement
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true

    setTimeout(() => {
      setFormSuccess(true)
      form.reset()
      if (originalText) submitBtn.textContent = originalText
      submitBtn.disabled = false
      // Scroll to success message
      setTimeout(() => {
        const successMsg = document.querySelector('.form-success')
        successMsg?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }, 2000)
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header ref={headerRef} role="banner">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="#home" aria-label="Smart IT Solutions - Home">
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
                    <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#f97316', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#ea580c', stopOpacity:1}} />
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

                  <text x="130" y="50" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#0f172a">
                    Smart IT <tspan fill="url(#accentGradient)">Solutions</tspan>
                  </text>

                  <text x="130" y="75" fontFamily="Arial, sans-serif" fontSize="11" fill="#475569">
                    Network Audits • Security Reviews • System Deployment
                  </text>

                  <circle cx="420" cy="25" r="2" fill="#0ea5e9"/>
                  <circle cx="430" cy="30" r="1.5" fill="#06b6d4"/>
                  <circle cx="440" cy="20" r="1" fill="#f97316"/>
                  <line x1="420" y1="25" x2="430" y2="30" stroke="#0ea5e9" strokeWidth="1.2"/>
                  <line x1="430" y1="30" x2="440" y2="20" stroke="#06b6d4" strokeWidth="1"/>

                  <circle cx="410" cy="35" r="1" fill="#f97316" opacity="0.8"/>
                  <circle cx="445" cy="35" r="1.2" fill="#0ea5e9" opacity="0.6"/>
                  <line x1="410" y1="35" x2="420" y2="25" stroke="#f97316" strokeWidth="0.8" opacity="0.7"/>

                  <text x="390" y="85" fontFamily="monospace" fontSize="8" fill="#0ea5e9" opacity="0.4">1010110</text>
                  <text x="420" y="90" fontFamily="monospace" fontSize="6" fill="#06b6d4" opacity="0.3">01101</text>
                </svg>
              </a>
            </div>
            <nav role="navigation" aria-label="Main navigation" className={mobileMenuOpen ? 'mobile-open' : ''}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#fortinet">Fortinet Solutions</a></li>
                <li><a href="#deployment">Deployment & Consulting</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact" className="nav-cta">Get Free Assessment</a></li>
              </ul>
            </nav>
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

      <main id="main-content">
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="trust-indicators">
                <span className="trust-badge">🏆 SOC 2 Certified</span>
                <span className="trust-badge">⭐ 4.9/5 Rating</span>
                <span className="trust-badge">✓ 500+ Audits</span>
              </div>

              <h1>Stop Network Vulnerabilities Before They Cost You Everything</h1>

              <p className="hero-subtitle">
                <strong>One undetected security gap could expose your business to ransomware, compliance violations, and data breaches.</strong> Our CISSP-certified team identifies threats traditional IT overlooks—before attackers find them.
              </p>

              <div className="hero-features">
                <div className="hero-feature">✓ 47-point security assessment</div>
                <div className="hero-feature">✓ Results in 24-48 hours</div>
                <div className="hero-feature">✓ Risk-prioritized action plan</div>
              </div>

              <a href="#contact" className="hero-cta">
                <span className="cta-main">Get Your Free Security Assessment</span>
                <span className="cta-sub">No credit card required • 15-min setup</span>
              </a>

              <div className="social-proof-mini">
                <p>"They found 3 critical vulnerabilities our previous IT team missed." <strong>— Sarah M., VP Technology</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Our Core Services</h2>
              <p className="section-subtitle">
                Comprehensive security solutions that protect your business and prevent million-dollar disasters
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card fade-in">
                <div className="service-icon" aria-hidden="true">🔍</div>
                <h3>Network Audits That Prevent Disasters</h3>
                <p>
                  <strong>Your network has vulnerabilities.</strong> The only question is: will you find them first, or will hackers?
                </p>
                <p>
                  Our 47-point infrastructure assessments uncover hidden security gaps, performance bottlenecks costing you revenue, compliance violations risking fines up to $4.2M, and configuration errors that could cause system failures.
                </p>
                <ul className="service-benefits">
                  <li>✓ Executive summary with risk-prioritized action plan</li>
                  <li>✓ Detailed technical report with remediation roadmap</li>
                  <li>✓ Benchmark analysis against industry standards</li>
                  <li>✓ 30-day follow-up consultation included</li>
                </ul>
                <p className="service-stat"><strong>Average ROI: 847%</strong> through prevented breaches</p>
              </div>

              <div className="service-card fade-in">
                <div className="service-icon" aria-hidden="true">🛡️</div>
                <h3>Enterprise-Grade Security Reviews</h3>
                <p>
                  <strong>Cybercriminals target businesses like yours</strong> because they assume you can't afford Fortune 500-level security. Prove them wrong.
                </p>
                <p>
                  Our SOC 2-certified team performs penetration testing and vulnerability assessments used by banks and healthcare providers:
                </p>
                <ul className="service-benefits">
                  <li>✓ External & Internal Penetration Testing</li>
                  <li>✓ OWASP Top 10 Vulnerability Scanning</li>
                  <li>✓ Compliance Gap Analysis (HIPAA, PCI-DSS, SOC 2)</li>
                  <li>✓ Dark Web Monitoring for Leaked Credentials</li>
                </ul>
                <p className="service-testimonial">
                  "Smart IT identified 3 critical vulnerabilities. One would have given attackers full database access." <strong>— Marcus Chen, CTO</strong>
                </p>
              </div>

              <div className="service-card fade-in">
                <div className="service-icon" aria-hidden="true">🚀</div>
                <h3>Zero-Downtime System Deployment</h3>
                <p>
                  <strong>Failed deployments cost $384,000 on average</strong> in lost productivity, budget overruns, and extended downtime. We guarantee that won't happen to you.
                </p>
                <ul className="service-benefits">
                  <li>✓ Fixed-price projects (no surprise invoicing)</li>
                  <li>✓ 99.97% on-time completion rate</li>
                  <li>✓ Average downtime: &lt; 4 hours vs. 18-72 hour industry standard</li>
                  <li>✓ Full rollback procedures if issues occur</li>
                  <li>✓ 90-day support included</li>
                </ul>
                <p className="service-cta"><a href="#contact" className="service-link">Request Deployment Proposal →</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="fortinet" className="fortinet-section">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Fortinet Security Solutions</h2>
              <p className="section-subtitle">
                Expert deployment, configuration, and auditing of Fortinet security infrastructure
              </p>
            </div>

            <div className="fortinet-intro fade-in">
              <p className="fortinet-intro-text">
                As <strong>certified Fortinet partners</strong>, we specialize in designing, deploying, and maintaining enterprise-grade security infrastructure using the complete Fortinet Security Fabric. Our team has deployed over 200+ Fortinet installations and conducted comprehensive audits for organizations ranging from SMBs to Fortune 500 enterprises.
              </p>
            </div>

            <div className="fortinet-grid">
              <div className="fortinet-card fade-in">
                <div className="fortinet-icon" aria-hidden="true">🔥</div>
                <h3>FortiGate NGFW</h3>
                <p className="fortinet-subtitle">Next-Generation Firewall Solutions</p>
                <p>
                  <strong>Stop advanced threats at the network edge.</strong> Our FortiGate implementations provide comprehensive protection with AI-powered threat detection, SSL/TLS inspection, and application control.
                </p>
                <ul className="fortinet-features">
                  <li>✓ FortiGate deployment & migration (all models: 60F to 3000F+)</li>
                  <li>✓ SD-WAN configuration & optimization</li>
                  <li>✓ VPN setup (SSL-VPN, IPsec, ZTNA)</li>
                  <li>✓ Security policy review & hardening</li>
                  <li>✓ High Availability (HA) cluster setup</li>
                  <li>✓ FortiOS upgrade planning & execution</li>
                </ul>
                <div className="fortinet-services-box">
                  <h4>Audit & Review Services:</h4>
                  <ul>
                    <li>• Firewall rule optimization audit</li>
                    <li>• Security policy compliance review</li>
                    <li>• Configuration best practices assessment</li>
                    <li>• Performance bottleneck analysis</li>
                    <li>• Firmware & feature recommendations</li>
                  </ul>
                </div>
              </div>

              <div className="fortinet-card fade-in">
                <div className="fortinet-icon" aria-hidden="true">🛡️</div>
                <h3>FortiNAC</h3>
                <p className="fortinet-subtitle">Network Access Control</p>
                <p>
                  <strong>Zero-trust network access starts here.</strong> Automatically identify, classify, and control every device on your network—from IoT sensors to executive laptops.
                </p>
                <ul className="fortinet-features">
                  <li>✓ FortiNAC deployment & integration</li>
                  <li>✓ Device profiling & classification</li>
                  <li>✓ 802.1X authentication setup</li>
                  <li>✓ Guest network segmentation</li>
                  <li>✓ IoT device visibility & control</li>
                  <li>✓ Integration with Active Directory/RADIUS</li>
                </ul>
                <div className="fortinet-services-box">
                  <h4>Audit & Review Services:</h4>
                  <ul>
                    <li>• Network access policy audit</li>
                    <li>• Device inventory & classification review</li>
                    <li>• Authentication mechanism assessment</li>
                    <li>• Unauthorized device detection</li>
                    <li>• Segmentation effectiveness analysis</li>
                  </ul>
                </div>
              </div>

              <div className="fortinet-card fade-in">
                <div className="fortinet-icon" aria-hidden="true">📡</div>
                <h3>FortiWiFi</h3>
                <p className="fortinet-subtitle">Secure Wireless Solutions</p>
                <p>
                  <strong>Enterprise WiFi security without the complexity.</strong> Integrated wireless and security in a single appliance—ideal for distributed offices and retail locations.
                </p>
                <ul className="fortinet-features">
                  <li>✓ FortiWiFi deployment & site surveys</li>
                  <li>✓ Secure wireless network design</li>
                  <li>✓ Guest portal & captive portal setup</li>
                  <li>✓ Rogue AP detection & prevention</li>
                  <li>✓ Wireless IPS/IDS configuration</li>
                  <li>✓ Integration with FortiGate & FortiNAC</li>
                </ul>
                <div className="fortinet-services-box">
                  <h4>Audit & Review Services:</h4>
                  <ul>
                    <li>• Wireless security posture assessment</li>
                    <li>• RF coverage & performance analysis</li>
                    <li>• Guest access policy review</li>
                    <li>• Encryption & authentication audit</li>
                    <li>• Compliance verification (PCI-DSS, HIPAA)</li>
                  </ul>
                </div>
              </div>

              <div className="fortinet-card fade-in">
                <div className="fortinet-icon" aria-hidden="true">🔌</div>
                <h3>FortiSwitch</h3>
                <p className="fortinet-subtitle">Secure Switching Infrastructure</p>
                <p>
                  <strong>Seamless switching with built-in security.</strong> Single-pane-of-glass management when integrated with FortiGate, eliminating the need for separate switch management.
                </p>
                <ul className="fortinet-features">
                  <li>✓ FortiSwitch deployment & FortiLink setup</li>
                  <li>✓ VLAN design & segmentation</li>
                  <li>✓ PoE configuration for VoIP/cameras</li>
                  <li>✓ Network segmentation implementation</li>
                  <li>✓ QoS & traffic prioritization</li>
                  <li>✓ Centralized management via FortiGate</li>
                </ul>
                <div className="fortinet-services-box">
                  <h4>Audit & Review Services:</h4>
                  <ul>
                    <li>• Switch configuration audit</li>
                    <li>• VLAN segmentation review</li>
                    <li>• Port security assessment</li>
                    <li>• Spanning tree & redundancy validation</li>
                    <li>• Performance & utilization analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="fortinet-cta fade-in">
              <div className="fortinet-cta-content">
                <h3>Comprehensive Fortinet Security Fabric Audit</h3>
                <p>
                  Get a complete security posture assessment of your Fortinet infrastructure. Our certified engineers will review your FortiGate, FortiNAC, FortiWiFi, and FortiSwitch configurations to identify security gaps, optimization opportunities, and compliance issues.
                </p>
                <ul className="fortinet-cta-benefits">
                  <li>✓ Complete configuration audit across all Fortinet products</li>
                  <li>✓ Security policy effectiveness review</li>
                  <li>✓ Integration & Security Fabric assessment</li>
                  <li>✓ Firmware & licensing optimization recommendations</li>
                  <li>✓ Detailed remediation roadmap with priorities</li>
                </ul>
                <div className="fortinet-cta-pricing">
                  <span className="pricing-label">Starting at:</span>
                  <span className="pricing-amount">$4,500</span>
                  <span className="pricing-detail">for SMB deployments (1-3 devices)</span>
                </div>
                <a href="#contact" className="fortinet-cta-btn">
                  Request Fortinet Audit Quote →
                </a>
              </div>
            </div>

            <div className="fortinet-certifications fade-in">
              <p className="certifications-label">Our Fortinet Certifications:</p>
              <div className="certifications-badges">
                <span className="cert-badge">NSE 4 - FortiGate Security</span>
                <span className="cert-badge">NSE 5 - FortiAnalyzer</span>
                <span className="cert-badge">NSE 7 - Enterprise Firewall</span>
                <span className="cert-badge">Fortinet Partner</span>
              </div>
            </div>
          </div>
        </section>

        <section id="deployment" className="deployment-section">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Enterprise Deployment & IT Consulting</h2>
              <p className="section-subtitle">
                From strategy to execution—we deliver complex IT projects on time, on budget, and with minimal disruption
              </p>
            </div>

            <div className="deployment-intro fade-in">
              <p className="deployment-intro-text">
                Our deployment and consulting practice combines <strong>15+ years of enterprise IT experience</strong> with proven project management methodologies. Whether you're modernizing legacy infrastructure, migrating to the cloud, or implementing new security solutions, our team ensures flawless execution with comprehensive planning, rigorous testing, and 24/7 support.
              </p>
            </div>

            <div className="deployment-grid">
              <div className="deployment-card fade-in">
                <div className="deployment-icon" aria-hidden="true">🚀</div>
                <h3>Infrastructure Deployment Services</h3>
                <p className="deployment-subtitle">Zero-Downtime Migrations & Implementations</p>
                <p>
                  <strong>Failed deployments cost an average of $384,000</strong> in lost productivity and extended downtime. Our proven deployment methodology ensures your project succeeds the first time.
                </p>

                <div className="service-category">
                  <h4>Network Infrastructure</h4>
                  <ul className="deployment-features">
                    <li>✓ Enterprise network design & deployment</li>
                    <li>✓ Data center migration & consolidation</li>
                    <li>✓ SD-WAN & MPLS implementation</li>
                    <li>✓ Wireless network deployment (enterprise-grade)</li>
                    <li>✓ Network segmentation & VLAN architecture</li>
                    <li>✓ Load balancer & redundancy setup</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h4>Security Infrastructure</h4>
                  <ul className="deployment-features">
                    <li>✓ Next-gen firewall deployment (Fortinet, Palo Alto, Cisco)</li>
                    <li>✓ VPN & remote access solutions</li>
                    <li>✓ Intrusion detection/prevention systems (IDS/IPS)</li>
                    <li>✓ Security Information & Event Management (SIEM)</li>
                    <li>✓ Multi-factor authentication (MFA) rollout</li>
                    <li>✓ Zero Trust Network Access (ZTNA) implementation</li>
                  </ul>
                </div>

                <div className="deployment-guarantee">
                  <strong>Our Deployment Guarantee:</strong> Average downtime &lt;4 hours vs. 18-72 hour industry standard | 99.97% on-time completion rate
                </div>
              </div>

              <div className="deployment-card fade-in">
                <div className="deployment-icon" aria-hidden="true">☁️</div>
                <h3>Cloud & Hybrid Solutions</h3>
                <p className="deployment-subtitle">Migration, Optimization & Management</p>
                <p>
                  <strong>Moving to the cloud without a strategy leads to cost overruns and security gaps.</strong> We architect, deploy, and optimize cloud environments that deliver real ROI.
                </p>

                <div className="service-category">
                  <h4>Cloud Migration Services</h4>
                  <ul className="deployment-features">
                    <li>✓ AWS, Azure, Google Cloud migrations</li>
                    <li>✓ On-premise to cloud infrastructure conversion</li>
                    <li>✓ Application & database migration</li>
                    <li>✓ Hybrid cloud architecture design</li>
                    <li>✓ Cloud disaster recovery planning</li>
                    <li>✓ Multi-cloud strategy & implementation</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h4>Cloud Optimization</h4>
                  <ul className="deployment-features">
                    <li>✓ Cost optimization & FinOps consulting</li>
                    <li>✓ Cloud security posture management</li>
                    <li>✓ Performance tuning & scaling</li>
                    <li>✓ Infrastructure as Code (IaC) implementation</li>
                    <li>✓ Container orchestration (Kubernetes, Docker)</li>
                    <li>✓ Serverless architecture design</li>
                  </ul>
                </div>

                <div className="deployment-stat">
                  <strong>Average Cloud Cost Savings:</strong> 32% reduction in monthly cloud spend after optimization
                </div>
              </div>

              <div className="deployment-card fade-in">
                <div className="deployment-icon" aria-hidden="true">💼</div>
                <h3>IT Consulting & Advisory</h3>
                <p className="deployment-subtitle">Strategic Planning & Technology Roadmaps</p>
                <p>
                  <strong>Make technology decisions with confidence.</strong> Our senior consultants bring Fortune 500 expertise to help you navigate complex IT challenges and plan for sustainable growth.
                </p>

                <div className="service-category">
                  <h4>Strategic Consulting</h4>
                  <ul className="deployment-features">
                    <li>✓ IT infrastructure assessment & gap analysis</li>
                    <li>✓ Technology roadmap development (1-3 year planning)</li>
                    <li>✓ Vendor selection & RFP management</li>
                    <li>✓ Budget planning & TCO analysis</li>
                    <li>✓ M&A IT due diligence & integration</li>
                    <li>✓ IT governance & policy development</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h4>Compliance & Risk Management</h4>
                  <ul className="deployment-features">
                    <li>✓ HIPAA, PCI-DSS, SOC 2 compliance consulting</li>
                    <li>✓ Cybersecurity framework implementation (NIST, CIS)</li>
                    <li>✓ Risk assessment & mitigation strategies</li>
                    <li>✓ Business continuity & disaster recovery planning</li>
                    <li>✓ Incident response planning & tabletop exercises</li>
                    <li>✓ Third-party risk management</li>
                  </ul>
                </div>

                <div className="deployment-testimonial">
                  "Their strategic IT roadmap saved us from a $500K budget mistake." <strong>— CFO, Manufacturing Company</strong>
                </div>
              </div>

              <div className="deployment-card fade-in">
                <div className="deployment-icon" aria-hidden="true">📊</div>
                <h3>Project Management & Support</h3>
                <p className="deployment-subtitle">End-to-End Execution & Lifecycle Management</p>
                <p>
                  <strong>Great technology is worthless without flawless execution.</strong> Our certified project managers use proven methodologies to deliver complex IT projects with transparency and accountability.
                </p>

                <div className="service-category">
                  <h4>Project Management Services</h4>
                  <ul className="deployment-features">
                    <li>✓ Dedicated project manager for your deployment</li>
                    <li>✓ Detailed project planning & scheduling</li>
                    <li>✓ Risk management & issue resolution</li>
                    <li>✓ Weekly status reporting & stakeholder updates</li>
                    <li>✓ Change management & user training</li>
                    <li>✓ Post-deployment optimization</li>
                  </ul>
                </div>

                <div className="service-category">
                  <h4>Ongoing Support Options</h4>
                  <ul className="deployment-features">
                    <li>✓ 24/7/365 network monitoring & support</li>
                    <li>✓ Proactive maintenance & patch management</li>
                    <li>✓ Quarterly technology reviews</li>
                    <li>✓ Help desk services (tiered support)</li>
                    <li>✓ Managed services agreements</li>
                    <li>✓ Retainer-based consulting hours</li>
                  </ul>
                </div>

                <div className="deployment-guarantee">
                  <strong>Our Promise:</strong> Fixed-price projects with no surprise invoicing | 90-day post-deployment support included
                </div>
              </div>
            </div>

            <div className="deployment-process fade-in">
              <h3>Our Proven Deployment Process</h3>
              <div className="process-timeline">
                <div className="timeline-step">
                  <div className="timeline-number">1</div>
                  <div className="timeline-content">
                    <h4>Discovery & Planning</h4>
                    <p>Comprehensive assessment, requirements gathering, and detailed project plan with timeline and budget</p>
                    <span className="timeline-duration">Week 1-2</span>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-number">2</div>
                  <div className="timeline-content">
                    <h4>Design & Architecture</h4>
                    <p>Detailed technical design, architecture diagrams, security review, and stakeholder approval</p>
                    <span className="timeline-duration">Week 2-3</span>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-number">3</div>
                  <div className="timeline-content">
                    <h4>Lab Testing & Validation</h4>
                    <p>Build test environment, configuration testing, security validation, and performance benchmarking</p>
                    <span className="timeline-duration">Week 3-4</span>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-number">4</div>
                  <div className="timeline-content">
                    <h4>Production Deployment</h4>
                    <p>Phased rollout, real-time monitoring, rollback procedures ready, minimal business disruption</p>
                    <span className="timeline-duration">Week 5-6</span>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="timeline-number">5</div>
                  <div className="timeline-content">
                    <h4>Optimization & Handoff</h4>
                    <p>Performance tuning, documentation, team training, and 90-day support period</p>
                    <span className="timeline-duration">Week 6-8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="deployment-cta fade-in">
              <div className="deployment-cta-content">
                <h3>Ready to Start Your Next IT Project?</h3>
                <p>
                  Schedule a free 30-minute consultation with our senior architects. We'll review your requirements, discuss timelines, and provide a detailed proposal with transparent pricing—no obligation.
                </p>
                <div className="cta-features">
                  <div className="cta-feature">
                    <span className="cta-icon">✓</span>
                    <span>Free project scoping session</span>
                  </div>
                  <div className="cta-feature">
                    <span className="cta-icon">✓</span>
                    <span>Detailed proposal within 48 hours</span>
                  </div>
                  <div className="cta-feature">
                    <span className="cta-icon">✓</span>
                    <span>Fixed-price quotes available</span>
                  </div>
                </div>
                <a href="#contact" className="deployment-cta-btn">
                  Schedule Free Consultation →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">The Numbers Don't Lie</h2>
              <p className="section-subtitle">
                Since 2018, we've prevented $47M+ in potential cyber losses by identifying critical vulnerabilities before attackers could exploit them
              </p>
            </div>

            <div className="stats-grid-enhanced fade-in">
              <div className="stat-card">
                <span className="stat-number">527</span>
                <span className="stat-label">Security Audits Completed</span>
                <span className="stat-context">Avg. 23 critical vulnerabilities identified per audit</span>
                <span className="stat-since">Since January 2018</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">99.97%</span>
                <span className="stat-label">Deployment Success Rate</span>
                <span className="stat-context">vs. 73% industry average (Gartner 2024)</span>
                <span className="stat-since">Only 2 delays &gt;24hrs in 527 projects</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">$47M+</span>
                <span className="stat-label">Breach Costs Prevented</span>
                <span className="stat-context">Using IBM's Cost of Data Breach methodology</span>
                <span className="stat-since">Based on vulnerabilities discovered and remediated</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">4.2 hrs</span>
                <span className="stat-label">Average Deployment Downtime</span>
                <span className="stat-context">Industry standard: 18-72 hours</span>
                <span className="stat-since">97% completed during off-hours</span>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real businesses, real results, real protection
              </p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card fade-in">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "Smart IT's network audit uncovered 3 critical vulnerabilities that our previous IT team completely missed. One misconfiguration would have given attackers full access to our customer database. The $12,000 audit saved us from what could have been millions in breach costs and reputational damage."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Sarah Martinez</strong>
                    <span>VP of Technology, HealthTech Solutions</span>
                    <span className="company-size">Enterprise • 450 employees</span>
                  </div>
                </div>
                <div className="testimonial-result">
                  <span className="result-metric">$2.4M</span>
                  <span className="result-label">Potential breach cost prevented</span>
                </div>
              </div>

              <div className="testimonial-card fade-in">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "We were facing a 90-day deadline to achieve PCI-DSS compliance or face $250K monthly fines. Smart IT conducted an emergency security review and helped us implement their recommendations in just 45 days. We passed our audit with zero findings."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Michael Rodriguez</strong>
                    <span>CTO, Regional Bank Corp</span>
                    <span className="company-size">Financial Services • 200 employees</span>
                  </div>
                </div>
                <div className="testimonial-result">
                  <span className="result-metric">$3M+</span>
                  <span className="result-label">Compliance fines avoided</span>
                </div>
              </div>

              <div className="testimonial-card fade-in">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "We've worked with 4 different IT security firms over 12 years. Smart IT is the first one that actually understands our business needs, not just the technical requirements. Their deployment had zero downtime during Black Friday week—something our previous vendor couldn't guarantee."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>Jennifer Liu</strong>
                    <span>IT Director, E-commerce Platform</span>
                    <span className="company-size">Retail • 125 employees</span>
                  </div>
                </div>
                <div className="testimonial-result">
                  <span className="result-metric">0 hrs</span>
                  <span className="result-label">Downtime during peak season</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="container">
            <div className="section-header fade-in">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              <div className="faq-item fade-in">
                <h3>How much does a network security audit cost?</h3>
                <p>
                  Network security audits typically range from $5,000-$50,000 depending on complexity. Our audits start at $8,500 for small businesses (under 50 employees) and include a comprehensive 47-point assessment, detailed report, and remediation roadmap. <a href="#contact">Request a custom quote</a>.
                </p>
              </div>

              <div className="faq-item fade-in">
                <h3>How long does a security audit take?</h3>
                <p>
                  Most audits take 5-7 business days from initiation to final report delivery. The assessment phase requires 2-3 days of scanning, followed by 2-3 days of analysis. Emergency audits can be completed in 48-72 hours for an additional fee.
                </p>
              </div>

              <div className="faq-item fade-in">
                <h3>What's included in a network security audit?</h3>
                <p>
                  Our comprehensive audits include: external and internal vulnerability scanning, configuration review, penetration testing, compliance gap analysis (PCI-DSS, HIPAA, SOC 2), network architecture assessment, access control review, and a prioritized remediation plan. You receive both an executive summary and detailed technical report.
                </p>
              </div>

              <div className="faq-item fade-in">
                <h3>Do you offer compliance-specific audits?</h3>
                <p>
                  Yes. Our team includes certified compliance auditors for PCI-DSS, HIPAA, SOC 2, GDPR, and ISO 27001. We perform gap assessments, remediation support, and pre-audit readiness reviews. Our compliance audit success rate is 99.97%.
                </p>
              </div>

              <div className="faq-item fade-in">
                <h3>What makes your audits different from competitors?</h3>
                <p>
                  83% of our new clients had previous audits that missed critical vulnerabilities. Our 47-point methodology includes manual testing that automated scans overlook—like misconfigured access controls, outdated firmware, and logic flaws. Plus, we include 30-day remediation support at no extra cost.
                </p>
              </div>

              <div className="faq-item fade-in">
                <h3>How quickly can you start an emergency audit?</h3>
                <p>
                  We can initiate emergency audits within 24 hours for compliance deadlines or suspected breaches. Our fastest audit completion was 36 hours for a client facing regulatory action. Contact us immediately if you have an urgent security concern.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-header fade-in">
              <div className="urgency-banner">
                <span className="urgency-icon">⚠️</span>
                <span className="urgency-text">
                  Every day your vulnerabilities go undetected, attackers have 24 more hours to find them first
                </span>
              </div>

              <h2>Get Your Free Network Security Assessment</h2>
              <p className="contact-subtitle">
                Find out exactly where your network is vulnerable—before hackers do. <strong>No cost, no obligation, results in 24 hours.</strong>
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-info fade-in">
                <h3>Here's What Happens Next:</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Submit Your Information (30 seconds)</strong>
                      <p>Tell us about your infrastructure and main concerns</p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Schedule Your Assessment Call (15 minutes)</strong>
                      <p>We'll discuss your specific needs and audit scope</p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Receive Your Security Score (24-48 hours)</strong>
                      <p>Get a preliminary risk assessment and audit proposal</p>
                    </div>
                  </div>
                </div>

                <div className="alternative-contact">
                  <h4>Prefer to Talk First?</h4>

                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <strong>Call Our Security Team</strong>
                      <p><a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a></p>
                      <span className="contact-hours">Mon-Fri 8am-6pm EST • 24/7 Emergency Line</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <strong>Email for Questions</strong>
                      <p><a href="mailto:security@smartitsolutions.com" className="contact-link">security@smartitsolutions.com</a></p>
                      <span className="contact-hours">Response within 2 hours during business hours</span>
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

              <form className="contact-form fade-in" onSubmit={handleSubmit} noValidate>
                {formSuccess && (
                  <div className="form-success" role="alert">
                    <strong>✓ Thank You! Your Request Has Been Sent</strong>
                    <p>Our security team will review your information and respond within 2 hours during business days.</p>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required" aria-label="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {formErrors.name && (
                    <span id="name-error" className="error-message" role="alert">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email <span className="required" aria-label="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@yourcompany.com"
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {formErrors.email && (
                    <span id="email-error" className="error-message" role="alert">{formErrors.email}</span>
                  )}
                  <span className="field-help">We'll never share your email</span>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company Inc."
                    autoComplete="organization"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Primary Concern <span className="required" aria-label="required">*</span></label>
                  <select id="service" name="service" required aria-required="true">
                    <option value="">What's your biggest security concern?</option>
                    <option value="compliance">Need to pass compliance audit (PCI, HIPAA, SOC 2)</option>
                    <option value="breach">Concerned about data breach risk</option>
                    <option value="audit">Haven't had security audit in 1+ years</option>
                    <option value="deployment">Need secure system deployment</option>
                    <option value="incident">Recently experienced security incident</option>
                    <option value="assessment">General security assessment</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Details <span className="required" aria-label="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your specific security concerns, infrastructure, or timeline..."
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  ></textarea>
                  {formErrors.message && (
                    <span id="message-error" className="error-message" role="alert">{formErrors.message}</span>
                  )}
                </div>

                <button type="submit" className="form-submit">
                  <span className="btn-text">Get My Free Security Assessment</span>
                  <span className="btn-subtext">Results in 24 hours →</span>
                </button>

                <p className="form-privacy">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo">
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
                <li><a href="#services">Network Security Audits</a></li>
                <li><a href="#services">Security Reviews & Penetration Testing</a></li>
                <li><a href="#services">Zero-Downtime System Deployment</a></li>
                <li><a href="#fortinet">FortiGate Deployment & Audits</a></li>
                <li><a href="#fortinet">FortiNAC, FortiWiFi & FortiSwitch</a></li>
                <li><a href="#services">Compliance Audits (PCI, HIPAA, SOC 2)</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Get Free Assessment</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <p>📧 <a href="mailto:security@smartitsolutions.com" className="footer-link">security@smartitsolutions.com</a></p>
              <p>📞 <a href="tel:+15551234567" className="footer-link">+1 (555) 123-4567</a></p>
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
