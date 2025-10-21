export interface DeploymentService {
  icon: string
  title: string
  subtitle: string
  description: string
  categories: Array<{
    title: string
    features: string[]
  }>
  footer?: {
    type: 'guarantee' | 'stat' | 'testimonial'
    content: string
  }
}

export interface TimelineStep {
  number: number
  title: string
  description: string
  duration: string
}

export interface DeploymentCTA {
  title: string
  description: string
  features: string[]
  buttonText: string
}

export const deploymentContent = {
  title: 'Enterprise Deployment & IT Consulting',
  subtitle: 'From strategy to execution—we deliver complex IT projects on time, on budget, and with minimal disruption',
  intro: 'Our deployment and consulting practice combines <strong>15+ years of enterprise IT experience</strong> with proven project management methodologies. Whether you\'re modernizing legacy infrastructure, migrating to the cloud, or implementing new security solutions, our team ensures flawless execution with comprehensive planning, rigorous testing, and 24/7 support.',

  services: [
    {
      icon: '🚀',
      title: 'Infrastructure Deployment Services',
      subtitle: 'Zero-Downtime Migrations & Implementations',
      description: '<strong>Failed deployments cost an average of $384,000</strong> in lost productivity and extended downtime. Our proven deployment methodology ensures your project succeeds the first time.',
      categories: [
        {
          title: 'Network Infrastructure',
          features: [
            'Enterprise network design & deployment',
            'Data center migration & consolidation',
            'SD-WAN & MPLS implementation',
            'Wireless network deployment (enterprise-grade)',
            'Network segmentation & VLAN architecture',
            'Load balancer & redundancy setup'
          ]
        },
        {
          title: 'Security Infrastructure',
          features: [
            'Next-gen firewall deployment (Fortinet, Palo Alto, Cisco)',
            'VPN & remote access solutions',
            'Intrusion detection/prevention systems (IDS/IPS)',
            'Security Information & Event Management (SIEM)',
            'Multi-factor authentication (MFA) rollout',
            'Zero Trust Network Access (ZTNA) implementation'
          ]
        }
      ],
      footer: {
        type: 'guarantee',
        content: '<strong>Our Deployment Guarantee:</strong> Average downtime <4 hours vs. 18-72 hour industry standard | 99.97% on-time completion rate'
      }
    },
    {
      icon: '☁️',
      title: 'Cloud & Hybrid Solutions',
      subtitle: 'Migration, Optimization & Management',
      description: '<strong>Moving to the cloud without a strategy leads to cost overruns and security gaps.</strong> We architect, deploy, and optimize cloud environments that deliver real ROI.',
      categories: [
        {
          title: 'Cloud Migration Services',
          features: [
            'AWS, Azure, Google Cloud migrations',
            'On-premise to cloud infrastructure conversion',
            'Application & database migration',
            'Hybrid cloud architecture design',
            'Cloud disaster recovery planning',
            'Multi-cloud strategy & implementation'
          ]
        },
        {
          title: 'Cloud Optimization',
          features: [
            'Cost optimization & FinOps consulting',
            'Cloud security posture management',
            'Performance tuning & scaling',
            'Infrastructure as Code (IaC) implementation',
            'Container orchestration (Kubernetes, Docker)',
            'Serverless architecture design'
          ]
        }
      ],
      footer: {
        type: 'stat',
        content: '<strong>Average Cloud Cost Savings:</strong> 32% reduction in monthly cloud spend after optimization'
      }
    },
    {
      icon: '💼',
      title: 'IT Consulting & Advisory',
      subtitle: 'Strategic Planning & Technology Roadmaps',
      description: '<strong>Make technology decisions with confidence.</strong> Our senior consultants bring Fortune 500 expertise to help you navigate complex IT challenges and plan for sustainable growth.',
      categories: [
        {
          title: 'Strategic Consulting',
          features: [
            'IT infrastructure assessment & gap analysis',
            'Technology roadmap development (1-3 year planning)',
            'Vendor selection & RFP management',
            'Budget planning & TCO analysis',
            'M&A IT due diligence & integration',
            'IT governance & policy development'
          ]
        },
        {
          title: 'Compliance & Risk Management',
          features: [
            'HIPAA, PCI-DSS, SOC 2 compliance consulting',
            'Cybersecurity framework implementation (NIST, CIS)',
            'Risk assessment & mitigation strategies',
            'Business continuity & disaster recovery planning',
            'Incident response planning & tabletop exercises',
            'Third-party risk management'
          ]
        }
      ],
      footer: {
        type: 'testimonial',
        content: '"Their strategic IT roadmap saved us from a $500K budget mistake." <strong>— CFO, Manufacturing Company</strong>'
      }
    },
    {
      icon: '📊',
      title: 'Project Management & Support',
      subtitle: 'End-to-End Execution & Lifecycle Management',
      description: '<strong>Great technology is worthless without flawless execution.</strong> Our certified project managers use proven methodologies to deliver complex IT projects with transparency and accountability.',
      categories: [
        {
          title: 'Project Management Services',
          features: [
            'Dedicated project manager for your deployment',
            'Detailed project planning & scheduling',
            'Risk management & issue resolution',
            'Weekly status reporting & stakeholder updates',
            'Change management & user training',
            'Post-deployment optimization'
          ]
        },
        {
          title: 'Ongoing Support Options',
          features: [
            '24/7/365 network monitoring & support',
            'Proactive maintenance & patch management',
            'Quarterly technology reviews',
            'Help desk services (tiered support)',
            'Managed services agreements',
            'Retainer-based consulting hours'
          ]
        }
      ],
      footer: {
        type: 'guarantee',
        content: '<strong>Our Promise:</strong> Fixed-price projects with no surprise invoicing | 90-day post-deployment support included'
      }
    }
  ] as DeploymentService[],

  process: {
    title: 'Our Proven Deployment Process',
    steps: [
      {
        number: 1,
        title: 'Discovery & Planning',
        description: 'Comprehensive assessment, requirements gathering, and detailed project plan with timeline and budget',
        duration: 'Week 1-2'
      },
      {
        number: 2,
        title: 'Design & Architecture',
        description: 'Detailed technical design, architecture diagrams, security review, and stakeholder approval',
        duration: 'Week 2-3'
      },
      {
        number: 3,
        title: 'Lab Testing & Validation',
        description: 'Build test environment, configuration testing, security validation, and performance benchmarking',
        duration: 'Week 3-4'
      },
      {
        number: 4,
        title: 'Production Deployment',
        description: 'Phased rollout, real-time monitoring, rollback procedures ready, minimal business disruption',
        duration: 'Week 5-6'
      },
      {
        number: 5,
        title: 'Optimization & Handoff',
        description: 'Performance tuning, documentation, team training, and 90-day support period',
        duration: 'Week 6-8'
      }
    ] as TimelineStep[]
  },

  cta: {
    title: 'Ready to Start Your Next IT Project?',
    description: 'Schedule a free 30-minute consultation with our senior architects. We\'ll review your requirements, discuss timelines, and provide a detailed proposal with transparent pricing—no obligation.',
    features: [
      'Free project scoping session',
      'Detailed proposal within 48 hours',
      'Fixed-price quotes available'
    ],
    buttonText: 'Schedule Free Consultation →'
  } as DeploymentCTA
}
