export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 48 48"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 8h34v7H17v7h20v7H17v11H7V8Z" fill="currentColor" />
      <path
        d="M37 15h4v25H30l7-8V15Z"
        fill="var(--blue)"
      />
      <path d="M17 22h20l-5 7H17v-7Z" fill="var(--blue)" />
    </svg>
  );
}
