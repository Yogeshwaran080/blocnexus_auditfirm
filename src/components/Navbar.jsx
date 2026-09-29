import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  Info,
  FileEdit,
  Megaphone,
  Briefcase,
  Mail,
  MessageSquareWarning,
  Wallet,
  ImageOff,
  ShieldAlert,
  Fuel,
  SearchCode,
  FileSearch,
  Target,
  BrainCircuit,
  Activity
} from "lucide-react";

import Logo from "../assets/Blocnexus_logo.png";
import MobileMenu from "./MobileMenu";
import { navLinks, productsColumn, servicesColumn, companyLinks } from "./megamenu";

const iconMap = {
  Wallet,
  ImageOff,
  ShieldAlert,
  Fuel,
  SearchCode,
  FileSearch,
  Target,
  BrainCircuit,
  Activity,
  Info,
  FileEdit,
  Megaphone,
  Briefcase,
  Mail,
  MessageSquareWarning
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ── Scroll listener ── */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          if (window.scrollY > 20) {
            setProductsOpen(false);
            setServicesOpen(false);
            setCompanyOpen(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close dropdowns on route change ── */
  useEffect(() => {
    setProductsOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  /* ── Navigation handler ── */
  const handleNavClick = useCallback(
    (item) => {
      if (item.hasProductsDropdown) {
        setServicesOpen(false);
        setCompanyOpen(false);
        setProductsOpen((prev) => !prev);
        return;
      }
      if (item.hasServicesDropdown) {
        setProductsOpen(false);
        setCompanyOpen(false);
        setServicesOpen((prev) => !prev);
        return;
      }
      if (item.hasCompanyDropdown) {
        setProductsOpen(false);
        setServicesOpen(false);
        setCompanyOpen((prev) => !prev);
        return;
      }
      setProductsOpen(false);
      setServicesOpen(false);
      setCompanyOpen(false);
      navigate(item.href);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    [navigate]
  );

  const isAnyDropdownOpen = productsOpen || servicesOpen || companyOpen;
  const showWhiteBg = scrolled || isAnyDropdownOpen;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 select-none
          transition-colors duration-300 ease-in-out
          ${showWhiteBg
            ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200/90 shadow-xs"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div
          className={`
            flex max-w-[1440px] items-center px-4 md:px-8 mx-auto w-full
            transition-all duration-300 ease-in-out
            ${scrolled ? "h-14" : "h-20"}
          `}
        >
          {/* ── LOGO ── */}
          <Link
            to="/"
            onClick={() => {
              setProductsOpen(false);
              setServicesOpen(false);
              setCompanyOpen(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            className="flex items-center gap-2 min-w-fit lg:min-w-[220px] group"
          >
            <img
              src={Logo}
              alt="BlocNexus"
              className={`
                object-contain transition-all duration-300 shrink-0
                ${scrolled ? "h-9 w-auto" : "h-11 w-auto"}
              `}
            />
            <span
              style={{ fontFamily: "'Inter', sans-serif" }}
              className={`
                font-light tracking-tight text-black transition-all duration-300
                ${scrolled ? "text-xl lg:text-2xl" : "text-2xl lg:text-[28px]"}
              `}
            >
              BlocNexus
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((item) => {
                const isOpen =
                  (item.hasProductsDropdown && productsOpen) ||
                  (item.hasServicesDropdown && servicesOpen) ||
                  (item.hasCompanyDropdown && companyOpen);

                return (
                  <li
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => {
                      if (item.hasProductsDropdown) {
                        setServicesOpen(false);
                        setCompanyOpen(false);
                        setProductsOpen(true);
                      } else if (item.hasServicesDropdown) {
                        setProductsOpen(false);
                        setCompanyOpen(false);
                        setServicesOpen(true);
                      } else if (item.hasCompanyDropdown) {
                        setProductsOpen(false);
                        setServicesOpen(false);
                        setCompanyOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasProductsDropdown) setProductsOpen(false);
                      if (item.hasServicesDropdown) setServicesOpen(false);
                      if (item.hasCompanyDropdown) setCompanyOpen(false);
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(item)}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className="
                        text-[14px] font-medium tracking-tight
                        text-zinc-700 hover:text-black
                        transition-colors duration-200
                        flex items-center gap-1.5
                        cursor-pointer py-1.5 px-2 rounded-lg
                        hover:bg-zinc-100/50 outline-none
                      "
                    >
                      {item.name}
                      {(item.hasProductsDropdown || item.hasServicesDropdown || item.hasCompanyDropdown) && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 opacity-70 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </button>

                    {/* ── PRODUCTS DROPDOWN CARD ── */}
                    {item.hasProductsDropdown && (
                      <AnimatePresence>
                        {productsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                            className="
                              absolute top-full left-1/2 -translate-x-1/2 mt-1
                              w-72 sm:w-80 bg-white rounded-2xl
                              border border-zinc-200 shadow-2xl p-2.5 z-50
                              text-zinc-900 overflow-hidden
                            "
                          >
                            <div className="space-y-0.5">
                              {productsColumn.items.map((prod) => {
                                const IconComponent = iconMap[prod.icon] || Wallet;
                                return (
                                  <button
                                    key={prod.title}
                                    onClick={() => {
                                      setProductsOpen(false);
                                      navigate(prod.href);
                                      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                    }}
                                    className="
                                      w-full text-left flex items-center gap-3.5 px-3 py-2.5 rounded-xl
                                      hover:bg-zinc-100/90 transition-colors duration-150 cursor-pointer group
                                    "
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 group-hover:bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                                      <IconComponent className="w-4 h-4 text-zinc-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <div className="text-[14px] font-medium text-zinc-900 group-hover:text-blue-600 transition-colors truncate">
                                          {prod.title}
                                        </div>
                                      </div>
                                      <div className="text-[11px] font-light text-zinc-500 line-clamp-1 mt-0.5">
                                        {prod.desc}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* ── SERVICES DROPDOWN CARD ── */}
                    {item.hasServicesDropdown && (
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                            className="
                              absolute top-full left-1/2 -translate-x-1/2 mt-1
                              w-72 sm:w-80 bg-white rounded-2xl
                              border border-zinc-200 shadow-2xl p-2.5 z-50
                              text-zinc-900 overflow-hidden
                            "
                          >
                            <div className="space-y-0.5">
                              {servicesColumn.items.map((serv) => {
                                const IconComponent = iconMap[serv.icon] || FileSearch;
                                return (
                                  <button
                                    key={serv.title}
                                    onClick={() => {
                                      setServicesOpen(false);
                                      navigate(serv.href);
                                      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                    }}
                                    className="
                                      w-full text-left flex items-center gap-3.5 px-3 py-2.5 rounded-xl
                                      hover:bg-zinc-100/90 transition-colors duration-150 cursor-pointer group
                                    "
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 group-hover:bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                                      <IconComponent className="w-4 h-4 text-zinc-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <div className="text-[14px] font-medium text-zinc-900 group-hover:text-blue-600 transition-colors truncate">
                                          {serv.title}
                                        </div>
                                      </div>
                                      <div className="text-[11px] font-light text-zinc-500 line-clamp-1 mt-0.5">
                                        {serv.desc}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* ── COMPANY DROPDOWN CARD ── */}
                    {item.hasCompanyDropdown && (
                      <AnimatePresence>
                        {companyOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            onMouseEnter={() => setCompanyOpen(true)}
                            onMouseLeave={() => setCompanyOpen(false)}
                            className="
                              absolute top-full left-1/2 -translate-x-1/2 mt-1
                              w-72 sm:w-80 bg-white rounded-2xl
                              border border-zinc-200 shadow-2xl p-2.5 z-50
                              text-zinc-900 overflow-hidden
                            "
                          >
                            <div className="space-y-0.5">
                              {companyLinks.map((c) => {
                                const IconComponent = iconMap[c.icon] || Info;
                                return (
                                  <button
                                    key={c.name}
                                    onClick={() => {
                                      setCompanyOpen(false);
                                      navigate(c.href);
                                      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                    }}
                                    className="
                                      w-full text-left flex items-center gap-3.5 px-3 py-2.5 rounded-xl
                                      hover:bg-zinc-100/90 transition-colors duration-150 cursor-pointer group
                                    "
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 group-hover:bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                                      <IconComponent className="w-4 h-4 text-zinc-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                      <div className="text-[14px] font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                                        {c.name}
                                      </div>
                                      <div className="text-[11px] font-light text-zinc-500 line-clamp-1">
                                        {c.desc}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex">
            <button
              onClick={() => {
                setProductsOpen(false);
                setServicesOpen(false);
                setCompanyOpen(false);
                navigate("/request-a-quote");
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className={`
                rounded-lg bg-black hover:bg-zinc-800
                text-white font-medium
                transition-all duration-200
                whitespace-nowrap cursor-pointer shadow-xs
                ${scrolled ? "px-4 py-1.5 text-[12px]" : "px-5 py-2 text-[13px]"}
              `}
            >
              Request a Quote
            </button>
          </div>

          {/* ── MOBILE MENU BUTTON ── */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-black/5 transition cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={26} className="text-zinc-900" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        logo={Logo}
        onRequestQuote={() => {
          setMobileOpen(false);
          navigate("/request-a-quote");
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }}
      />
    </>
  );
}