export default function CICD() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64" fill="#6f42c1" />

      {/* Pipeline */}
      <rect x="24" y="56" width="24" height="16" rx="4" fill="#fff" />
      <rect x="52" y="56" width="24" height="16" rx="4" fill="#fff" />
      <rect x="80" y="56" width="24" height="16" rx="4" fill="#fff" />

      {/* Arrows */}
      <polygon points="48,64 52,60 52,68" fill="#fff" />
      <polygon points="76,64 80,60 80,68" fill="#fff" />
    </svg>
  );
}
