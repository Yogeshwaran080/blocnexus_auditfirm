import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSearch,
  Target,
  Code2,
  ScanLine,
} from "lucide-react";

// image
import audit from "../assets/audit.png";

export default function SolutionsSection() {
  const [active, setActive] = useState(0);

  const services = [
    {
      icon: FileSearch,
      title: "Smart Contract Audit",
      image: audit,
      desc:
        "Deep manual + automated inspection of smart contracts to detect critical vulnerabilities before mainnet deployment.",
      points: [
        "Reentrancy, overflow & logic flaw detection",
        "MEV & front-running risk analysis",
        "Gas optimization & execution efficiency review",
        "Protocol-level threat modeling (DeFi / NFT / GameFi)",
        "Audit-grade security report for investors & listings",
      ],
    },
    {
      icon: Target,
      title: "Penetration Testing",
      image: audit,
      desc:
        "Real-world adversarial simulation to evaluate how your protocol behaves under active exploitation attempts.",
      points: [
        "Attacker modeling (white / gray / black box)",
        "Flash loan & oracle manipulation testing",
        "Cross-contract attack surface mapping",
        "Liquidity drain & staking exploit simulation",
        "On-chain stress & failure scenario validation",
      ],
    },
    {
      icon: Code2,
      title: "Code Review & Architecture",
      image: audit,
      desc:
        "Full-stack security + architecture review ensuring scalability, upgrade safety, and production readiness.",
      points: [
        "Smart contract design pattern validation",
        "Upgradeable proxy risk assessment",
        "Access control & privilege escalation checks",
        "Code quality & maintainability review",
        "OpenZeppelin standard compliance check",
      ],
    },
    {
      icon: ScanLine,
      title: "Static Analysis & Monitoring",
      image: audit,
      desc:
        "Automated vulnerability scanning with continuous monitoring to detect risks before attackers exploit them.",
      points: [
        "Static analysis (Slither-style detection logic)",
        "Dependency & library risk tracking",
        "Known exploit signature matching",
        "Pre-deployment vulnerability alerts",
        "Continuous post-deployment monitoring",
      ],
    },
  ];

  const ActiveIcon = services[active].icon;
  const activeService = services[active];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">

      {/* CENTER BUTTONS */}
      <div className="max-w-7xl mx-auto flex justify-center gap-4 mb-10 flex-wrap">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-md border transition
              ${
                active === i
                  ? "bg-gray-900 text-white border-gray-900 scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              <Icon size={16} />
              {s.title}
            </button>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <ActiveIcon size={28} className="text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">
                {activeService.title}
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {activeService.desc}
            </p>

            <ul className="space-y-3">
              {activeService.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex items-center justify-center"
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}