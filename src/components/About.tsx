import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-rose-soft">
      <div className="container-luxe grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 md:order-1">
          <img
            src={about}
            alt="Minimalistisk wellness-rum med orkidéer og stearinlys"
            width={1280}
            height={1024}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-soft"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep mb-6">Om Hamina</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Et roligt åndedrag i en travl hverdag.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed text-[15px]">
            <p>
              Hos Hamina inviterer vi dig til et øjebliks ro, velvære og fornyet energi.
            </p>
            <p>
              Uanset om du døjer med spændte muskler, en travl hverdag, stress eller blot
              ønsker at forkæle dig selv, skaber vi de perfekte rammer for afslapning og balance.
            </p>
            <p>
              Oplev professionel thaimassage og oliemassage udført med nærvær, omsorg og
              fokus på dit velvære.
            </p>
          </div>
          <div className="mt-10 h-px w-24 bg-rose-deep/40" />
        </div>
      </div>
    </section>
  );
}
