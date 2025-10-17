import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FF',
          100: '#B3E5FF',
          200: '#80D4FF',
          300: '#4DC3FF',
          400: '#1AB2FF',
          500: '#0099E6',
          600: '#0080BF',
          700: '#006699',
          800: '#004D73',
          900: '#00334D',
        },
        secondary: {
          50: '#F0E6FF',
          100: '#D4B3FF',
          300: '#A366FF',
          500: '#7C3AED',
          700: '#5B21B6',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFBFC',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      spacing: {
        18: '72px',
        22: '88px',
        26: '104px',
      },
      borderRadius: {
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 153, 230, 0.12)',
        'glass-hover': '0 12px 48px rgba(0, 153, 230, 0.18)',
        primary: '0 10px 30px rgba(0, 153, 230, 0.3)',
        secondary: '0 10px 30px rgba(124, 58, 237, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0099E6 0%, #7C3AED 100%)',
        'gradient-hero': 'linear-gradient(135deg, #001F3D 0%, #003D73 50%, #0099E6 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(0, 153, 230, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        gradientShift: 'gradientShift 6s ease infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
