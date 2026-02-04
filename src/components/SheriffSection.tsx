"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function SheriffSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#4a5a3c] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Sheriff Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="https://ext.same-assets.com/482647744/4024856269.png"
            alt="Sheriff William A. Garland"
            className="w-48 h-auto rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Sheriff Info */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-[#c9a227] text-3xl md:text-4xl font-bold mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SHERIFF WILLIAM A. GARLAND
          </motion.h2>
          <motion.p
            className="text-gray-200 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Le shérif William A. Garland est le 35<sup>e</sup> shérif du comté de Los Santos. Le shérif Garland
            dirige le plus grand département du shérif des États-Unis, avec près de 18 000 agents
            assermentés et membres du personnel professionnel inscrits au budget.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
