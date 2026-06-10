import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/audit_logos.png";
import MobileMenu from "./MobileMenu";
// import { useLocation } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


import {
  Search,
  Shield,
  Target,
  Code2,
  Menu,
} from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Audits", href: "#audits" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

const servicesDropdown = [
  {
    title: "Smart Contract Audit",
    desc: "Secure your protocols",
    href: "#audit",
    icon: Search,
  },
  {
    title: "Security Consulting",
    desc: "Expert Web3 guidance",
    href: "#consulting",
    icon: Shield,
  },
  {
    title: "Penetration Testing",
    desc: "Simulated attack testing",
    href: "#pentest",
    icon: Target,
  },
  {
    title: "Custom Smart Contract",
    desc: "Build secure blockchain apps",
    href: "#development",
    icon: Code2,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <header
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300 ease-in-out
    ${
      isHomePage
        ? scrolled
          ? "bg-black/95 backdrop-blur-xl"
          : "bg-transparent"
        : "bg-black/95 backdrop-blur-xl"
    }
  `}
>
        <div className="mx-auto flex h-16 max-w-[1440px] items-center px-6 lg:px-8">

          {/* LOGO */}

          <a
            href="/"
            className="flex items-center gap-0 min-w-fit lg:min-w-[220px]"
          >
            <img
              src={Logo}
              alt="BlocNexus"
              className="h-[60px] w-[60px] object-contain rounded-md"
            />

            <span
              className="
                text-[20px]
                lg:text-[26px]
                font-light
                tracking-[0.18em]
                uppercase
                text-[#C7CDD8]
              "
            >
              BlocNexus
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-12">
              {navLinks.map((item) => {
                const isServices =
                  item.name === "Services";

                return (
                  <li
  key={item.name}
  className="relative"
  onMouseEnter={() => isServices && setOpen(true)}
  onMouseLeave={() => isServices && setOpen(false)}
>
  <button
    onClick={() => {
      switch (item.name) {
        case "Services":
          if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          } else {
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" });
          }
          break;

        case "About":
          navigate("/about-us");
          break;

        case "Blogs":
          navigate("/blogs");
          break;

        default:
          navigate("/");
      }
    }}
    className="
      text-[15px]
      font-medium
      text-[#8B95A7]
      transition-colors
      duration-200
      hover:text-white
      flex
      items-center
      gap-1
    "
  >
    {item.name}
  </button>

  {isServices && (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="
            absolute
            top-10
            left-1/2
            -translate-x-1/2
            w-[340px]
            rounded-xl
            bg-black/95
            border
            border-white/10
            shadow-xl
            p-4
          "
        >
          {servicesDropdown.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  flex
                  items-start
                  gap-3
                  p-3
                  rounded-lg
                  hover:bg-white/10
                  transition
                  cursor-pointer
                "
              >
                <div
                  className="
                    p-2
                    rounded-lg
                    bg-blue-500/10
                    border
                    border-blue-400/20
                    shadow-inner
                  "
                >
                  <Icon
                    className="text-blue-400"
                    size={18}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-white
                      text-sm
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-[#8B95A7]
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )}
</li>
                );
              })}
            </ul>
          </nav>

          {/* DESKTOP CTA */}

          <button
  onClick={() => navigate("/request-a-quote")}
  className="
    hidden lg:flex
    rounded-xl
    bg-blue-600
    px-6
    py-2.5
    text-sm
    font-semibold
    text-white
    transition-colors
    duration-200
    hover:bg-blue-700
  "
>
  Request a Quote
</button>

          {/* MOBILE MENU BUTTON */}

          <div className="ml-auto lg:hidden">
            <button
              onClick={() =>
                setMobileOpen(true)
              }
              className="
                p-2
                rounded-lg
                hover:bg-white/10
                transition
              "
            >
              <Menu
                size={28}
                className="text-white"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <MobileMenu
  isOpen={mobileOpen}
  onClose={() => setMobileOpen(false)}
  services={servicesDropdown}
  logo={Logo}
  onRequestQuote={() => {
    setMobileOpen(false);
    navigate("/request-a-quote");
  }}
/>   
    </>
  );
}