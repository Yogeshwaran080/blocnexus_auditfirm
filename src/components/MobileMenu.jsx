/**
 * MobileMenu.jsx
 * ─────────────────────────────────────────────────────
 * Slide-in drawer for mobile navigation. Reads the same
 * data (solutionsColumns, navLinks) from ./navbar/megaMenuData.js
 * for consistency with the desktop mega dropdown.
 * ─────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { productsColumn, servicesColumn, navLinks } from "./megamenu/megaMenuData";
import iconMap from "./megamenu/iconMap";

export default function MobileMenu({ isOpen, onClose, logo, onRequestQuote }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Esc to close */
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleLinkClick = (path) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const columns = [productsColumn, servicesColumn];

  /* Non-mega nav links */
  const plainLinks = navLinks.filter((l) => !l.hasMega);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm lg:hidden"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="
              fixed top-0 right-0 z-[100]
              h-screen w-[85%] max-w-[400px]
              bg-[#060606] border-l border-white/10 shadow-2xl
              lg:hidden overflow-y-auto
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Link
                to="/"
                onClick={() => {
                  onClose();
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
                className="flex items-center gap-2"
              >
                <img src={logo} alt="BlocNexus" className="h-[52px] w-[52px] object-contain" />
                <span className="text-[20px] tracking-[0.12em] uppercase text-[#C7CDD8] font-light">
                  BlocNexus
                </span>
              </Link>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-white/10 transition cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* NAV */}
            <div className="p-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              <ul className="space-y-1">

                {/* ── SOLUTIONS (accordion) ── */}
                <li>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="
                      w-full flex items-center justify-between
                      py-4 text-white text-[15px] font-light
                      border-b border-white/5 cursor-pointer
                    "
                  >
                    Solutions & Services
                    {servicesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-2 pt-2 pb-1 space-y-1">
                          {columns.map((col) => (
                            <div key={col.heading} className="mb-3">
                              {/* Column heading */}
                              <p className="text-[10px] font-light uppercase tracking-[0.18em] text-[#9CA3AF]/70 px-3 mb-1.5">
                                {col.heading}
                              </p>

                              {col.items.map((item, i) => {
                                const Icon = iconMap[item.icon];
                                return (
                                  <button
                                    key={i}
                                    onClick={() => handleLinkClick(item.href)}
                                    className="
                                      flex items-center gap-2.5 w-full text-left
                                      px-3 py-2 rounded-lg
                                      hover:bg-white/[0.04] transition
                                      cursor-pointer
                                    "
                                  >
                                    {Icon && (
                                      <div className="shrink-0 w-6 h-6 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                                        <Icon size={12} className="text-[#9CA3AF]" />
                                      </div>
                                    )}
                                    <div>
                                      <span className="text-[13px] font-light text-white/90 flex items-center gap-2">
                                        {item.title}
                                        {item.badge && (
                                          <span className="text-[8px] font-light uppercase px-1 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                            {item.badge}
                                          </span>
                                        )}
                                      </span>
                                      <p className="text-[11px] font-light text-[#9CA3AF]/60 line-clamp-1">{item.desc}</p>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* ── PLAIN LINKS ── */}
                {plainLinks.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="
                        w-full text-left py-4
                        text-white text-[15px] font-light
                        border-b border-white/5 cursor-pointer
                      "
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={onRequestQuote}
                className="
                  mt-8 flex items-center justify-center
                  rounded-lg bg-blue-600 py-3.5
                  text-white font-light text-[14px]
                  hover:bg-blue-500 transition
                  w-full cursor-pointer
                "
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}