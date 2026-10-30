export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f26100" />
            <stop offset="1" stopColor="#7b6cf0" />
          </linearGradient>
        </defs>
        <circle cx="14" cy="14" r="14" fill="url(#logo-grad)" />
        <circle cx="13" cy="12.5" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M16.5 16l4 4" stroke="#fff " strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-logo text-lg leading-none">Lost &amp; Found</span>
    </div>
  )
}