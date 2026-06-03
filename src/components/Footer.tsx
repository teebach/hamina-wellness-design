import { Logo } from "./Logo";

const MAP_SRC =
  "https://www.google.com/maps?q=Vestergade+9,+7400+Herning,+Denmark&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Vestergade+9%2C+7400+Herning%2C+Denmark";

const hours = [
  { day: "Mandag – Fredag", time: "10 – 19" },
  { day: "Lørdag", time: "10 – 17" },
  { day: "Søndag", time: "Lukket" },
];

export function Footer() {
  return (
    <footer id="kontakt" className="bg-foreground text-background">
      <div className="container-luxe py-20 md:py-28 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-4">
          <Logo variant="light" size="footer" className="mb-8 -ml-2" />
          <p className="text-background/65 text-sm leading-relaxed max-w-xs">
            Thaimassage og oliemassage i hjertet af Herning. Et øjeblik for dig selv.
          </p>
          <div className="mt-8 space-y-2 text-sm text-background/80">
            <p>Vestergade 9, 7400 Herning</p>
            <p>
              <a href="tel:+4581983533" className="hover:text-background transition-colors">
                +45 81 98 35 33
              </a>
            </p>
            <p>
              <a href="mailto:info@hamina.dk" className="hover:text-background transition-colors">
                info@hamina.dk
              </a>
            </p>
            <p className="text-background/55 pt-2">CVR 46473248</p>
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#top" className="text-background/85 hover:text-background">Forside</a></li>
            <li><a href="#about" className="text-background/85 hover:text-background">Om os</a></li>
            <li><a href="#behandlinger" className="text-background/85 hover:text-background">Behandlinger</a></li>
            <li><a href="#kontakt" className="text-background/85 hover:text-background">Kontakt</a></li>
          </ul>

          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mt-12 mb-6">Åbningstider</h3>
          <ul className="divide-y divide-background/10 border-y border-background/10">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-baseline justify-between py-3 text-sm"
              >
                <span className="text-background/70 tracking-wide">{h.day}</span>
                <span className="font-display text-base md:text-lg text-background">
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">Find os</h3>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[5/3] max-w-sm overflow-hidden rounded-sm border border-background/15 group"
            aria-label="Åbn placering i Google Maps"
          >
            <iframe
              title="Hamina Thai Massage placering"
              src={MAP_SRC}
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-background/85 hover:text-background border-b border-background/40 pb-1"
          >
            Åbn i Google Maps →
          </a>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Hamina Thai Massage · CVR 46473248</p>
          <p>Vestergade 9 · 7400 Herning</p>
        </div>
      </div>
    </footer>
  );
}
