import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/dotted_shield_no_bg.svg";

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
    <footer style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white border-t border-gray-200 overflow-hidden select-none">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* LINKS COLUMNS */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-4">
              {section}
            </h3>

            <ul className="space-y-3.5">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-left group w-full cursor-pointer"
                  >
                    <h4 className="text-xs font-medium text-black group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-[11px] font-light text-gray-500 mt-0.5 leading-snug line-clamp-1">
                      {link.desc}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* SHIELD LOGO GRAPHIC */}
        <div className="hidden lg:flex justify-end items-center h-full pt-4">
          <img
            src={Logo}
            alt="Security Shield"
            className="w-[280px] h-[280px] object-contain opacity-85 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs font-light text-gray-500">
          © {new Date().getFullYear()} BlocNexus Security. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-xs font-light">
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
          >
            Security Policy
          </button>
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}