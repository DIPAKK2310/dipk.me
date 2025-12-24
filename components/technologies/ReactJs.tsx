export default function ReactJs() {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="64" fill="#20232a" />

      {/* Electron nucleus */}
      <circle cx="64" cy="64" r="6" fill="#61dafb" />

      {/* Orbits */}
      <ellipse
        cx="64"
        cy="64"
        rx="36"
        ry="14"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
      />
      <ellipse
        cx="64"
        cy="64"
        rx="36"
        ry="14"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
        transform="rotate(60 64 64)"
      />
      <ellipse
        cx="64"
        cy="64"
        rx="36"
        ry="14"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
        transform="rotate(120 64 64)"
      />
    </svg>
  );
}
