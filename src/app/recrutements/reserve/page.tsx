import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function ReservePage() {
  return (
    <PageLayout>
      {/* Hero Section with the group image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/482647744/2305044275.png"
            alt="LSSD Reserve Deputies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
      </section>

      {/* Title Section */}
      <div className="bg-[#4a5a3c] py-10 px-4">
        <h1 className="text-[#c9a227] text-3xl md:text-4xl font-bold text-center tracking-wider">
          DEVENIR RÉSERVISTE
        </h1>
      </div>

      {/* Main Content */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
          <p>
            Le Département du shérif du comté de Los Santos – Détachement des forces de réserve est composé de membres de la communauté qui offrent volontairement leur temps et leur énergie afin d'assumer de nombreuses missions traditionnellement confiées aux Deputy Sheriffs à temps plein. Nos Deputy Sheriffs Réservistes sont soumis aux mêmes normes de recrutement que les adjoints titulaires et travaillent à leurs côtés pour soutenir l'ensemble des opérations du Département.
          </p>

          <p>
            Les réservistes accomplissent une grande variété de missions à travers le comté, en complément des fonctions régulières de patrouille. Nos équipes de recherche et de sauvetage réalisent plus de 600 missions de sauvetage chaque année. Les membres de la Posse de réserve assurent des patrouilles dans les centres commerciaux pendant les périodes de fêtes et participent à de nombreux défilés. Des réservistes sont également affectés au Bureau aérien, à l'unité d'intervention moto tout-terrain, à l'équipe de plongée du Bureau des opérations spéciales, à l'unité Air Rescue 5, à l'unité cynophile (K-9), ainsi qu'à diverses fonctions d'enquête au sein du Département.
          </p>

          <p>
            Nous continuons de rechercher des membres qualifiés de la communauté répondant aux normes élevées requises pour intégrer notre programme de réserve. Le Département accueille également les réservistes déjà qualifiés souhaitant intégrer le programme par voie de mutation latérale.
          </p>

          <div className="pt-4">
            <h2 className="text-[#374127] text-2xl font-bold mb-4">
              Les avantages de devenir Deputy Sheriff Réserviste
            </h2>
            <p>
              Nos Deputy Sheriffs Réservistes ne se contentent pas d'un rôle passif. Ils consacrent activement leur temps et leurs compétences au service de leur communauté. Leur engagement est guidé par le désir de servir une cause juste et de contribuer à l'amélioration de leur environnement local.
            </p>
            <p className="mt-4 italic text-lg text-[#374127]">
              Ils incarnent pleinement la devise : « le service et le sacrifice avant soi-même ».
            </p>
          </div>

          <p>
            En tant que représentants efficaces des forces de l'ordre au sein de leurs quartiers, leur présence au sein du Département permet aux adjoints à temps plein de mieux comprendre l'ensemble des composantes de la population du comté. En raison de nos normes exigeantes, du processus de sélection rigoureux et de la qualité de la formation dispensée, nos Deputy Sheriffs Réservistes bénéficient d'un grand respect de la part des membres titulaires du Département.
          </p>

          <p>
            Plusieurs adjoints à temps plein ont exprimé le souhait de travailler aux côtés de réservistes spécifiques, établissant ainsi des relations professionnelles positives autour d'un objectif commun : le service à la communauté. De nombreux réservistes ont été distingués par les plus hautes récompenses du Département, notamment la Médaille de la Valeur, le Prix du service exemplaire et le Prix du service distingué.
          </p>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-[#3d8b40] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="#"
            className="inline-block bg-[#374127] text-[#c9a227] font-bold text-xl py-4 px-12 rounded-lg hover:bg-[#2a3120] transition-colors tracking-wider"
          >
            POSTULER MAINTENANT
          </Link>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#374127] text-3xl font-bold text-center mb-10">
            CONDITIONS REQUISES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Âge minimum</h3>
              <p className="text-gray-600">21 ans au moment de la candidature</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Casier judiciaire</h3>
              <p className="text-gray-600">Aucune condamnation pour crime</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Éducation</h3>
              <p className="text-gray-600">Diplôme d'études secondaires ou équivalent</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Citoyenneté</h3>
              <p className="text-gray-600">Citoyen des États-Unis ou résident permanent</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Condition physique</h3>
              <p className="text-gray-600">Bonne santé physique et mentale</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-[#4a5a3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#374127] font-bold text-lg mb-2">Disponibilité</h3>
              <p className="text-gray-600">Minimum 16 heures par mois</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
