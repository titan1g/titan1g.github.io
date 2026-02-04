import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const careerCards = [
  {
    title: "OPPORTUNITÉS DE CARRIÈRES",
    description: "Le Département du shérif du comté de Los Santos propose de nombreux postes vacants, incluant des fonctions d'application de la loi ainsi que des postes civils et professionnels. Cliquez ci-dessous pour consulter les offres d'emploi actuellement disponibles, destinées au grand public ainsi qu'aux employés en poste souhaitant une promotion.",
    buttonText: "VOIR LES CARRIÈRES",
    href: "#",
    image: "https://ext.same-assets.com/482647744/2409527174.png",
  },
  {
    title: "SALAIRES ET AVANTAGES",
    description: "Les deux questions les plus fréquemment posées sont les suivantes : « Quel est le salaire d'un Deputy Sheriff dans le comté de Los Santos ? » et « Quels sont les avantages accordés à un Deputy Sheriff du LSSD ? ». Cliquez ci-dessous pour découvrir le salaire moyen de départ ainsi que les nombreux avantages dont bénéficie le LSSD.",
    buttonText: "VOIR LES AVANTAGES ET SALAIRES",
    href: "#",
    image: "https://ext.same-assets.com/482647744/2194947571.png",
  },
  {
    title: "MODALITÉS",
    description: "Certaines conditions sont requises pour intégrer le LSSD. Afin de faciliter votre démarche de candidature, il est recommandé de prendre connaissance de ces exigences au préalable. Si vous avez des questions concernant des critères spécifiques, vous pouvez contacter un recruteur à l'aide du bouton situé au bas de cette page, lequel pourra vous apporter des précisions adaptées à votre situation.",
    buttonText: "QUELLES SONT LES MODALITÉS",
    href: "#",
    image: "https://i.ytimg.com/vi/n9DfcvA1pYg/hq720.jpg",
  },
  {
    title: "L'ACADÉMIE",
    description: "L'Académie du LSSD est reconnue comme l'un des meilleurs centres de formation des forces de l'ordre au monde. Le programme de formation comprend un entraînement physique intensif, du conditionnement, des techniques de défense, du leadership, du droit pénal, des tactiques policières, la conduite opérationnelle de véhicules, la formation aux armes, ainsi que l'étude des politiques et procédures.",
    buttonText: "L'ACADÉMIE",
    href: "#",
    image: "https://i.ytimg.com/vi/axsuJwP1At8/hq720.jpg",
  },
  {
    title: "RÉSERVISTES",
    description: "Le Détachement des forces de réserve est composé de membres de la communauté qui offrent bénévolement leur temps et leur énergie afin d'assumer de nombreuses missions traditionnellement confiées aux Deputy Sheriffs à temps plein. Les Deputy Sheriffs de réserve sont soumis aux mêmes normes de recrutement que les adjoints titulaires et travaillent à leurs côtés pour soutenir l'ensemble des opérations du Département.",
    buttonText: "RÉSERVISTES",
    href: "#",
    image: "https://img.gta5-mods.com/q75/images/fictional-blaine-county-sheriff-s-office-liveries/286041-Screenshot_1.png",
  },
  {
    title: "COMMENT SE PRÉPARER",
    description: "Il existe plusieurs mesures que vous pouvez prendre avant et pendant votre processus de candidature afin d'augmenter vos chances d'être admis au sein du Département du shérif du comté de Los Santos. Vous trouverez ici les exigences relatives aux épreuves physiques, des examens blancs, les formulaires de vérification des antécédents, ainsi que d'autres informations préparatoires utiles.",
    buttonText: "COMMENT SE PRÉPARER",
    href: "#",
    image: "https://images.steamusercontent.com/ugc/1294171509050105411/D8222D155397E35E80BD6F02F9118A097D2F0699/",
  },
];

export default function CarrieresPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        image="https://ext.same-assets.com/482647744/2409527174.png"
        height="h-[60vh] min-h-[500px]"
      />

      {/* Apply Button */}
      <div className="bg-[#f5f3ed] px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="#"
            className="block bg-[#3d8b40] text-[#c9a227] text-center py-4 px-6 rounded font-bold text-lg tracking-wider hover:bg-[#2d6b30] transition-colors"
          >
            POSTULER MAINTENANT
          </Link>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-[#4a5a3c] py-8 px-4">
        <h1 className="text-[#c9a227] text-3xl md:text-4xl font-bold text-center tracking-wider">
          CARRIÈRES AU LSSD
        </h1>
      </div>

      {/* Description */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            Le Département du shérif du comté de Los Santos recherche des candidats qualifiés souhaitant débuter une carrière dans le domaine diversifié de l'application de la loi en tant que Deputy Sheriff. Sur cette page, vous trouverez l'ensemble des ressources nécessaires pour entamer votre parcours et devenir membre du plus grand Département du shérif du pays.
          </p>
          <p>
            Ci-dessous, vous pourrez consulter les offres d'emploi actuellement disponibles, les avantages, les exigences requises, ainsi que des témoignages de Deputy Sheriffs en poste expliquant les raisons pour lesquelles ils ont rejoint le Département. Vous y trouverez également la possibilité de contacter directement un recruteur. Nous sommes ravis de l'intérêt que vous portez au Département du shérif du comté de Los Santos et vous souhaitons pleine réussite dans votre démarche.
          </p>
        </div>
      </section>

      {/* Career Cards */}
      <section className="bg-[#f5f3ed] py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-4">
                <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                  {card.title}
                </h3>
                <div className="h-40 mb-4 rounded overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Helicopter Banner */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#374127] rounded-lg overflow-hidden">
            <div className="h-64 relative">
              <img
                src="https://ext.same-assets.com/482647744/2194947571.png"
                alt="LSSD Helicopter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-6 flex items-center justify-center gap-4">
              <img
                src="https://static.wikia.nocookie.net/onx/images/a/a3/Lssd-badge.png/revision/latest?cb=20240315123901"
                alt="LSSD Badge"
                className="w-16 h-16 object-contain"
              />
              <div>
                <span className="text-[#374127] font-bold text-2xl">HOMETOWN</span>
                <span className="text-[#c9a227] font-bold text-2xl">HEROES</span>
                <span className="text-[#374127] font-bold text-2xl">NEEDED.</span>
                <div className="text-[#374127] font-bold text-xl">ARE YOU IN?</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
