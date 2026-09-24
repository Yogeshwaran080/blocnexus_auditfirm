/**
 * MegaDropdown.jsx
 * ─────────────────────────────────────────────────────
 * Full-width mega dropdown:  Products | Services | Chains
 *
 * Closes on:
 *   • Mouse leave
 *   • Scroll (any amount)
 *   • Route change (handled in Navbar.jsx)
 *   • Escape key
 * ─────────────────────────────────────────────────────
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MegaDropdownColumn from "./MegaDropdownColumn";
import MegaDropdownChains from "./MegaDropdownChains";
import {
  productsColumn,
  servicesColumn,
  ethereumChains,
  solanaChains,
} from "./megaMenuData";

export default function MegaDropdown({ onClose }) {
  const navigate = useNavigate();

  const handleItemClick = (href) => {
    onClose();
    navigate(href);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  /* Close on scroll */
  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onClose]);

  /* Close on Escape */
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="
        fixed top-16 left-0 right-0 z-40
        bg-[#090A0E]/98 backdrop-blur-2xl
        border-b border-white/[0.08]
        shadow-[0_24px_80px_-12px_rgba(0,0,0,0.85)]
      "
      onMouseLeave={onClose}
    >
      <div className="max-w-[1240px] mx-auto px-8 py-6">
        <div className="grid grid-cols-[1fr_1fr_220px] gap-8 items-start">

          {/* Products */}
          <MegaDropdownColumn
            heading={productsColumn.heading}
            items={productsColumn.items}
            onItemClick={handleItemClick}
          />

          {/* Services */}
          <MegaDropdownColumn
            heading={servicesColumn.heading}
            items={servicesColumn.items}
            onItemClick={handleItemClick}
          />

          {/* Chains sidebar */}
          <MegaDropdownChains
            ethereumChains={ethereumChains}
            solanaChains={solanaChains}
          />
        </div>
      </div>
    </motion.div>
  );
}
