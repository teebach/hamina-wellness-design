const TRUSTPILOT_URL = "https://dk.trustpilot.com/review/hamina.dk";

const reviews = [
  {
    text: "Fantastisk behandling og en utrolig rolig atmosfære. Jeg gik derfra som et nyt menneske.",
    name: "Mette L.",
  },
  {
    text: "Den bedste thaimassage i Herning. Dygtige, nærværende og varme hænder.",
    name: "Jonas K.",
  },
  {
    text: "Et helle midt i hverdagen. Stedet er smukt, og behandlingen var præcis det, jeg havde brug for.",
    name: "Sara N.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 ud af 5 stjerner">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-rose-deep">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-28 md:py-40 bg-rose-soft">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep mb-6">Anmeldelser</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Det siger vores kunder.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-background p-8 md:p-10 rounded-sm border border-border/60 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-6 font-display text-xl md:text-2xl leading-snug text-foreground/90 italic">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-8 text-xs uppercase tracking-[0.2em] text-foreground/60">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-foreground text-foreground px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
            </svg>
            Læs på Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
