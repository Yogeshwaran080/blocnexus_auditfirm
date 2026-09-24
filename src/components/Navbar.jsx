/**
 * Navbar.jsx
 * ─────────────────────────────────────────────────────
 * Top-level navigation bar with full-width mega dropdown.
 * Dropdown closes on: scroll, route change, escape, mouse leave.
 * ─────────────────────────────────────────────────────
 */

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";

import Logo from "../assets/Blocnexus_logos.png";
import MobileMenu from "./MobileMenu";
import { MegaDropdown, navLinks } from "./megamenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  /* ── Scroll listener — sets scrolled state + closes mega dropdown ── */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          // Close dropdown if user scrolls at all while it's open
          if (megaOpen) setMegaOpen(false);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [megaOpen]);

  /* ── Close mega dropdown on route change ── */
  useEffect(() => {
    setMegaOpen(false);
  }, [location.pathname]);

  /* ── Navigation handler ── */
  const handleNavClick = useCallback(
    (item) => {
      if (item.hasMega) {
        setMegaOpen((prev) => !prev);
        return;
      }
      setMegaOpen(false);
      navigate(item.href);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    [navigate]
  );

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${
            isHomePage
              ? scrolled || megaOpen
                ? "bg-black/95 backdrop-blur-xl"
                : "bg-transparent"
              : "bg-black/95 backdrop-blur-xl"
          }
        `}
      >
        <div className="flex h-16 max-w-[1440px] items-center ml-1 w-full">

          {/* ── LOGO ── */}
          <Link
            to="/"
            onClick={() => {
              setMegaOpen(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            className="flex items-center gap-0 min-w-fit lg:min-w-[220px]"
          >
            <img
              src={Logo}
              alt="BlocNexus"
              className="h-[90px] w-[90px] object-contain rounded-md"
            />
            <span
              className="
                -ml-4
                text-[20px] lg:text-[26px]
                font-light tracking-[0.18em]
                uppercase text-[#C7CDD8]
              "
            >
              BlocNexus
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasMega && setMegaOpen(true)}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className="
                      text-[14px] font-light tracking-tight
                      text-[#9CA3AF] hover:text-white
                      transition-colors duration-200
                      flex items-center gap-1.5
                      cursor-pointer
                    "
                  >
                    {item.name}
                    {item.hasMega && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 opacity-70 ${
                          megaOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex lg:mr-8 xl:mr-12">
            <button
              onClick={() => {
                setMegaOpen(false);
                navigate("/request-a-quote");
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="
                rounded-lg bg-blue-600 hover:bg-blue-500
                px-5 py-2
                text-[13px] font-light text-white
                transition-colors duration-200
                whitespace-nowrap cursor-pointer
                shadow-sm
              "
            >
              Request a Quote
            </button>
          </div>

          {/* ── MOBILE MENU BUTTON ── */}
          <div className="ml-auto lg:hidden pr-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MEGA DROPDOWN (full-width, desktop only) ── */}
      <AnimatePresence>
        {megaOpen && (
          <MegaDropdown onClose={() => setMegaOpen(false)} />
        )}
      </AnimatePresence>

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