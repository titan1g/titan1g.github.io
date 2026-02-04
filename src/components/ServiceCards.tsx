"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ServiceCardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

function ServiceCard({ icon, image, title, description, href, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      <Link
        href={href}
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block h-full"
      >
        <div className="relative h-40 overflow-hidden bg-[#4a5a3c] flex items-center justify-center">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="text-[#c9a227]">
              {icon}
            </div>
          )}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-[#c9a227] font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

const CustodyIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const PatrolIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);

const CourtIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 4.7c.69 0 1.25.56 1.25 1.25 0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25c0-.69.56-1.25 1.25-1.25z"/>
  </svg>
);

const JoinIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ArchivesIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-.9-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
  </svg>
);

const TransparencyIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const servicesRow1 = [
  {
    icon: <CustodyIcon />,
    title: "SERVICE PÉNITENTIAIRE",
    description:
      "Informations sur les services pénitentiaires pour le comté de Los Santos : adresses des prisons, numéros de contact, organisation des visites et autres services liés à la détention.",
    href: "#",
  },
  {
    image: "https://i.ytimg.com/vi/gwFR0qjlHwI/maxresdefault.jpg",
    title: "STATION DE PATROUILLE",
    description:
      "Trouvez le poste du shérif du comté de Los Santos qui patrouille dans votre secteur. Vous y trouverez les numéros de contact, les adresses et les actualités de votre zone.",
    href: "#",
  },
  {
    icon: <CourtIcon />,
    title: "SERVICES DE LA COUR",
    description:
      "Les services judiciaires comprennent : les emplacements des tribunaux, les bureaux des services civils, les sites d'inspection des véhicules.",
    href: "#",
  },
];

const servicesRow2 = [
  {
    icon: <JoinIcon />,
    title: "REJOINDRE LE LSSD",
    description:
      "Le département du shérif du comté de Los Santos recherche des personnes qualifiées souhaitant commencer leur carrière dans le domaine diversifié de la sécurité publique en tant qu'adjoint du shérif.",
    href: "/carrieres",
  },
  {
    icon: <ArchivesIcon />,
    title: "ARCHIVES ET IDENTIFICATION",
    description:
      "Les responsabilités relatives aux archives et aux pièces d'identité comprennent l'archivage, la conservation et la diffusion de ces derniers. Lesquels comprennent 19,4 millions de rapports.",
    href: "#",
  },
  {
    icon: <TransparencyIcon />,
    title: "TRANSPARENCE",
    description:
      "Le département du shérif de Los Santos croit à l'usage de la transparence concernant ses activités et son maintien de l'ordre. La transparence permet de renforcer la confiance au sein de la population.",
    href: "#",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-[#f5f3ed] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {servicesRow1.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesRow2.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
