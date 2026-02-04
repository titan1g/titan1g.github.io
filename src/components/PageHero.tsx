"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title?: string;
  subtitle?: string;
  height?: string;
}

export default function PageHero({
  image,
  title,
  subtitle,
  height = "h-[50vh] min-h-[400px]"
}: PageHeroProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {title && (
            <motion.h1
              className="text-white text-3xl md:text-5xl font-bold tracking-wider drop-shadow-lg mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p
              className="text-[#c9a227] text-lg md:text-xl font-semibold tracking-widest drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
    </section>
  );
}
