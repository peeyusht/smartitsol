export interface Service {
  icon: string
  title: string
  description: string
  fullDescription?: string
  benefits: string[]
  stat?: {
    label: string
    value: string
    context: string
  }
  testimonial?: {
    quote: string
    author: string
  }
  cta?: {
    text: string
    href: string
  }
}

export const servicesContent = {
  title: 'Our Core Services',
  subtitle: 'Comprehensive security solutions that protect your business and prevent million-dollar disasters',
  services: [
    {
      icon: '🔍',
      title: 'Network Audits That Prevent Disasters',
      description: 'Your network has vulnerabilities. The only question is: will you find them first, or will hackers?',
      fullDescription: 'Our 47-point infrastructure assessments uncover hidden security gaps, performance bottlenecks costing you revenue, compliance violations risking fines up to $4.2M, and configuration errors that could cause system failures.',
      benefits: [
        'Executive summary with risk-prioritized action plan',
        'Detailed technical report with remediation roadmap',
        'Benchmark analysis against industry standards',
        '30-day follow-up consultation included'
      ],
      stat: {
        label: 'Average ROI:',
        value: '847%',
        context: 'through prevented breaches'
      }
    },
    {
      icon: '🛡️',
      title: 'Enterprise-Grade Security Reviews',
      description: 'Cybercriminals target businesses like yours because they assume you can\'t afford Fortune 500-level security. Prove them wrong.',
      fullDescription: 'Our SOC 2-certified team performs penetration testing and vulnerability assessments used by banks and healthcare providers:',
      benefits: [
        'External & Internal Penetration Testing',
        'OWASP Top 10 Vulnerability Scanning',
        'Compliance Gap Analysis (HIPAA, PCI-DSS, SOC 2)',
        'Dark Web Monitoring for Leaked Credentials'
      ],
      testimonial: {
        quote: 'Smart IT identified 3 critical vulnerabilities. One would have given attackers full database access.',
        author: 'Marcus Chen, CTO'
      }
    },
    {
      icon: '🚀',
      title: 'Zero-Downtime System Deployment',
      description: 'Failed deployments cost $384,000 on average in lost productivity, budget overruns, and extended downtime. We guarantee that won\'t happen to you.',
      benefits: [
        'Fixed-price projects (no surprise invoicing)',
        '99.97% on-time completion rate',
        'Average downtime: < 4 hours vs. 18-72 hour industry standard',
        'Full rollback procedures if issues occur',
        '90-day support included'
      ],
      cta: {
        text: 'Request Deployment Proposal →',
        href: '#contact'
      }
    }
  ]
}
