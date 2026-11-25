import { useId } from "react";

export function EarthArt({ size = 160 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <circle cx="100" cy="100" r="87" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="97" fill="#b9e9eb" opacity=".13" />
      <circle cx="100" cy="100" r="87" fill="#83c9e9" />
      <g clipPath={`url(#${id})`} fill="#79b891">
        <path d="M18 38l28-20 24 13 18-7 18 20-10 21-23 8-1 17-20 4-10-18-20-8z" />
        <path d="M64 96l24 0 20 18-7 25-16 29-10-20-2-23-14-16z" />
        <path d="M129 25l30 9 39 37-27 13-21-5-13 12-10-11-17-8 8-21z" />
        <path d="M133 97l25 7 8 19-22 18-17-10-6-22zM158 151l25-4 10 18-32 8z" />
      </g>
      <g
        fill="none"
        stroke="#ecf6f6"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".75"
      >
        <path d="M41 48q15-10 29-4M107 155q14 7 28 1M143 65q12-3 23 1" />
      </g>
      <path
        d="M130 20a87 87 0 0 1-34 167c54-31 56-110 34-167"
        fill="#253463"
        opacity=".14"
      />
    </svg>
  );
}

export function MoonArt({ size = 94 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="#e9e6da" />
      <g fill="#bab9b9" opacity=".5">
        <circle cx="35" cy="30" r="9" />
        <circle cx="66" cy="43" r="12" />
        <circle cx="41" cy="67" r="11" />
        <circle cx="68" cy="70" r="5" />
      </g>
      <path
        d="M66 11a42 42 0 0 1-13 81c27-15 30-57 13-81"
        fill="#72778f"
        opacity=".2"
      />
    </svg>
  );
}

export function SunArt({ size = 128 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="55" fill="#f8d277" opacity=".12" />
      {Array.from({ length: 12 }, (_, i) => (
        <path
          key={i}
          d="M60 7v9"
          transform={`rotate(${i * 30} 60 60)`}
          stroke="#edc162"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      <circle cx="60" cy="60" r="34" fill="#f8d277" />
      <circle cx="52" cy="49" r="14" fill="#ffe7a1" opacity=".6" />
    </svg>
  );
}

export function RocketArt() {
  return (
    <svg viewBox="0 0 100 140" width="64" height="90" aria-hidden="true">
      <path d="M30 78L13 112l24-10M70 78l17 34-24-10" fill="#df8a77" />
      <path d="M50 6C24 32 26 66 32 104h36C74 66 76 32 50 6" fill="#f6edd9" />
      <path d="M50 6C40 17 35 28 32 39h36C65 28 60 17 50 6" fill="#df8a77" />
      <circle
        cx="50"
        cy="60"
        r="13"
        fill="#83c9e9"
        stroke="#28395a"
        strokeWidth="5"
      />
      <path d="M39 112q11 33 22 0" fill="#f8d277" />
    </svg>
  );
}
