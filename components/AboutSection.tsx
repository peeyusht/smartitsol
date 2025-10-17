'use client';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const AboutSection = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ];

  const keyPoints = [
    {
      title: 'Certified Expertise',
      description: 'Industry-certified professionals with extensive field experience',
    },
    {
      title: 'Proactive Approach',
      description: 'We identify and address vulnerabilities before they become threats',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and rapid response to security incidents',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-100 to-secondary-100 aspect-[4/3] flex items-center justify-center">
              {/* Placeholder - replace with actual image */}
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-neutral-700 font-semibold">Professional IT Team</p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-neutral-200 hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-neutral-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="mt-8 bg-neutral-50 rounded-lg p-6 lg:hidden">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-neutral-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Overline */}
            <div className="section-overline text-left mb-3">
              About Smart IT Solutions
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-left">
              Your Trusted Partner in IT Security & Infrastructure
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 mb-8 text-neutral-600 leading-relaxed">
              <p>
                At Smart IT Solutions, we specialize in delivering enterprise-grade IT services
                that protect and empower businesses. With over 15 years of combined experience
                in networking, cybersecurity, and security auditing, our team provides
                comprehensive solutions tailored to your unique needs.
              </p>
              <p>
                We understand that in today&apos;s digital landscape, security isn&apos;t optional—it&apos;s
                essential. That&apos;s why we combine cutting-edge technology with industry best
                practices to deliver solutions that not only meet compliance standards but
                exceed them.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-md border-l-4 border-primary-500"
                >
                  <div className="flex-shrink-0 w-6 h-6 text-primary-600 mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn btn-primary btn-md">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
