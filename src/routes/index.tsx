import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { Reviews } from "@/components/Reviews";

import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamina Thai Massage · Wellness i Herning" },
      {
        name: "description",
        content:
          "Hamina Thai Massage i Herning tilbyder professionel thaimassage, oliemassage, hot stone og mere. Book et øjebliks ro, velvære og fornyet energi.",
      },
      { property: "og:title", content: "Hamina Thai Massage · Wellness i Herning" },
      {
        property: "og:description",
        content:
          "Et øjebliks ro, velvære og fornyet energi. Book professionel thai- og oliemassage hos Hamina i Herning.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Hamina Thai Massage",
          image: "/og-image.jpg",
          telephone: "+4581983533",
          email: "info@hamina.dk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vestergade 9",
            postalCode: "7400",
            addressLocality: "Herning",
            addressCountry: "DK",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "10:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "17:00",
            },
          ],
          url: "https://hamina.dk",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Reviews />
        
      </main>
      <Footer />
    </div>
  );
}
