import heroAsset from "@/assets/hamina-hero.png.asset.json";
const hero = heroAsset.url;

const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] md:min-h-screen flex items-end md:items-center overflow-hidden bg-foreground md:bg-background">
      <img
        src={hero}
        alt="Rolig spa-atmosfære hos Hamina Thai Massage"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 md:from-background/30 md:via-background/10 md:to-background/80" />
      <div className="absolute inset-0 bg-rose/5 md:bg-rose/10 mix-blend-multiply" />

      <div className="container-luxe relative z-10 pt-32 pb-8 md:pb-20 w-full">
        <div className="max-w-2xl animate-fade-up">
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
