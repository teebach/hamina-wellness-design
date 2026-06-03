import { Logo } from "./Logo";

const MAP_SRC =
  "https://www.google.com/maps?q=Vestergade+9,+7400+Herning,+Denmark&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Vestergade+9%2C+7400+Herning%2C+Denmark";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-foreground text-background">
      <div className="container-luxe py-20 md:py-28 grid md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-display text-2xl tracking-wide">Hamina</span>
          </div>
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
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#top" className="text-background/85 hover:text-background">Forside</a></li>
            <li><a href="#about" className="text-background/85 hover:text-background">Om os</a></li>
            <li><a href="#behandlinger" className="text-background/85 hover:text-background">Behandlinger</a></li>
            <li><a href="#kontakt" className="text-background/85 hover:text-background">Kontakt</a></li>
          </ul>
          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mt-10 mb-6">Åbningstider</h3>
          <ul className="space-y-2 text-sm text-background/80">
            <li className="flex justify-between gap-6"><span>Man – Fre</span><span>10–19</span></li>
            <li className="flex justify-between gap-6"><span>Lørdag</span><span>10–17</span></li>
            <li className="flex justify-between gap-6"><span>Søndag</span><span>Lukket</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6">Find os</h3>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/3] overflow-hidden rounded-sm border border-background/15 group"
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
            className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-background/85 hover:text-background border-b border-background/40 pb-1"
          >
            Åbn i Google Maps →
          </a>
          <div className="hidden">{/* keep Logo import used */}<Logo /></div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/55">
          <p>© {new Date().getFullYear()} Hamina Thai Massage. Alle rettigheder forbeholdes.</p>
          <p>Vestergade 9 · 7400 Herning</p>
        </div>
      </div>
    </footer>
  );
}
