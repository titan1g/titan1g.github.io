import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function LGBTQPage() {
  return (
    <PageLayout>
      {/* Hero Section with full image */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.youtube.com/vi/DWq2eovHy_o/maxresdefault.jpg"
            alt="LGBTQ+ Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
      </section>

      {/* Title Section */}
      <div className="bg-[#4a5a3c] py-12 px-4">
        <h1 className="text-[#c9a227] text-3xl md:text-4xl font-bold text-center tracking-wider">
          COMMUNAUTÉ LGBTQ+
        </h1>
      </div>

      {/* Content Section */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Le Département du shérif du comté de Los Santos s'engage à servir l'ensemble des membres de la communauté avec dignité, respect et équité. Nous reconnaissons l'importance de créer des relations positives avec la communauté LGBTQ+ et de veiller à ce que tous les résidents se sentent protégés et respectés.
          </p>

          <p>
            Notre département a mis en place des politiques et des formations spécifiques pour garantir que nos agents comprennent et respectent les besoins uniques de la communauté LGBTQ+. Nous travaillons activement avec des organisations locales pour améliorer nos services et renforcer la confiance mutuelle.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 my-8">
            <h2 className="text-[#374127] text-2xl font-bold mb-4">
              Nos engagements
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#3d8b40] font-bold">✓</span>
                <span>Formation continue de nos agents sur les questions LGBTQ+</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3d8b40] font-bold">✓</span>
                <span>Collaboration avec les organisations communautaires LGBTQ+</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3d8b40] font-bold">✓</span>
                <span>Traitement équitable de toutes les plaintes et signalements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3d8b40] font-bold">✓</span>
                <span>Participation aux événements de la Pride et aux initiatives communautaires</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3d8b40] font-bold">✓</span>
                <span>Politique de tolérance zéro envers la discrimination</span>
              </li>
            </ul>
          </div>

          <p>
            Si vous êtes membre de la communauté LGBTQ+ et avez besoin d'assistance ou souhaitez signaler un incident, nous vous encourageons à nous contacter. Nos agents sont formés pour vous aider avec respect et professionnalisme.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#3d8b40] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl font-bold mb-6">
            BESOIN D'ASSISTANCE ?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question ou préoccupation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#374127] text-[#c9a227] font-bold py-3 px-8 rounded-lg hover:bg-[#2a3120] transition-colors"
          >
            NOUS CONTACTER
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#374127] text-3xl font-bold text-center mb-10">
            RESSOURCES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#4a5a3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-xl mb-3">Ligne d'assistance</h3>
              <p className="text-gray-600 mb-4">
                Ligne d'assistance disponible 24h/24 pour les membres de la communauté LGBTQ+.
              </p>
              <span className="text-[#3d8b40] font-semibold">(213) 229-1700</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#4a5a3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-xl mb-3">Liaison communautaire</h3>
              <p className="text-gray-600 mb-4">
                Agent de liaison dédié pour les questions concernant la communauté LGBTQ+.
              </p>
              <Link href="/contact" className="text-[#3d8b40] font-semibold hover:underline">
                Contacter
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#4a5a3c] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-xl mb-3">Formation et éducation</h3>
              <p className="text-gray-600 mb-4">
                Programmes de sensibilisation et de formation pour les organisations.
              </p>
              <Link href="#" className="text-[#3d8b40] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
