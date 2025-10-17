'use client';

import { HiArrowRight } from 'react-icons/hi';

// Service icon components
const NetworkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="3" r="2"/>
    <circle cx="12" cy="21" r="2"/>
    <circle cx="3" cy="12" r="2"/>
    <circle cx="21" cy="12" r="2"/>
    <line x1="12" y1="5" x2="12" y2="10"/>
    <line x1="12" y1="14" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="10" y2="12"/>
    <line x1="14" y1="12" x2="19" y2="12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const ChecklistIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

const services = [
  {
    id: 'networking',
    icon: NetworkIcon,
    gradient: 'from-primary-500 to-primary-400',
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network solutions that ensure seamless connectivity and optimal performance.',
    features: [
      'Network Design & Architecture',
      'LAN/WAN Implementation',
      'Network Monitoring & Management',
      'Performance Optimization',
    ],
  },
  {
    id: 'security',
    icon: ShieldIcon,
    gradient: 'from-secondary-500 to-secondary-400',
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from evolving threats with comprehensive security strategies and advanced threat detection.',
    features: [
      'Threat Detection & Prevention',
      'Security Infrastructure Setup',
      'Incident Response Planning',
      '24/7 Security Monitoring',
    ],
  },
  {
    id: 'audit',
    icon: ChecklistIcon,
    gradient: 'from-primary-600 to-primary-500',
    title: 'Security Audits & Reviews',
    description: 'Comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards.',
    features: [
      'Vulnerability Assessments',
      'Compliance Auditing',
      'Risk Analysis & Reporting',
      'Remediation Planning',
    ],
  },
];

interface ServiceCardProps {
  service: typeof services[0];
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <div className="group bg-white rounded-lg p-10 border border-neutral-200
                    hover:border-primary-200 hover:-translate-y-2 hover:shadow-lg
                    transition-all duration-300 relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-md bg-gradient-to-br ${service.gradient}
                        flex items-center justify-center mb-6
                        group-hover:scale-110 group-hover:rotate-3
                        transition-transform duration-300`}>
          <Icon />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
              <span className="flex items-center justify-center w-5 h-5 rounded-full
                             bg-primary-50 text-primary-600 font-bold flex-shrink-0 mt-0.5">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <a
          href={`#${service.id}`}
          className="inline-flex items-center gap-2 text-primary-600 font-semibold
                   group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">Our Services</div>
          <h2 className="section-title">Comprehensive IT Solutions</h2>
          <p className="section-description">
            From network infrastructure to advanced cybersecurity, we provide
            end-to-end IT services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
