import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function CarrieresPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/482647744/1153353643.png"
            alt="LSSD Deputies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>
      </section>

      {/* Apply Button */}
      <div className="bg-[#f5f3ed] px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="#"
            className="block bg-[#2980b9] text-white text-center py-4 px-6 rounded font-bold text-lg tracking-wider hover:bg-[#1f6391] transition-colors"
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
            Le Département du shérif du comté de Los Santos recherche des candidats qualifiés souhaitant débuter une carrière dans le domaine diversifié de l'application de la loi en tant que Deputy Sheriff.Sur cette page, vous trouverez l'ensemble des ressources nécessaires pour entamer votre parcours et devenir membre du plus grand Département du shérif du pays.
          </p>
          <p>
            Ci-dessous, vous pourrez consulter les offres d'emploi actuellement disponibles, les avantages, les exigences requises, ainsi que des témoignages de Deputy Sheriffs en poste expliquant les raisons pour lesquelles ils ont rejoint le Département. Vous y trouverez également la possibilité de contacter directement un recruteur.Nous sommes ravis de l'intérêt que vous portez au Département du shérif du comté de Los Santos et vous souhaitons pleine réussite dans votre démarche.
          </p>
        </div>
      </section>

      {/* Career Cards Row 1 */}
      <section className="bg-[#f5f3ed] py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opportunités de carrières */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                OPPORTUNITÉS DE CARRIÈRES
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/l4rHjzE4pBC7U_lOp5pZkXSpMrWDtIN7.png"
                  alt="Opportunités de carrières"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Le Département du shérif du comté de Los Santos propose de nombreux postes vacants, incluant des fonctions d'application de la loi ainsi que des postes civils et professionnels. Cliquez ci-dessous pour consulter les offres d'emploi actuellement disponibles, destinées au grand public ainsi qu'aux employés en poste souhaitant une promotion.
              </p>
              <Link
                href="/recrutements/opportunites"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                VOIR LES CARRIÈRES
              </Link>
            </div>
          </div>

          {/* Salaires et avantages */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                SALAIRES ET AVANTAGES
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/XBiyTckeIep8FGdh9-UhanmB7b3ZDSxW.png"
                  alt="Salaires et avantages"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Les deux questions les plus fréquemment posées sont les suivantes : « Quel est le salaire d'un Deputy Sheriff dans le comté de Los Santos ? » et « Quels sont les avantages accordés à un Deputy Sheriff du LSSD ? ». Cliquez ci-dessous pour découvrir le salaire moyen de départ ainsi que les nombreux avantages dont bénéficie le LSSD.
              </p>
              <Link
                href="#"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                VOIR LES AVANTAGES ET SALAIRES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Cards Row 2 */}
      <section className="bg-[#f5f3ed] py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Modalités */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                MODALITÉS
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/b20CJVde9Iv-zUcWUJK-RukBI5L4UNmP.png"
                  alt="Modalités"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Certaines conditions sont requises pour intégrer le LSSD. Afin de faciliter votre démarche de candidature, il est recommandé de prendre connaissance de ces exigences au préalable. Si vous avez des questions concernant des critères spécifiques, vous pouvez contacter un recruteur à l'aide du bouton situé au bas de cette page, lequel pourra vous apporter des précisions adaptées à votre situation.
              </p>
              <Link
                href="#"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                QUELLES SONT LES MODALITÉS
              </Link>
            </div>
          </div>

          {/* L'Académie */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                L'ACADÉMIE
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/dqfozeO6JtTVt1e6oXJXZdh73LK-sQkc.png"
                  alt="L'Académie"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                L'Académie du LSSD est reconnue comme l'un des meilleurs centres de formation des forces de l'ordre au monde. Le programme de formation comprend un entraînement physique intensif, du conditionnement, des techniques de défense, du leadership, du droit pénal, des tactiques policières, la conduite opérationnelle de véhicules, la formation aux armes, ainsi que l'étude des politiques et procédures.
              </p>
              <Link
                href="#"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                L'ACADÉMIE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Cards Row 3 */}
      <section className="bg-[#f5f3ed] py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Réservistes */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                RÉSERVISTES
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/v4f8eV9ZoGEH1gp0K6QncEjYHlkOrZ2z.png"
                  alt="Réservistes"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Le Détachement des forces de réserve est composé de membres de la communauté qui offrent bénévolement leur temps et leur énergie afin d'assumer de nombreuses missions traditionnellement confiées aux Deputy Sheriffs à temps plein. Les Deputy Sheriffs de réserve sont soumis aux mêmes normes de recrutement que les adjoints titulaires et travaillent à leurs côtés pour soutenir l'ensemble des opérations du Département.
              </p>
              <Link
                href="/recrutements/reserve"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                RÉSERVISTES
              </Link>
            </div>
          </div>

          {/* Comment se préparer */}
          <div className="bg-[#4a5a3c] rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-[#c9a227] font-bold text-xl text-center mb-4">
                COMMENT SE PRÉPARER
              </h3>
              <div className="h-48 mb-4 rounded overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/3T32x2dVmYaYRWoKXICiOeD1RJQAZAv2.png"
                  alt="Comment se préparer"
                  className="w-full h-full object-none"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Il existe plusieurs mesures que vous pouvez prendre avant et pendant votre processus de candidature afin d'augmenter vos chances d'être admis au sein du Département du shérif du comté de Los Santos. Vous trouverez ici les exigences relatives aux épreuves physiques, des examens blancs, les formulaires de vérification des antécédents, ainsi que d'autres informations préparatoires utiles.
              </p>
              <Link
                href="#"
                className="block bg-[#2980b9] text-white text-center py-2 px-4 rounded font-semibold text-sm hover:bg-[#1f6391] transition-colors"
              >
                COMMENT SE PRÉPARER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helicopter Banner */}
      <section className="bg-[#f5f3ed] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/482647744/1945612774.png"
              alt="LSSD Helicopter"
              className="w-full h-auto"
            />
            <div className="bg-white p-6">
              <img
                src="https://ext.same-assets.com/482647744/3830858980.png"
                alt="Hometown Heroes Needed"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
