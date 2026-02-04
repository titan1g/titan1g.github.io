"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "VOTRE LSSD",
    href: "/votre-lssd",
    hasDropdown: true,
    dropdownItems: [
      { label: "PAR DIVISION", href: "/votre-lssd/par-division" },
      { label: "STATIONS LSSD", href: "/votre-lssd/stations-lssd" },
    ],
  },
  {
    label: "SERVICES COMMUNAUTAIRES",
    href: "/services-communautaires",
    hasDropdown: true,
    dropdownItems: [
      { label: "RIDE ALONG", href: "/services-communautaires/ride-along" },
      { label: "COMMUNAUTÉ LGBTQ+", href: "/services-communautaires/lgbtq" },
    ],
  },
  {
    label: "ACTUALITÉS",
    href: "/actualites",
    hasDropdown: true,
    dropdownItems: [
      { label: "SALLE DE PRESSE", href: "/actualites/salle-de-presse" },
      { label: "PORTAIL MÉDIATIQUE", href: "/actualites/portail-mediatique" },
    ],
  },
  {
    label: "More",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "RECRUTEMENTS", href: "/carrieres" },
      { label: "NOUS CONTACTER", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.header
      className="bg-[#374127] text-white sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src="https://ext.same-assets.com/482647744/1151256108.png"
                alt="LSSD Logo"
                className="h-10 w-auto"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:bg-[#2a3120] transition-colors rounded"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  )}
                </Link>

                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 bg-[#374127] min-w-[220px] shadow-lg py-2 rounded-b overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdownItems?.map((dropItem, index) => (
                        <motion.div
                          key={dropItem.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm hover:bg-[#2a3120] transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Search Icon */}
            <motion.button
              type="button"
              className="p-2 hover:bg-[#2a3120] rounded transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={20} />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t border-[#4a5a3c] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, itemIndex) => (
                <motion.div
                  key={item.label}
                  className="py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    )}
                  </button>
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.label && (
                      <motion.div
                        className="pl-8 py-2 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            href={dropItem.href}
                            className="block py-2 text-sm text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
