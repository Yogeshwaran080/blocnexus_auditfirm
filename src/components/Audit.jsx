import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSearch,
  Target,
  Code2,
  ScanLine,
} from "lucide-react";

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
    <section className="w-full bg-white pt-0 pb-12 md:py-16 px-4 md:px-16 overflow-hidden">

      {/* SERVICE BUTTONS */}

      <div className="hidden lg:block max-w-7xl mx-auto mb-10">

        <div className="hidden lg:flex lg:justify-center gap-4">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  flex items-center justify-center gap-2
                  px-3 md:px-5
                  py-3
                  rounded-xl
                  border
                  text-xs md:text-sm
                  font-medium
                  transition-all
                  duration-200
                  min-h-[56px]

                  ${
                    active === i
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                  }
                `}
              >
                <Icon size={16} />
                <span className="text-center leading-tight">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto">

  {/* DESKTOP */}
  <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">

    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <ActiveIcon size={24} className="text-blue-600" />

          <h2 className="text-3xl font-semibold text-gray-900">
            {activeService.title}
          </h2>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          {activeService.desc}
        </p>

        <ul className="space-y-3">
          {activeService.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>

    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
      >
        <img
          src={activeService.image}
          alt={activeService.title}
          className="w-full rounded-xl"
        />
      </motion.div>
    </AnimatePresence>

  </div>

  
  {/* MOBILE */}
<div className="lg:hidden flex flex-col gap-4">

  {services.map((service, index) => {
    const Icon = service.icon;

    const labels = [
      "AUDIT",
      "PENTEST",
      "CODE REVIEW",
      "MONITORING",
    ];

    return (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="
          bg-[#F5F5F5]
          border
          border-[#DADADA]
          rounded-[28px]
          p-6
        "
      >
        {/* SECTION LABEL */}
        <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500">
          {String(index + 1).padStart(2, "0")} / {labels[index]}
        </p>

        {/* ICON */}
        <div className="mt-7">
          <Icon
            size={54}
            strokeWidth={1.5}
            className="text-blue-600"
          />
        </div>

        {/* TITLE */}
        <h2
          className="
            mt-7
            text-[30px]
            leading-[1.05]
            font-semibold
            uppercase
            tracking-tight
            text-black
          "
        >
          {service.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            text-[16px]
            leading-relaxed
            text-gray-600
          "
        >
          {service.desc}
        </p>

        {/* POINTS */}
        <ul className="mt-7 space-y-4">
          {service.points.map((point, i) => (
            <li
              key={i}
              className="
                flex
                items-start
                gap-3
                text-[15px]
                leading-relaxed
                text-gray-800
              "
            >
              <div
                className="
                  mt-1
                  w-5
                  h-5
                  shrink-0
                  rounded-md
                  border
                  border-blue-600
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  text-xs
                  font-bold
                "
              >
                ✓
              </div>

              <span>{point}</span>
            </li>
          ))}
        </ul>

      </motion.div>
    );
  })}

</div>

</div>
    </section>
  );
}