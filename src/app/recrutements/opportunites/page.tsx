import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const careerPositions = [
  {
    title: "DEPUTY SHERIFF - PATROL SERVICES",
    description: "Le Deputy Sheriff affecté aux Patrol Services constitue la première ligne d'intervention du Los Santos Sheriff's Department. Il est chargé d'assurer la sécurité publique à travers des patrouilles préventives et réactives sur l'ensemble du territoire du comté. Ses missions incluent la réponse aux appels d'urgence, l'application des lois et règlements, la gestion des incidents de circulation, l'intervention lors de crimes en cours ainsi que l'assistance aux citoyens. Par sa présence visible et son engagement quotidien, le Deputy Sheriff contribue directement à la prévention de la criminalité et au maintien de l'ordre public.",
    image: "https://ext.same-assets.com/482647744/1262809642.png",
    imagePosition: "left",
  },
  {
    title: "COMMAND PILOT - AERO BUREAU",
    description: "Le Command Pilot de l'Aero Bureau est responsable de la conduite et de la gestion opérationnelle des aéronefs du Los Santos Sheriff's Department. Il assure des missions de soutien aérien essentielles, incluant la surveillance, les poursuites, la recherche de suspects, les opérations de recherche et sauvetage ainsi que l'appui aux interventions tactiques. En tant que pilote commandant de bord, il garantit la sécurité de l'équipage, des équipements et des opérations aériennes, tout en maintenant un haut niveau de précision et de coordination avec les unités au sol.",
    image: "https://ext.same-assets.com/482647744/3750290669.png",
    imagePosition: "right",
    bgColor: "bg-[#4a5a3c]",
    textColor: "text-white",
    titleColor: "text-[#c9a227]",
  },
  {
    title: "DEPUTY SHERIFF DETECTIVE",
    description: "Le Deputy Sheriff Detective est chargé de conduire des enquêtes criminelles approfondies sur des affaires complexes impliquant des crimes majeurs, des délits graves et des activités criminelles organisées. Il collecte, analyse et exploite les preuves physiques, numériques et testimoniales, mène des interrogatoires, rédige des dossiers d'enquête et travaille en étroite collaboration avec les procureurs afin de constituer des affaires solides. Ce poste requiert une expertise avancée en techniques d'investigation, une grande rigueur méthodologique et une capacité à traiter des dossiers sensibles avec discrétion et professionnalisme.",
    image: "https://ext.same-assets.com/482647744/4194316073.png",
    imagePosition: "left",
  },
  {
    title: "TACTICAL DEPUTY - SPECIAL ENFORCEMENT",
    description: "Le Tactical Deputy affecté au Special Enforcement Bureau intervient lors de situations à haut risque dépassant les capacités des opérations conventionnelles. Il est déployé pour gérer des incidents critiques tels que les prises d'otages, les suspects armés et barricadés, les tireurs actifs et l'exécution de mandats à très haut risque. Ce poste requiert une formation tactique intensive, une discipline exemplaire et une parfaite maîtrise des techniques d'intervention, des armes spécialisées et du travail en équipe.",
    image: "https://ext.same-assets.com/482647744/3727443550.png",
    imagePosition: "right",
    bgColor: "bg-[#4a5a3c]",
    textColor: "text-white",
    titleColor: "text-[#c9a227]",
  },
];

export default function OpportunitesCarrieresPage() {
  return (
    <PageLayout>
      {/* Title Section */}
      <div className="bg-[#4a5a3c] py-16 px-4">
        <h1 className="text-[#c9a227] text-3xl md:text-4xl font-bold text-center tracking-wider">
          CARRIÈRES AU LSSD
        </h1>
      </div>

      {/* Career Positions */}
      {careerPositions.map((position, index) => (
        <section
          key={position.title}
          className={`py-12 px-4 ${position.bgColor || "bg-[#f5f3ed]"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${position.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}>
              {/* Image */}
              <div className="md:w-2/5 flex-shrink-0">
                <img
                  src={position.image}
                  alt={position.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5">
                <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${position.titleColor || "text-[#374127]"}`}>
                  {position.title}
                </h2>
                <p className={`leading-relaxed ${position.textColor || "text-gray-700"}`}>
                  {position.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Apply CTA */}
      <section className="bg-[#3d8b40] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            PRÊT À REJOINDRE NOTRE ÉQUIPE ?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Si vous êtes motivé par le service à la communauté et que vous souhaitez faire une différence,
            nous vous invitons à postuler pour l'un de nos postes disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/carrieres"
              className="inline-block bg-[#374127] text-[#c9a227] font-bold py-3 px-8 rounded-lg hover:bg-[#2a3120] transition-colors"
            >
              VOIR TOUTES LES CARRIÈRES
            </Link>
            <Link
              href="/recrutements/reserve"
              className="inline-block bg-[#c9a227] text-[#374127] font-bold py-3 px-8 rounded-lg hover:bg-[#d4af37] transition-colors"
            >
              DEVENIR RÉSERVISTE
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#374127] text-3xl font-bold text-center mb-10">
            AUTRES OPPORTUNITÉS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-[#374127] font-bold text-xl mb-3">Postes Civils</h3>
              <p className="text-gray-600 mb-4">
                Le département emploie également du personnel civil dans divers domaines administratifs et techniques.
              </p>
              <Link href="#" className="text-[#3d8b40] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-[#374127] font-bold text-xl mb-3">Stages</h3>
              <p className="text-gray-600 mb-4">
                Programmes de stages pour étudiants intéressés par une carrière dans l'application de la loi.
              </p>
              <Link href="#" className="text-[#3d8b40] font-semibold hover:underline">
                En savoir plus
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-[#374127] font-bold text-xl mb-3">Bénévolat</h3>
              <p className="text-gray-600 mb-4">
                Opportunités de bénévolat pour ceux qui souhaitent contribuer à la sécurité de leur communauté.
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
