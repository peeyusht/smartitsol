'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%),
            linear-gradient(150deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%)
          `,
          backgroundSize: '80px 140px',
          animation: 'backgroundShift 20s linear infinite',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Overline */}
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              <span className="w-10 h-0.5 bg-white/60" />
              Trusted IT Security Partner
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Secure Your Digital{' '}
              <span className="text-gradient-light">Infrastructure</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Comprehensive networking, cybersecurity, and audit services designed
              to protect and optimize your business operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#contact"
                className="btn btn-md bg-white text-primary-600 hover:bg-neutral-50
                         hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="#services"
                className="btn btn-md border-2 border-white text-white
                         hover:bg-white hover:text-primary-600"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-full blur-3xl animate-pulseGlow" />

              {/* Placeholder for illustration/image */}
              <div className="relative z-10 animate-float">
                <div className="w-full h-full rounded-2xl glass-light flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-medium">
                      Enterprise-Grade Security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe for background animation */}
      <style jsx>{`
        @keyframes backgroundShift {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(140px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
