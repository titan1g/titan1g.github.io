"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("recruitment-banner");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://ext.same-assets.com/482647744/2194947571.png"
          alt="LSSD Sheriff Vehicles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          LOS SANTOS COUNTY
        </motion.h1>
        <motion.p
          className="text-[#c9a227] text-xl md:text-2xl font-semibold tracking-widest drop-shadow-md italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Tradition of Service Since 1850
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }}
      >
        <ChevronDown size={40} className="hover:opacity-100 transition-opacity" />
      </motion.button>
    </section>
  );
}
