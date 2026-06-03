import logoAsset from "@/assets/hamina-logo.png.asset.json";

export function Logo({
  className = "",
  variant = "dark",
  size = "header",
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: "header" | "footer";
}) {
  const sizeClasses =
    size === "footer" ? "h-24 md:h-28 w-auto" : "h-16 md:h-20 w-auto";
  return (
    <a href="#top" className={`inline-flex items-center ${className}`} aria-label="Hamina Thai Massage">
      <img
        src={logoAsset.url}
        alt="Hamina Thai Massage"
        width={1500}
        height={1060}
        className={`${sizeClasses} ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}
