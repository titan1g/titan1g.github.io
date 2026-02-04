import Link from "next/link";

export default function SocialSection() {
  return (
    <section className="bg-[#3d8b40] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Instagram Card */}
        <div className="bg-[#f5f3ed] rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-6">INSTAGRAM</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://ext.same-assets.com/482647744/2345721791.png"
                  alt="LSSDHQ"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="font-semibold">LSSDHQ</span>
              <span className="text-gray-500 text-sm ml-2">5,645</span>
            </div>
          </div>

          {/* Instagram Post */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://ext.same-assets.com/482647744/2513686914.png"
              alt="LSSD Instagram Post"
              className="w-full h-auto"
            />
          </div>

          <Link
            href="#"
            className="flex items-center justify-center gap-2 mt-4 bg-gray-800 text-white py-2 px-4 rounded-full mx-auto w-fit hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Suivre sur Instagram
          </Link>
        </div>

        {/* X.COM Card */}
        <div className="bg-[#f5f3ed] rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-6">X.COM</h3>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://ext.same-assets.com/482647744/2345721791.png"
              alt="LS County Sheriffs"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">LS County Sheriffs</span>
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                </svg>
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Follow</span>
              </div>
              <div className="text-xs text-gray-500">31,777 posts - 254,888 followers</div>
            </div>
          </div>

          {/* Tweets */}
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r">
              <div className="text-xs text-gray-500 mb-1">30m</div>
              <p className="text-sm">
                Le <span className="text-blue-600">#LSSD</span> demande l'aide du public pour retrouver une personne dangereuse et recherchée, à <span className="text-blue-600">#SandyShores</span>.
              </p>
              <Link href="#" className="text-blue-500 text-sm hover:underline block mt-1">
                https://local.nixle.com/alert/12059307
              </Link>
            </div>

            <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r">
              <div className="text-xs text-gray-500 mb-1">18h</div>
              <p className="text-sm text-gray-700">
                Alors que l'année touche à sa fin, le département du shérif du comté de Los Santos souhaite vous remercier tous pour la confiance et le soutien que vous nous accordez chaque jour. C'est un privilège de servir les résidents et les quartiers du comté de Los Santos.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Nous vous souhaitons de passer des fêtes sûres et agréables et espérons que la nouvelle année vous apportera santé, paix et de bonnes choses à vous et à vos proches. Nous restons engagés à servir et à protéger nos communautés au cours de l'année à venir. Joyeuses fêtes !
              </p>
            </div>

            <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r">
              <div className="text-xs text-gray-500 mb-1">23h</div>
              <p className="text-sm text-gray-700">
                La <span className="text-blue-600">#LSSD</span> Homicide répond à une enquête concernant une mort par arme à feu, 1000 E. Angela Court <span className="text-blue-600">#PaletoBay</span>
              </p>
              <Link href="#" className="text-blue-500 text-sm hover:underline block mt-1">
                https://local.nixle.com/alert/12086413/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
