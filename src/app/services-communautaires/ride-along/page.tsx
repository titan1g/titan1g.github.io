import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function RideAlongPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/482647744/2827199777.png"
            alt="LSSD Patrol Vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>
      </section>

      {/* Title Section */}
      <div className="bg-[#4a5a3c] py-10 px-4">
        <h1 className="text-[#c9a227] text-3xl md:text-4xl font-bold text-center tracking-wider">
          PROGRAMME RIDE-ALONG
        </h1>
      </div>

      {/* Main Content */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Le programme Ride-Along offre au public l'opportunité d'accompagner des adjoints pendant l'exercice de leurs fonctions. Ce programme vise à améliorer la compréhension du travail des forces de l'ordre par les citoyens.
          </p>

          <p>
            Si vous souhaitez participer au programme, veuillez remplir le formulaire en ligne ci-dessous.
          </p>

          <p>
            Vous serez contacté par le personnel du poste une fois une vérification des antécédents effectuée avec succès, afin de planifier votre patrouille. Merci de noter que les règles suivantes sont en place pour garantir l'intégrité et la qualité de cette expérience. En soumettant votre candidature, vous acceptez les conditions suivantes :
          </p>

          <ul className="space-y-4 list-none">
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>Tous les observateurs devront signer une décharge de responsabilité. Les observateurs de moins de 18 ans doivent être accompagnés d'un parent ou tuteur légal pour signer la décharge en présence d'un employé du département du shérif du comté de Los Santos. Ce document sera signé le jour de la Ride Along.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>Les observateurs doivent porter une tenue appropriée. Sont acceptés : costumes, vestes, pulls, chemises, chemisiers, pantalons habillés. Ne sont pas autorisés : sandales, shorts, jupes, débardeurs, t-shirts ou jeans. Prévoyez une tenue adaptée aux intempéries. Le Ride Along peut être annulé en cas de tenue inappropriée par le Watch Commander.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>L'observateur devra porter en tout temps une carte d'identification fournie par le département du shérif du comté de Los Santos, visible sur le vêtement extérieurs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>Les questions sur les procédures sont les bienvenues, à condition qu'elles soient posées au moment approprié. L'observateur ne doit jamais gêner ou interrompre le travail du/de l'adjoint(e).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>Les repas ne sont pas pris en charge. Chaque observateur est responsable de ses frais personnels.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>L'observateur devra obtenir l'autorisation du/de l'adjoint(e) avant de parler à un prisonnier, suspect, témoin ou toute autre personne rencontrée dans le cadre d'une mission. L'observateur ne doit pas participer aux activités policières, sauf demande expresse du/de l'adjoint(e).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>L'observateur peut mettre fin à son accompagnement à tout moment en en informant simplement le/l'adjoint(e).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#4a5a3c] font-bold">■</span>
              <span>Si l'agent estime que le comportement de l'observateur gêne l'exécution de ses fonctions, il/elle est autorisé(e) à interrompre la Ride Along et à ramener l'observateur au poste.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-[#f5f3ed] pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="#"
            className="block bg-[#2980b9] text-white text-center py-4 px-6 rounded font-bold text-lg tracking-wider hover:bg-[#1f6391] transition-colors"
          >
            POSTULER MAINTENANT
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
