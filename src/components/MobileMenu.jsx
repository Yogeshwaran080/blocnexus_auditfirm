/**
 * MobileMenu.jsx
 * ─────────────────────────────────────────────────────
 * Clean, spacious, white-themed slide-in drawer for mobile navigation.
 * ─────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X, Info, FileEdit, Megaphone, Briefcase, Mail, MessageSquareWarning, ArrowRight } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { productsColumn, servicesColumn, navLinks, companyLinks } from "./megamenu/megaMenuData";
import iconMap from "./megamenu/iconMap";

const companyIconMap = {
  Info: Info,
  FileEdit: FileEdit,
  Megaphone: Megaphone,
  Briefcase: Briefcase,
  Mail: Mail,
  MessageSquareWarning: MessageSquareWarning
};

export default function MobileMenu({ isOpen, onClose, logo, onRequestQuote }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const navigate = useNavigate();

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
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-xs lg:hidden"
          />

          {/* DRAWER (Clean White Theme) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="
              fixed top-0 right-0 z-[100]
              h-screen w-[88%] max-w-[420px]
              bg-white text-zinc-900 border-l border-zinc-200 shadow-2xl
              lg:hidden overflow-y-auto flex flex-col justify-between
            "
          >
            <div>
              {/* HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                <Link
                  to="/"
                  onClick={() => {
                    onClose();
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                  className="flex items-center gap-2.5"
                >
                  <img src={logo} alt="BlocNexus" className="h-10 w-10 object-contain" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-xl tracking-tight text-black font-light">
                    BlocNexus
                  </span>
                </Link>

                <button
                  onClick={onClose}
                  className="rounded-xl p-2 hover:bg-zinc-100 transition cursor-pointer border border-zinc-200"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-zinc-800" />
                </button>
              </div>

              {/* NAV MENU */}
              <div className="p-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                <ul className="space-y-2">

                  {/* ── PRODUCTS (Accordion) ── */}
                  <li className="border-b border-zinc-100 pb-2">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="
                        w-full flex items-center justify-between
                        py-3.5 text-zinc-900 text-base font-light
                        cursor-pointer hover:text-black transition-colors
                      "
                    >
                      <span>Products</span>
                      <ChevronDown
                        size={18}
                        className={`text-zinc-500 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-1 pb-3 space-y-1.5 pl-1">
                            {productsColumn.items.map((item, i) => {
                              const Icon = iconMap[item.icon];
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleLinkClick(item.href)}
                                  className="
                                    flex items-start gap-3 w-full text-left
                                    p-2.5 rounded-xl hover:bg-zinc-50 transition-colors
                                    cursor-pointer border border-transparent hover:border-zinc-200/60
                                  "
                                >
                                  {Icon && (
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
                                      <Icon size={14} className="text-zinc-800" />
                                    </div>
                                  )}
                                  <div>
                                    <span className="text-sm font-light text-zinc-900 block">
                                      {item.title}
                                    </span>
                                    <p className="text-xs font-light text-zinc-500 line-clamp-1 mt-0.5">{item.desc}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* ── SERVICES (Accordion) ── */}
                  <li className="border-b border-zinc-100 pb-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="
                        w-full flex items-center justify-between
                        py-3.5 text-zinc-900 text-base font-light
                        cursor-pointer hover:text-black transition-colors
                      "
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={18}
                        className={`text-zinc-500 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-1 pb-3 space-y-1.5 pl-1">
                            {servicesColumn.items.map((item, i) => {
                              const Icon = iconMap[item.icon];
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleLinkClick(item.href)}
                                  className="
                                    flex items-start gap-3 w-full text-left
                                    p-2.5 rounded-xl hover:bg-zinc-50 transition-colors
                                    cursor-pointer border border-transparent hover:border-zinc-200/60
                                  "
                                >
                                  {Icon && (
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
                                      <Icon size={14} className="text-zinc-800" />
                                    </div>
                                  )}
                                  <div>
                                    <span className="text-sm font-light text-zinc-900 block">
                                      {item.title}
                                    </span>
                                    <p className="text-xs font-light text-zinc-500 line-clamp-1 mt-0.5">{item.desc}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* ── COMPANY (Accordion) ── */}
                  <li className="border-b border-zinc-100 pb-2">
                    <button
                      onClick={() => setCompanyOpen(!companyOpen)}
                      className="
                        w-full flex items-center justify-between
                        py-3.5 text-zinc-900 text-base font-light
                        cursor-pointer hover:text-black transition-colors
                      "
                    >
                      <span>Company</span>
                      <ChevronDown
                        size={18}
                        className={`text-zinc-500 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {companyOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-1 pb-3 space-y-1.5 pl-1">
                            {companyLinks.map((item, i) => {
                              const IconComponent = companyIconMap[item.icon] || Info;
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleLinkClick(item.href)}
                                  className="
                                    flex items-start gap-3 w-full text-left
                                    p-2.5 rounded-xl hover:bg-zinc-50 transition-colors
                                    cursor-pointer border border-transparent hover:border-zinc-200/60
                                  "
                                >
                                  <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mt-0.5">
                                    <IconComponent size={14} className="text-zinc-800" />
                                  </div>
                                  <div>
                                    <span className="text-sm font-light text-zinc-900 block">
                                      {item.name}
                                    </span>
                                    <p className="text-xs font-light text-zinc-500 line-clamp-1 mt-0.5">{item.desc}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* ── BLOGS LINK ── */}
                  <li className="border-b border-zinc-100 pb-2">
                    <button
                      onClick={() => handleLinkClick("/blogs")}
                      className="
                        w-full text-left py-3.5
                        text-zinc-900 text-base font-light
                        cursor-pointer hover:text-black transition-colors
                      "
                    >
                      Blogs & Security Research
                    </button>
                  </li>

                  {/* ── CONTACT LINK ── */}
                  <li className="border-b border-zinc-100 pb-2">
                    <button
                      onClick={() => handleLinkClick("/request-a-quote")}
                      className="
                        w-full text-left py-3.5
                        text-zinc-900 text-base font-light
                        cursor-pointer hover:text-black transition-colors
                      "
                    >
                      Contact Us
                    </button>
                  </li>

                </ul>
              </div>
            </div>

            {/* BOTTOM CTA BUTTON */}
            <div className="p-6 border-t border-zinc-100 bg-zinc-50">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl bg-black py-4
                  text-white font-medium text-sm
                  hover:bg-zinc-800 transition
                  w-full cursor-pointer shadow-md
                "
              >
                Request an Audit
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}