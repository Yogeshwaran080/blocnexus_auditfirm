import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/dotted_shield_no_bg.svg";

const FOOTER_LINKS = {
  Solutions: [
    {
      title: "Smart Contract Audit",
      desc: "Comprehensive blockchain security reviews",
      path: "/request-a-quote",
    },
    {
      title: "Security Consultation",
      desc: "Expert Web3 security guidance",
      path: "/request-a-quote",
    },
    {
      title: "Penetration Testing",
      desc: "Real-world attack simulations",
      path: "/request-a-quote",
    },
    {
      title: "Custom Smart Contract Solutions",
      desc: "Tailored blockchain development",
      path: "/request-a-quote",
    },
  ],

  Resources: [
    {
      title: "Blog",
      desc: "Research, insights & security updates",
      path: "/blogs",
    },
    {
      title: "Community",
      desc: "Connect with builders and researchers",
      path: "/blogs",
    },
  ],

  Company: [
    {
      title: "About BlocNexus",
      desc: "Our mission and vision",
      path: "/about-us",
    },
    {
      title: "Journey",
      desc: "The story behind BlocNexus",
      path: "/about-us",
    },
  ],
};

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    // force immediate scroll to top 0 on navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white border-t border-gray-200 overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_420px] gap-8 items-start">

        {/* LINKS */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-xs font-light uppercase tracking-wider text-blue-600 mb-4">
              {section}
            </h3>

            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-left group w-full cursor-pointer"
                  >
                    <h4 className="text-sm font-light text-black group-hover:text-blue-600 transition">
                      {link.title}
                    </h4>
                    <p className="text-xs font-light text-gray-500 mt-0.5 leading-snug">
                      {link.desc}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* SHIELD LOGO */}
        <div className="hidden lg:flex justify-end items-start h-full">
          <div className="relative -top-6">
            <img
              src={Logo}
              alt="BlocNexus Shield"
              className="w-[380px] h-[380px] object-contain opacity-90 select-none pointer-events-none"
            />
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3">

        <p className="text-xs font-light text-gray-500">
          © {new Date().getFullYear()} BlocNexus. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-xs font-light">
          <button
            onClick={() => handleLinkClick("/about-us")}
            className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
          >
            Security
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
            Terms
          </button>
        </div>

      </div>

    </footer>
  );
}