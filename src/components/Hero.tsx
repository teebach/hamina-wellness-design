import hero from "@/assets/hero.jpg";

const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Rolig spa-atmosfære hos Hamina Thai Massage"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
      <div className="absolute inset-0 bg-rose/10 mix-blend-multiply" />

      <div className="container-luxe relative z-10 pt-32 pb-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground/85 transition-all hover:translate-y-[-2px]"
            >
              Book nu
            </a>
            <a
              href="#behandlinger"
              className="inline-flex items-center border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
            >
              Se behandlinger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
