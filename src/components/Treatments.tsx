import oil from "@/assets/oil.jpg";
import neck from "@/assets/neck.jpg";
import hotstone from "@/assets/hotstone.jpg";
import thai from "@/assets/thai.jpg";
import sport from "@/assets/sport.jpg";
import aroma from "@/assets/aroma.jpg";
import warmoil from "@/assets/warmoil.jpg";
import foot from "@/assets/foot.jpg";
import couple from "@/assets/couple.jpg";

const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

type Treatment = {
  name: string;
  image: string;
  alt: string;
  prices: { duration: string; price: string }[];
};

const treatments: Treatment[] = [
  {
    name: "Olie Massage",
    image: oil,
    alt: "Flaske med massageolie og hvide håndklæder",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "450 kr" },
      { duration: "90 min", price: "650 kr" },
      { duration: "120 min", price: "850 kr" },
    ],
  },
  {
    name: "Nakke & Skulder Massage",
    image: neck,
    alt: "Nakke- og skuldermassage",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "500 kr" },
      { duration: "90 min", price: "700 kr" },
    ],
  },
  {
    name: "Hot Stone Massage",
    image: hotstone,
    alt: "Hot stone behandling med varme sten",
    prices: [
      { duration: "30 min", price: "600 kr" },
      { duration: "60 min", price: "800 kr" },
    ],
  },
  {
    name: "Thai Oil Massage",
    image: thai,
    alt: "Traditionel thai oliemassage",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "500 kr" },
      { duration: "90 min", price: "700 kr" },
    ],
  },
  {
    name: "Sportsmassage",
    image: sport,
    alt: "Spa-stilleben med sten og håndklæder",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "500 kr" },
      { duration: "90 min", price: "700 kr" },
    ],
  },
  {
    name: "Aroma Massage",
    image: aroma,
    alt: "Aromaolier og lyserøde blomster",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "450 kr" },
      { duration: "90 min", price: "650 kr" },
      { duration: "120 min", price: "850 kr" },
    ],
  },
  {
    name: "Varm Olie Massage",
    image: warmoil,
    alt: "Varm olie i wellness-behandling",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "450 kr" },
      { duration: "90 min", price: "650 kr" },
      { duration: "120 min", price: "850 kr" },
    ],
  },
  {
    name: "Fodmassage",
    image: foot,
    alt: "Lotus-blomst i skål og hvide håndklæder",
    prices: [
      { duration: "30 min", price: "300 kr" },
      { duration: "60 min", price: "450 kr" },
      { duration: "90 min", price: "650 kr" },
    ],
  },
  {
    name: "Parmassage",
    image: couple,
    alt: "Parmassage i wellness-rum",
    prices: [
      { duration: "30 min", price: "500 kr" },
      { duration: "60 min", price: "850 kr" },
      { duration: "90 min", price: "1250 kr" },
      { duration: "120 min", price: "1550 kr" },
    ],
  },
];

export function Treatments() {
  return (
    <section id="behandlinger" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep mb-6">Behandlinger</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            En behandling for hver sans.
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed">
            Vælg mellem klassiske og signaturbehandlinger — alle udført med samme nærvær og kærlighed til håndværket.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="group bg-card rounded-sm overflow-hidden border border-border/60 hover:shadow-lift transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-rose-soft">
                <img
                  src={t.image}
                  alt={t.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl">{t.name}</h3>
                <div className="mt-5 h-px w-10 bg-rose-deep/60" />
                <ul className="mt-5 space-y-2.5">
                  {t.prices.map((p) => (
                    <li
                      key={p.duration}
                      className="flex items-baseline justify-between text-sm text-foreground/75"
                    >
                      <span className="tracking-wide">{p.duration}</span>
                      <span className="flex-1 mx-3 border-b border-dotted border-border" />
                      <span className="font-medium text-foreground">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-foreground text-background px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-foreground/85 transition-all hover:translate-y-[-2px]"
          >
            Book Nu
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-foreground/50">
            Online booking · Bekræftet med det samme
          </p>
        </div>
      </div>
    </section>
  );
}
