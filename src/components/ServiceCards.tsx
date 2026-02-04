"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

function ServiceCard({ image, title, description, href, index }: ServiceCardProps) {
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
        <div className="relative h-40 overflow-hidden bg-[#4a5a3c]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-[#c9a227] font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

const servicesRow1 = [
  {
    image: "https://ext.same-assets.com/482647744/174643306.png",
    title: "SERVICE PÉNITENTIAIRE",
    description:
      "Informations sur les services pénitentiaires pour le comté de Los Santos : adresses des prisons, numéros de contact, organisation des visites et autres services liés à la détention.",
    href: "#",
  },
  {
    image: "https://ext.same-assets.com/482647744/1861354490.png",
    title: "STATION DE PATROUILLE",
    description:
      "Trouvez le poste du shérif du comté de Los Angeles qui patrouille dans votre secteur. Vous y trouverez les numéros de contact, les adresses et les actualités de votre zone.",
    href: "#",
  },
  {
    image: "https://ext.same-assets.com/482647744/1549376359.png",
    title: "SERVICES DE LA COUR",
    description:
      "Les services judiciaires comprennent : les emplacements des tribunaux, les bureaux des services civils, les sites d'inspection des véhicules.",
    href: "#",
  },
];

const servicesRow2 = [
  {
    image: "https://ext.same-assets.com/482647744/2194947571.png",
    title: "REJOINDRE LE LSSD",
    description:
      "Le département du shérif du comté de Los Santos recherche des personnes qualifiées souhaitant commencer leur carrière dans le domaine diversifié de la sécurité publique en tant qu'adjoint du shérif.",
    href: "/carrieres",
  },
  {
    image: "https://ext.same-assets.com/482647744/2608788106.png",
    title: "ARCHIVES ET IDENTIFICATION",
    description:
      "Les responsabilités relatives aux archives et aux pièces d'identité comprennent l'archivage, la conservation et la diffusion de ces derniers. Lesquels comprennent 19,4 millions de rapports.",
    href: "#",
  },
  {
    image: "https://ext.same-assets.com/482647744/775705160.png",
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
