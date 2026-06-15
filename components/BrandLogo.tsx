import Image from "next/image";

const logoSrc =
  "https://static.wixstatic.com/media/d4a37c_f91e8f1414494731bdda3f31184b2d7d~mv2.jpg/v1/fill/w_386,h_110,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d4a37c_f91e8f1414494731bdda3f31184b2d7d~mv2.jpg";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const classes = ["brand-logo", className].filter(Boolean).join(" ");

  return (
    <span className={classes}>
      <Image
        className="brand-wordmark"
        src={logoSrc}
        alt="Finetec Engineering"
        width={386}
        height={110}
        priority={priority}
      />
    </span>
  );
}
