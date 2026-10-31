export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo-final.png"
        alt="Lost & Found"
        className="h-8 w-auto object-contain"
      />
    </div>
  )
}