import logoAsset from "@/assets/hamina-logo.png.asset.json";

export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`} aria-label="Hamina Thai Massage">
      <img
        src={logoAsset.url}
        alt="Hamina Thai Massage"
        width={1500}
        height={1060}
        className={`h-12 md:h-14 w-auto ${variant === "light" ? "invert brightness-0" : ""}`}
      />
    </a>
  );
}
