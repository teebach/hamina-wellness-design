import { useEffect, useState } from "react";


const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl md:text-3xl tracking-wide"
          style={{ color: "#F6D6DE" }}
          aria-label="Hamina Thai Massage"
        >
          Hamina Thai Massage
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <a href="#behandlinger" className="text-foreground/80 hover:text-foreground transition-colors">
            Behandlinger
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            Om os
          </a>
          <a href="#kontakt" className="text-foreground/80 hover:text-foreground transition-colors">
            Kontakt
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-foreground/85 transition-colors"
          >
            Book Nu
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2"
        >
          <span className="block w-6 h-px bg-foreground mb-1.5"></span>
          <span className="block w-6 h-px bg-foreground mb-1.5"></span>
          <span className="block w-4 h-px bg-foreground ml-auto"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border mt-3">
          <nav className="container-luxe flex flex-col py-6 gap-5 text-sm">
            <a href="#behandlinger" onClick={() => setOpen(false)}>Behandlinger</a>
            <a href="#about" onClick={() => setOpen(false)}>Om os</a>
            <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Book Nu
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
