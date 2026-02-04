"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RecruitmentBanner() {
  return (
    <motion.section
      id="recruitment-banner"
      className="bg-[#3d8b40] py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="/carrieres"
          className="block text-center text-[#c9a227] text-lg md:text-xl lg:text-2xl font-bold tracking-wide hover:text-[#d4af37] transition-colors"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 0px rgba(201, 162, 39, 0)",
                "0 0 10px rgba(201, 162, 39, 0.5)",
                "0 0 0px rgba(201, 162, 39, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            NOUS RECRUTONS - VOIR LES POSTES ACTIFS ET CIVILS DISPONIBLES
          </motion.span>
        </Link>
      </motion.div>
    </motion.section>
  );
}
