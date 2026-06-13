import heroAsset from "@/assets/hamina-hero.png.asset.json";
const hero = heroAsset.url;

const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary md:min-h-screen md:flex md:items-center md:bg-background">
      <img
        src={hero}
        alt="Rolig spa-atmosfære hos Hamina Thai Massage"
        width={1920}
        height={1280}
        className="block w-full pt-20 md:hidden"
      />
      <img
        src={hero}
        alt="Rolig spa-atmosfære hos Hamina Thai Massage"
        width={1920}
        height={1280}
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="container-luxe relative z-10 pt-16 pb-8 md:pt-32 md:pb-20 w-full">
        <div className="max-w-2xl animate-fade-up md:mt-0 mt-8">
          <h1 className="sr-only">Hamina Thai Massage — Thaimassage og wellness i Herning</h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground/85 transition-all hover:translate-y-[-2px]"
            >
              Book nu
            </a>
            <a
              href="#behandlinger"
              className="inline-flex items-center justify-center border border-foreground/40 bg-background/70 backdrop-blur-sm text-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
            >
              Se behandlinger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
