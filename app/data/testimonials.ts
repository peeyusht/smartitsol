export interface Testimonial {
  stars: number
  quote: string
  author: {
    name: string
    title: string
    company: string
  }
  companySize: string
  result: {
    metric: string
    label: string
  }
}

export const testimonialsContent = {
  title: 'What Our Clients Say',
  subtitle: 'Real businesses, real results, real protection',
  testimonials: [
    {
      stars: 5,
      quote: 'Smart IT Solutions\' network audit uncovered 3 critical vulnerabilities that our previous IT team completely missed. One misconfiguration would have given attackers full access to our customer database. The $12,000 audit saved us from what could have been millions in breach costs and reputational damage.',
      author: {
        name: 'Sarah Martinez',
        title: 'VP of Technology',
        company: 'HealthTech Solutions'
      },
      companySize: 'Enterprise • 450 employees',
      result: {
        metric: '$2.4M',
        label: 'Potential breach cost prevented'
      }
    },
    {
      stars: 5,
      quote: 'We were facing a 90-day deadline to achieve PCI-DSS compliance or face $250K monthly fines. Smart IT Solutions conducted an emergency security review and helped us implement their recommendations in just 45 days. We passed our audit with zero findings.',
      author: {
        name: 'Michael Rodriguez',
        title: 'CTO',
        company: 'Regional Bank Corp'
      },
      companySize: 'Financial Services • 200 employees',
      result: {
        metric: '$3M+',
        label: 'Compliance fines avoided'
      }
    },
    {
      stars: 5,
      quote: 'We\'ve worked with 4 different IT security firms over 12 years. Smart IT Solutions is the first one that actually understands our business needs, not just the technical requirements. Their deployment had zero downtime during Black Friday week—something our previous vendor couldn\'t guarantee.',
      author: {
        name: 'Jennifer Liu',
        title: 'IT Director',
        company: 'E-commerce Platform'
      },
      companySize: 'Retail • 125 employees',
      result: {
        metric: '0 hrs',
        label: 'Downtime during peak season'
      }
    }
  ]
}
