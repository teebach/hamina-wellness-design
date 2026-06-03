import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="Hamina Thai Massage">
      <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
      <span className="font-display text-xl tracking-wide">Hamina</span>
    </a>
  );
}
