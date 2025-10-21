import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Smart IT Solutions - Network Audits • Security Reviews • System Deployment',
  description: 'Expert IT services specializing in network audits, security reviews, and professional system deployment. Secure your digital future with Smart IT Solutions.',
  keywords: ['network audits', 'security reviews', 'system deployment', 'cybersecurity services', 'network infrastructure', 'IT consulting', 'security audits', 'managed IT services'],
  authors: [{ name: 'Smart IT Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartitsolutions.com',
    siteName: 'Smart IT Solutions',
    title: 'Smart IT Solutions - Network Audits • Security Reviews • System Deployment',
    description: 'Expert IT services specializing in network audits, security reviews, and professional system deployment. Secure your digital future with Smart IT Solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart IT Solutions - Network Audits • Security Reviews • System Deployment',
    description: 'Expert IT services specializing in network audits, security reviews, and professional system deployment. Secure your digital future with Smart IT Solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
