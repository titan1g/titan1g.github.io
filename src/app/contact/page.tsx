import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const contactOptions = [
  {
    title: "NOUS CONTACTER - GÉNÉRAL",
    description: "Pour toute demande d'information générale concernant le département du shérif du comté de Los Santos.",
    href: "#",
  },
  {
    title: "REMPLIR UNE PLAINTE",
    description: "Déposer une plainte formelle concernant un agent ou un service du département.",
    href: "#",
  },
  {
    title: "REMPLIR UNE RECOMMANDATION",
    description: "Faire part d'une recommandation positive concernant un agent du département.",
    href: "#",
  },
  {
    title: "IDENTIFIER LE PERSONNEL",
    description: "Rechercher et identifier un membre du personnel du département.",
    href: "#",
  },
  {
    title: "FAIRE UN SIGNALEMENT",
    description: "Signaler un incident ou une situation nécessitant l'attention du département.",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Header Section */}
      <div className="bg-[#374127] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#c9a227] text-4xl md:text-5xl font-bold tracking-wider mb-6">
            NOUS CONTACTER
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Le Département du shérif du comté de Los Santos est à votre disposition pour répondre à vos questions et préoccupations.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {contactOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center gap-6 group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center group-hover:bg-[#3d8b40] transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#374127] font-bold text-xl mb-2 group-hover:text-[#3d8b40] transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#3d8b40] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#4a5a3c] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-[#3d8b40] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h3 className="text-[#c9a227] font-bold text-xl mb-2">TÉLÉPHONE</h3>
            <p className="text-gray-200">(213) 229-1700</p>
            <p className="text-gray-300 text-sm mt-2">Disponible 24h/24, 7j/7</p>
          </div>

          {/* Address */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-[#3d8b40] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="text-[#c9a227] font-bold text-xl mb-2">ADRESSE</h3>
            <p className="text-gray-200">211 W Temple St</p>
            <p className="text-gray-200">Los Santos, SA 90012</p>
          </div>

          {/* Emergency */}
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-[#c9a227] font-bold text-xl mb-2">URGENCE</h3>
            <p className="text-gray-200 text-2xl font-bold">911</p>
            <p className="text-gray-300 text-sm mt-2">En cas d'urgence uniquement</p>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#374127] text-2xl font-bold text-center mb-8">NOTRE EMPLACEMENT</h2>
          <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="font-semibold">Los Santos County Sheriff's Department</p>
              <p className="text-sm">211 W Temple St, Los Santos, SA 90012</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
