import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/dotted_shield_no_bg.svg";
import { Copyright } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    {
      title: "Wallet Detection",
      desc: "End-user wallet & dApp protection",
      path: "/wallet-detection",
    },
    {
      title: "NFT Detection",
      desc: "NFT drainer & campaign scanning",
      path: "/nft-detection",
    },
    {
      title: "Transaction Fraud Detection",
      desc: "Real-time threat & phishing prevention",
      path: "/transaction",
    },
    {
      title: "Gas Optimization",
      desc: "Contract profiling & gas analysis",
      path: "/gas-optimization",
    },
    {
      title: "Find Flaws in Contract",
      desc: "Automated vulnerability scanning",
      path: "/find-flaws",
    },
  ],

  Services: [
    {
      title: "Smart Contract Auditing",
      desc: "Formal verification & security audits",
      path: "/smart-contract-auditing",
    },
    {
      title: "Penetration Testing",
      desc: "Real-world attack simulations",
      path: "/penetration-testing",
    },
    {
      title: "Consultation & Architecture",
      desc: "Expert Web3 security guidance",
      path: "/consultation-architecture",
    },
    {
      title: "Static Analysis & Monitoring",
      desc: "Automated scanning & monitoring",
      path: "/static-analysis",
    },
  ],

  Company: [
    {
      title: "About Us",
      desc: "Our mission, research & values",
      path: "/about-us",
    },
    {
      title: "Careers",
      desc: "Join our security research team",
      path: "/careers",
    },
    {
      title: "Blog & Research",
      desc: "Research, insights & security updates",
      path: "/blogs",
    },
    {
      title: "Request a Quote",
      desc: "Get an institutional security audit",
      path: "/request-a-quote",
    },
  ],
};

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative bg-white border-t border-zinc-200 overflow-hidden select-none"
    >
      {/* ── CLEAN NEUTRAL GRID OVERLAY (NO BLUE GLOW) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* TOP SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* LINKS COLUMNS */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            {/* FIRST LETTER UPPERCASE, REST LOWERCASE, BLACK COLOR */}
            <h3 className="text-base font-semibold text-black tracking-tight mb-5">
              {section}
            </h3>

            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-left group w-full cursor-pointer"
                  >
                    <h4 className="text-xs font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-[11px] font-light text-zinc-500 mt-0.5 leading-snug line-clamp-1">
                      {link.desc}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ORIGINAL SHIELD LOGO GRAPHIC WITH SUBTLE DARK FINISH (NO GLOW) */}
        <div className="hidden lg:flex flex-col justify-between items-end h-full pt-2 pr-2 relative">
          <img
            src={Logo}
            alt="BlocNexus Security Shield"
            className="w-[230px] h-[230px] object-contain opacity-80 filter brightness-50 contrast-125 select-none pointer-events-none relative z-10"
          />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 border-t border-zinc-200" />

      {/* BOTTOM BAR WITH SINGLE COPYRIGHT ICON */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright formatted with single Copyright icon */}
        <div className="flex items-center gap-1.5 text-xs font-light text-zinc-600">
          <Copyright size={14} className="text-zinc-800 shrink-0" />
          <span>{new Date().getFullYear()} BlocNexus Security Inc. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-light">
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-zinc-600 hover:text-black transition cursor-pointer"
          >
            Security Policy
          </button>
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-zinc-600 hover:text-black transition cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-zinc-600 hover:text-black transition cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}