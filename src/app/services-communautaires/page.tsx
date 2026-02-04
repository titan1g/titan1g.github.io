import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const services = [
  {
    title: "RIDE ALONG",
    description: "Le programme Ride Along permet aux citoyens de vivre une expérience unique en accompagnant nos adjoints lors de leurs patrouilles. Cette opportunité offre un aperçu direct du travail quotidien de nos agents.",
    icon: "car",
    href: "/services-communautaires/ride-along",
  },
  {
    title: "COMMUNAUTÉ LGBTQ+",
    description: "Le département du shérif s'engage à servir tous les membres de notre communauté avec dignité et respect. Notre bureau de liaison LGBTQ+ est dédié à répondre aux besoins spécifiques de cette communauté.",
    icon: "heart",
    href: "/services-communautaires/lgbtq",
  },
  {
    title: "PROGRAMMES JEUNESSE",
    description: "Nous proposons divers programmes pour les jeunes de notre communauté, visant à établir des relations positives et à offrir des opportunités de développement.",
    icon: "users",
    href: "#",
  },
  {
    title: "SENSIBILISATION COMMUNAUTAIRE",
    description: "Nos équipes de sensibilisation travaillent directement avec les communautés locales pour répondre à leurs préoccupations et renforcer les liens de confiance.",
    icon: "handshake",
    href: "#",
  },
];

export default function ServicesCommunautairesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        image="https://ext.same-assets.com/482647744/2409527174.png"
        title="SERVICES COMMUNAUTAIRES"
        subtitle="Au Service de Notre Communauté"
        height="h-[50vh] min-h-[400px]"
      />

      {/* Introduction */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#374127] text-2xl md:text-3xl font-bold mb-6">
            NOTRE ENGAGEMENT ENVERS LA COMMUNAUTÉ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le Département du shérif du comté de Los Santos est dédié à servir notre communauté au-delà
            de l'application de la loi traditionnelle. Nous offrons une variété de programmes et services
            conçus pour renforcer les liens avec nos résidents et créer un environnement plus sûr pour tous.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#f5f3ed] py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#3d8b40] transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#374127] font-bold text-xl mb-2 group-hover:text-[#3d8b40] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#4a5a3c] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#c9a227] text-2xl md:text-3xl font-bold mb-6">
            IMPLIQUEZ-VOUS
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8">
            Vous souhaitez vous impliquer dans votre communauté? Le département du shérif offre
            de nombreuses opportunités de bénévolat et de participation citoyenne.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a227] text-[#374127] font-bold py-3 px-8 rounded-lg hover:bg-[#d4af37] transition-colors"
          >
            NOUS CONTACTER
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
