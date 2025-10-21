export function Logo() {
  return (
    <svg width="300" height="75" viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#0f172a', stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:'#1e293b', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#0ea5e9', stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#0891b2', stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#f97316', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#ea580c', stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:0.1}} />
          <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.05}} />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="45" fill="url(#backgroundGradient)"/>
      <path d="M40 35 L60 25 L80 35 L80 55 Q80 70 60 80 Q40 70 40 55 Z" fill="url(#primaryGradient)" stroke="#0ea5e9" strokeWidth="2"/>

      <circle cx="52" cy="45" r="3" fill="#ffffff"/>
      <circle cx="68" cy="45" r="3" fill="#ffffff"/>
      <circle cx="60" cy="58" r="3" fill="#ffffff"/>
      <circle cx="60" cy="40" r="2" fill="#ffffff"/>

      <line x1="52" y1="45" x2="60" y2="40" stroke="#ffffff" strokeWidth="1.5"/>
      <line x1="68" y1="45" x2="60" y2="40" stroke="#ffffff" strokeWidth="1.5"/>
      <line x1="52" y1="45" x2="60" y2="58" stroke="#ffffff" strokeWidth="1.5"/>
      <line x1="68" y1="45" x2="60" y2="58" stroke="#ffffff" strokeWidth="1.5"/>

      <rect x="57" y="48" width="6" height="6" rx="1" fill="#ffffff" stroke="#f97316" strokeWidth="0.5"/>
      <path d="M58 48 Q58 46 60 46 Q62 46 62 48" stroke="#f97316" strokeWidth="1.5" fill="none"/>

      <text x="130" y="50" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#0f172a">
        Smart IT <tspan fill="url(#accentGradient)">Solutions</tspan>
      </text>

      <text x="130" y="75" fontFamily="Arial, sans-serif" fontSize="11" fill="#475569">
        Network Audits • Security Reviews • System Deployment
      </text>

      <circle cx="420" cy="25" r="2" fill="#0ea5e9"/>
      <circle cx="430" cy="30" r="1.5" fill="#06b6d4"/>
      <circle cx="440" cy="20" r="1" fill="#f97316"/>
      <line x1="420" y1="25" x2="430" y2="30" stroke="#0ea5e9" strokeWidth="1.2"/>
      <line x1="430" y1="30" x2="440" y2="20" stroke="#06b6d4" strokeWidth="1"/>

      <circle cx="410" cy="35" r="1" fill="#f97316" opacity="0.8"/>
      <circle cx="445" cy="35" r="1.2" fill="#0ea5e9" opacity="0.6"/>
      <line x1="410" y1="35" x2="420" y2="25" stroke="#f97316" strokeWidth="0.8" opacity="0.7"/>

      <text x="390" y="85" fontFamily="monospace" fontSize="8" fill="#0ea5e9" opacity="0.4">1010110</text>
      <text x="420" y="90" fontFamily="monospace" fontSize="6" fill="#06b6d4" opacity="0.3">01101</text>
    </svg>
  )
}
