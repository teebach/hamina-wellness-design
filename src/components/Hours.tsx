const hours = [
  { day: "Mandag – Fredag", time: "10:00 – 19:00" },
  { day: "Lørdag", time: "10:00 – 17:00" },
  { day: "Søndag", time: "Lukket" },
];

const BOOKING_URL = "https://hamina-thai-massage.planway.com/";

export function Hours() {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-luxe max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-rose-deep mb-6">Åbningstider</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          Find tid til dig selv.
        </h2>
        <div className="mt-12 space-y-5">
          {hours.map((h) => (
            <div
              key={h.day}
              className="flex items-baseline justify-between border-b border-border pb-4 text-base md:text-lg"
            >
              <span className="text-foreground/75">{h.day}</span>
              <span className="font-display text-xl md:text-2xl">{h.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-foreground text-background px-10 py-4 text-xs uppercase tracking-[0.22em] hover:bg-foreground/85 transition-all"
          >
            Book din tid
          </a>
        </div>
      </div>
    </section>
  );
}
