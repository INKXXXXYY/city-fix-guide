import type { ReactNode } from "react";

export function ClinicScene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 520 360"
      role="img"
      aria-label="A dog and a cat outside a small clinic"
    >
      <rect width="520" height="360" fill="#f4e7c8" />
      <circle cx="430" cy="62" r="34" fill="#f0b429" />
      <path d="M0 250h520v110H0z" fill="#8fbf7a" />
      <path d="M70 250c40-36 78-36 118 0" fill="#6ea35a" />
      <path d="M330 252c28-28 62-22 92 8" fill="#6ea35a" />
      <rect x="168" y="118" width="168" height="132" fill="#f7f1e4" stroke="#243027" strokeWidth="6" />
      <polygon points="152,124 252,58 352,124" fill="#c4492c" stroke="#243027" strokeWidth="6" strokeLinejoin="round" />
      <rect x="228" y="176" width="48" height="74" fill="#243027" />
      <rect x="186" y="148" width="36" height="32" fill="#d7efe8" stroke="#243027" strokeWidth="5" />
      <rect x="282" y="148" width="36" height="32" fill="#d7efe8" stroke="#243027" strokeWidth="5" />
      <circle cx="246" cy="92" r="8" fill="#f7f1e4" />
      <ellipse cx="118" cy="262" rx="62" ry="28" fill="#e39b4a" />
      <circle cx="168" cy="228" r="32" fill="#e39b4a" stroke="#243027" strokeWidth="5" />
      <path d="M146 206l-8-28 22 16" fill="#c47b32" stroke="#243027" strokeWidth="4" strokeLinejoin="round" />
      <path d="M176 204l16-26-6 28" fill="#c47b32" stroke="#243027" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="160" cy="226" r="3.5" fill="#243027" />
      <circle cx="176" cy="226" r="3.5" fill="#243027" />
      <path d="M158 238c8 7 16 7 24 0" fill="none" stroke="#243027" strokeWidth="3" strokeLinecap="round" />
      <rect x="150" y="246" width="36" height="10" rx="5" fill="#c4492c" />
      <circle cx="168" cy="251" r="3" fill="#f0b429" />
      <rect x="96" y="268" width="12" height="28" fill="#c47b32" />
      <rect x="128" y="272" width="12" height="24" fill="#c47b32" />
      <path d="M92 286c-28 4-36 22-18 28 16-8 28-10 42-6" fill="#e39b4a" stroke="#243027" strokeWidth="4" />
      <ellipse cx="392" cy="268" rx="46" ry="24" fill="#f3f0ea" stroke="#243027" strokeWidth="5" />
      <circle cx="430" cy="236" r="26" fill="#f3f0ea" stroke="#243027" strokeWidth="5" />
      <path d="M412 220l-4-22 16 14" fill="#f3f0ea" stroke="#243027" strokeWidth="4" strokeLinejoin="round" />
      <path d="M442 218l12-20-2 24" fill="#f3f0ea" stroke="#243027" strokeWidth="4" strokeLinejoin="round" />
      <path d="M418 214c6-10 4-16-2-18" fill="#e07a4c" />
      <path d="M446 212c4-8 10-10 14-6" fill="#e07a4c" />
      <circle cx="422" cy="236" r="3" fill="#243027" />
      <circle cx="438" cy="236" r="3" fill="#243027" />
      <path d="M424 246h12" stroke="#243027" strokeWidth="3" strokeLinecap="round" />
      <path d="M448 258c22 8 28 24 16 30" fill="none" stroke="#243027" strokeWidth="5" strokeLinecap="round" />
      <rect x="372" y="276" width="10" height="22" fill="#d9d3c7" stroke="#243027" strokeWidth="3" />
      <rect x="396" y="278" width="10" height="20" fill="#d9d3c7" stroke="#243027" strokeWidth="3" />
    </svg>
  );
}

const marks: Record<string, ReactNode> = {
  "los-angeles": (
    <>
      <circle cx="46" cy="18" r="8" fill="#f0b429" />
      <ellipse cx="32" cy="46" rx="16" ry="10" fill="#e39b4a" />
      <circle cx="44" cy="36" r="9" fill="#e39b4a" />
    </>
  ),
  "new-york": (
    <>
      <rect x="14" y="22" width="12" height="30" fill="#243027" />
      <rect x="30" y="12" width="14" height="40" fill="#c4492c" />
      <rect x="48" y="26" width="10" height="26" fill="#2f6f62" />
    </>
  ),
  chicago: (
    <>
      <circle cx="34" cy="34" r="14" fill="#e39b4a" />
      <path d="M22 30h24" stroke="#c4492c" strokeWidth="6" />
      <path d="M24 18l6 8M44 18l-6 8" stroke="#243027" strokeWidth="3" />
    </>
  ),
  phoenix: (
    <>
      <path d="M24 50V28M24 36l-8 10M24 32l8 12" stroke="#2f6f62" strokeWidth="4" strokeLinecap="round" />
      <circle cx="44" cy="40" r="10" fill="#e39b4a" />
    </>
  ),
  "san-diego": (
    <>
      <path d="M10 40c8-10 14-10 22 0s14 10 22 0 14-10 22 0" fill="none" stroke="#3d8ea8" strokeWidth="4" />
      <circle cx="46" cy="24" r="9" fill="#f3f0ea" stroke="#243027" strokeWidth="3" />
    </>
  ),
};

export function CityMark({ slug }: { slug: string }) {
  return (
    <svg className="mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="6" fill="#f4e7c8" />
      {marks[slug] ?? <circle cx="32" cy="32" r="12" fill="#e39b4a" />}
    </svg>
  );
}
