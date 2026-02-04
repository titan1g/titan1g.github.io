import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const divisions = [
  { title: "SHERIFF EN PLACE", href: "/votre-lssd/par-division/sheriff-en-place" },
  { title: "PATROL SERVICES", href: "/votre-lssd/par-division/patrol-services" },
  { title: "COURT SERVICES", href: "/votre-lssd/par-division/court-services" },
  { title: "CUSTODY SERVICES", href: "/votre-lssd/par-division/custody-services" },
  { title: "SPECIAL ENFORCEMENT BUREAU", href: "/votre-lssd/par-division/special-enforcement-bureau" },
  { title: "MAJOR CRIMES BUREAU", href: "/votre-lssd/par-division/major-crimes-bureau" },
  { title: "METRO DETAIL", href: "/votre-lssd/par-division/metro-detail" },
  { title: "AERO BUREAU", href: "/votre-lssd/par-division/aero-bureau" },
  { title: "TRAINING BUREAU", href: "/votre-lssd/par-division/training-bureau" },
  { title: "PARKS BUREAU", href: "/votre-lssd/par-division/parks-bureau" },
  { title: "CANINE SERVICES DETAIL", href: "/votre-lssd/par-division/canine-services-detail" },
  { title: "EMERGENCY SERVICES DETAIL", href: "/votre-lssd/par-division/emergency-services-detail" },
];

export default function VotreLssdPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        image="https://ext.same-assets.com/482647744/2194947571.png"
        title="VOTRE LSSD"
        subtitle="Département du Shérif du Comté de Los Santos"
        height="h-[50vh] min-h-[400px]"
      />

      {/* Introduction */}
      <section className="bg-[#4a5a3c] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#c9a227] text-2xl md:text-3xl font-bold mb-6">
            À PROPOS DU DÉPARTEMENT
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Le Département du shérif du comté de Los Santos est le plus grand département de shérif des États-Unis,
            avec près de 18 000 agents assermentés et membres du personnel professionnel. Notre mission est de
            protéger et servir les résidents du comté de Los Santos avec intégrité, respect et professionnalisme.
          </p>
        </div>
      </section>

      {/* Sheriff Section */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="https://ext.same-assets.com/482647744/2913120523.png"
              alt="Sheriff William A. Garland"
              className="w-48 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-[#374127] text-3xl font-bold mb-4">
              SHERIFF WILLIAM A. GARLAND
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le shérif William A. Garland est le 35e shérif du comté de Los Santos. Sous sa direction,
              le département maintient les plus hauts standards de service public et continue d'innover
              dans les méthodes de maintien de l'ordre pour mieux servir notre communauté.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-[#f5f3ed] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#374127] text-3xl font-bold text-center mb-10">
            NOS DIVISIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {divisions.map((division) => (
              <Link
                key={division.title}
                href={division.href}
                className="bg-[#4a5a3c] text-white p-4 rounded-lg text-center font-semibold hover:bg-[#3d8b40] transition-colors"
              >
                {division.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#374127] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#c9a227] text-3xl font-bold text-center mb-10">
            EN CHIFFRES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#c9a227] text-4xl md:text-5xl font-bold mb-2">18K+</div>
              <div className="text-gray-200 text-sm">Agents Assermentés</div>
            </div>
            <div className="text-center">
              <div className="text-[#c9a227] text-4xl md:text-5xl font-bold mb-2">23</div>
              <div className="text-gray-200 text-sm">Stations</div>
            </div>
            <div className="text-center">
              <div className="text-[#c9a227] text-4xl md:text-5xl font-bold mb-2">4M+</div>
              <div className="text-gray-200 text-sm">Résidents Servis</div>
            </div>
            <div className="text-center">
              <div className="text-[#c9a227] text-4xl md:text-5xl font-bold mb-2">175</div>
              <div className="text-gray-200 text-sm">Années de Service</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
