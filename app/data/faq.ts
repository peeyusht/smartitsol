export interface FAQ {
  question: string
  answer: string
}

export const faqContent = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How much does a network security audit cost?',
      answer: 'Network security audits typically range from $5,000-$50,000 depending on complexity. Our audits start at $8,500 for small businesses (under 50 employees) and include a comprehensive 47-point assessment, detailed report, and remediation roadmap. Request a custom quote.'
    },
    {
      question: 'How long does a security audit take?',
      answer: 'Most audits take 5-7 business days from initiation to final report delivery. The assessment phase requires 2-3 days of scanning, followed by 2-3 days of analysis. Emergency audits can be completed in 48-72 hours for an additional fee.'
    },
    {
      question: 'What\'s included in a network security audit?',
      answer: 'Our comprehensive audits include: external and internal vulnerability scanning, configuration review, penetration testing, compliance gap analysis (PCI-DSS, HIPAA, SOC 2), network architecture assessment, access control review, and a prioritized remediation plan. You receive both an executive summary and detailed technical report.'
    },
    {
      question: 'Do you offer compliance-specific audits?',
      answer: 'Yes. Our team includes certified compliance auditors for PCI-DSS, HIPAA, SOC 2, GDPR, and ISO 27001. We perform gap assessments, remediation support, and pre-audit readiness reviews. Our compliance audit success rate is 99.97%.'
    },
    {
      question: 'What makes your audits different from competitors?',
      answer: '83% of our new clients had previous audits that missed critical vulnerabilities. Our 47-point methodology includes manual testing that automated scans overlook—like misconfigured access controls, outdated firmware, and logic flaws. Plus, we include 30-day remediation support at no extra cost.'
    },
    {
      question: 'How quickly can you start an emergency audit?',
      answer: 'We can initiate emergency audits within 24 hours for compliance deadlines or suspected breaches. Our fastest audit completion was 36 hours for a client facing regulatory action. Contact us immediately if you have an urgent security concern.'
    }
  ]
}
