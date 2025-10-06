import React from 'react';

export default function MonacoEditorIcon({ className } : { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      fill="currentColor"
    >
      <rect width="256" height="256" fill="none" />
      <path
        d="M206.68 46.86l-50.84 44.14 50.84 43.91v74.45l-78.1-68.09-78.1 68.09V46.86l78.1 68.09 78.1-68.09z"
        fill="#1E1E1E"
      />
      <path
        d="M50.48 46.86v172.5l78.1-68.09 78.1 68.09V46.86l-78.1 68.09-78.1-68.09zM190.68 196.2l-62.1-54.13-62.1 54.13V59.02l62.1 54.13 62.1-54.13v137.18z"
        fill="#007ACC"
      />
    </svg>
  );
}
