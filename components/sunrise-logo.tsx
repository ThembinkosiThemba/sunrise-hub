// Sunrise Hub logo component
export function SunriseLogo({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sun circle */}
      <circle
        cx="50"
        cy="60"
        r="20"
        fill="currentColor"
        className="text-primary"
      />

      {/* Sun rays */}
      <path
        d="M50 25 L50 35 M70 40 L64 46 M85 60 L75 60 M70 80 L64 74 M30 40 L36 46 M15 60 L25 60 M30 80 L36 74"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary"
      />

      {/* Horizon line */}
      <path
        d="M10 80 Q50 70 90 80"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-accent"
      />
    </svg>
  );
}
