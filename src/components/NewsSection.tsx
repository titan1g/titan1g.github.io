import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="bg-[#f5f3ed] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#374127]">NEWS</h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* News Image */}
            <div className="md:w-2/5 relative">
              <img
                src="https://ext.same-assets.com/482647744/3469672251.png"
                alt="Sheriff's Statement"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

            {/* News Content */}
            <div className="md:w-3/5 p-6 md:p-8">
              <div className="text-sm text-gray-500 mb-2">DÉCEMBRE 27, 2025</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#374127] mb-4">
                Le Shérif Garland s'engage à une tolérance zéro à l'égard des gangs au sein du département
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hier, le Shérif William A. Garland a rencontré les dirigeants de l'Association des adjoints du shérif de Los Santos et de la Los Santos County Professional Peace Officers Association afin de débattre des rapport et recommandations émis par le conseiller spécial auprès de la Commission de Supervision Civile du comté.
              </p>
              <Link
                href="#"
                className="text-[#3d8b40] font-semibold hover:underline inline-flex items-center gap-1"
              >
                LIRE PLUS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
