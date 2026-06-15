import { BrandMark } from "@/components/BrandMark";

export function BrandLogo({ className = "" }: { className?: string }) {
  const classes = ["brand-logo", className].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <BrandMark className="brand-logo-mark" />
      <span className="brand-logo-text">
        <span className="brand-logo-name">
          Fine<span className="brand-logo-accent">tec</span>
        </span>
        <span className="brand-logo-subtitle">Engineering</span>
      </span>
    </span>
  );
}
