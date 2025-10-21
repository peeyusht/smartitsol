export interface FortinetProduct {
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  auditServices: string[]
}

export const fortinetContent = {
  title: 'Fortinet Security Solutions',
  subtitle: 'Expert deployment, configuration, and auditing of Fortinet security infrastructure',
  intro: 'As <strong>certified Fortinet partners</strong>, we specialize in designing, deploying, and maintaining enterprise-grade security infrastructure using the complete Fortinet Security Fabric. Our team has deployed over 200+ Fortinet installations and conducted comprehensive audits for organizations ranging from SMBs to Fortune 500 enterprises.',

  products: [
    {
      icon: '🔥',
      title: 'FortiGate NGFW',
      subtitle: 'Next-Generation Firewall Solutions',
      description: '<strong>Stop advanced threats at the network edge.</strong> Our FortiGate implementations provide comprehensive protection with AI-powered threat detection, SSL/TLS inspection, and application control.',
      features: [
        'FortiGate deployment & migration (all models: 60F to 3000F+)',
        'SD-WAN configuration & optimization',
        'VPN setup (SSL-VPN, IPsec, ZTNA)',
        'Security policy review & hardening',
        'High Availability (HA) cluster setup',
        'FortiOS upgrade planning & execution'
      ],
      auditServices: [
        'Firewall rule optimization audit',
        'Security policy compliance review',
        'Configuration best practices assessment',
        'Performance bottleneck analysis',
        'Firmware & feature recommendations'
      ]
    },
    {
      icon: '🛡️',
      title: 'FortiNAC',
      subtitle: 'Network Access Control',
      description: '<strong>Zero-trust network access starts here.</strong> Automatically identify, classify, and control every device on your network—from IoT sensors to executive laptops.',
      features: [
        'FortiNAC deployment & integration',
        'Device profiling & classification',
        '802.1X authentication setup',
        'Guest network segmentation',
        'IoT device visibility & control',
        'Integration with Active Directory/RADIUS'
      ],
      auditServices: [
        'Network access policy audit',
        'Device inventory & classification review',
        'Authentication mechanism assessment',
        'Unauthorized device detection',
        'Segmentation effectiveness analysis'
      ]
    },
    {
      icon: '📡',
      title: 'FortiWiFi',
      subtitle: 'Secure Wireless Solutions',
      description: '<strong>Enterprise WiFi security without the complexity.</strong> Integrated wireless and security in a single appliance—ideal for distributed offices and retail locations.',
      features: [
        'FortiWiFi deployment & site surveys',
        'Secure wireless network design',
        'Guest portal & captive portal setup',
        'Rogue AP detection & prevention',
        'Wireless IPS/IDS configuration',
        'Integration with FortiGate & FortiNAC'
      ],
      auditServices: [
        'Wireless security posture assessment',
        'RF coverage & performance analysis',
        'Guest access policy review',
        'Encryption & authentication audit',
        'Compliance verification (PCI-DSS, HIPAA)'
      ]
    },
    {
      icon: '🔌',
      title: 'FortiSwitch',
      subtitle: 'Secure Switching Infrastructure',
      description: '<strong>Seamless switching with built-in security.</strong> Single-pane-of-glass management when integrated with FortiGate, eliminating the need for separate switch management.',
      features: [
        'FortiSwitch deployment & FortiLink setup',
        'VLAN design & segmentation',
        'PoE configuration for VoIP/cameras',
        'Network segmentation implementation',
        'QoS & traffic prioritization',
        'Centralized management via FortiGate'
      ],
      auditServices: [
        'Switch configuration audit',
        'VLAN segmentation review',
        'Port security assessment',
        'Spanning tree & redundancy validation',
        'Performance & utilization analysis'
      ]
    }
  ] as FortinetProduct[],

  cta: {
    title: 'Comprehensive Fortinet Security Fabric Audit',
    description: 'Get a complete security posture assessment of your Fortinet infrastructure. Our certified engineers will review your FortiGate, FortiNAC, FortiWiFi, and FortiSwitch configurations to identify security gaps, optimization opportunities, and compliance issues.',
    benefits: [
      'Complete configuration audit across all Fortinet products',
      'Security policy effectiveness review',
      'Integration & Security Fabric assessment',
      'Firmware & licensing optimization recommendations',
      'Detailed remediation roadmap with priorities'
    ],
    pricing: {
      label: 'Starting at:',
      amount: '$4,500',
      detail: 'for SMB deployments (1-3 devices)'
    },
    buttonText: 'Request Fortinet Audit Quote →'
  },

  certifications: {
    label: 'Our Fortinet Certifications:',
    badges: [
      'NSE 4 - FortiGate Security',
      'NSE 5 - FortiAnalyzer',
      'NSE 7 - Enterprise Firewall',
      'Fortinet Partner'
    ]
  }
}
