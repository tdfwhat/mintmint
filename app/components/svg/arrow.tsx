export default function Arrow({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 5v14" strokeLinecap="round" />
      <path d="M6 15l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
