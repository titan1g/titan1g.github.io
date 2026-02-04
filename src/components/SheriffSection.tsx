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
          <motion.div
            className="w-48 h-auto rounded-lg shadow-lg bg-[#374127] p-4 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-32 h-32 bg-[#c9a227] rounded-full flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-[#374127]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-white text-center text-sm font-semibold">SHERIFF</div>
          </motion.div>
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
            SHERIFF JAYDEN WATSON
          </motion.h2>
          <motion.p
            className="text-gray-200 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Le shérif Jayden Watson est le 35<sup>e</sup> shérif du comté de Los Santos. Le shérif Watson dirige le plus grand département du shérif de Sunny Island, avec près de 18 000 agents assermentés et membres du personnel professionnel inscrits au budget.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
