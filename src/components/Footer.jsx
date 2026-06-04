import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const FOOTER_LINKS = {
  Products: [
    { title: "Smart Contract Audit", desc: "Enterprise-grade security audits", path: "/products/audit" },
    { title: "API Platform", desc: "Scalable blockchain APIs", path: "/products/api" },
    { title: "Security Analyzer", desc: "Detect vulnerabilities instantly", path: "/analyser" },
    { title: "Web3 Marketplace", desc: "Integrate blockchain services", path: "/marketplace" },
  ],
  Resources: [
    { title: "Documentation", desc: "Developer guides & SDKs", path: "/docs" },
    { title: "Blog", desc: "Security insights & research", path: "/blog" },
    { title: "Community", desc: "Join builders & auditors", path: "/community" },
    { title: "Help Center", desc: "Support & troubleshooting", path: "/help" },
  ],
  Company: [
    { title: "About BlocNexus", desc: "Next-gen Web3 security platform", path: "/about" },
    { title: "Careers", desc: "Build the future of blockchain security", path: "/careers" },
    { title: "Pricing", desc: "Transparent security plans", path: "/pricing" },
  ],
  Dashboard: [
    { title: "User Dashboard", desc: "Manage contracts & scans", path: "/dashboard" },
    { title: "Analytics", desc: "Real-time protocol insights", path: "/dashboard/analytics" },
  ],
};

export default function Footer() {
  const handleNavigation = (path) => {
    if (path) window.location.href = path;
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-5">
              {section}
            </h3>

            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-left group w-full"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
                      {link.title}
                    </h4>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition">
                      {link.desc}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">

        <span>
          © {new Date().getFullYear()} BlocNexus. Built for Web3 security.
        </span>

        <div className="flex gap-6">
          {["Security", "Privacy Policy", "Terms"].map((txt, i) => (
            <button key={i} className="hover:text-blue-600 transition">
              {txt}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <FaTwitter className="hover:text-blue-600 cursor-pointer transition" />
          <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
          <FaGithub className="hover:text-blue-600 cursor-pointer transition" />
          <FaInstagram className="hover:text-blue-600 cursor-pointer transition" />
        </div>

      </div>
    </footer>
  );
}