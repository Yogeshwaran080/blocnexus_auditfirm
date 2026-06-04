import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  FileSearch,
  Code2,
  ScanLine,
  Radar,
  Bug,
  Lock,
  Shield,
} from "lucide-react";

export default function SolutionsSection() {
  const [active, setActive] = useState(0);

  const services = {
    audit: {
      icon: FileSearch,
      t: "Smart Contract Audit",
      d: "Deep vulnerability analysis",
    },
    pentest: {
      icon: Target,
      t: "Penetration Testing",
      d: "Real-world attack simulation",
    },
    code: {
      icon: Code2,
      t: "Code Review",
      d: "Manual + automated inspection",
    },
    static: {
      icon: ScanLine,
      t: "Static Analysis",
      d: "Detect unsafe patterns in code",
    },
    threat: {
      icon: Radar,
      t: "Threat Modeling",
      d: "Pre-deployment attack mapping",
    },
    bugbounty: {
      icon: Bug,
      t: "Bug Bounty Simulation",
      d: "Crowdsourced attack testing",
    },
    exploit: {
      icon: Lock,
      t: "Exploit Detection",
      d: "Detect vulnerabilities early",
    },
    hardening: {
      icon: Shield,
      t: "Protocol Hardening",
      d: "Enterprise-grade security strengthening",
    },
  };

  const categories = [
    {
      title: "For Enterprises",
      desc: "Institutional-grade security and risk management.",
      items: [
        services.audit,
        services.pentest,
        services.hardening,
        services.code,
      ],
    },
    {
      title: "For Web3 Projects",
      desc: "Secure deployment from launch to scale.",
      items: [
        services.audit,
        services.code,
        services.static,
        services.threat,
      ],
    },
    {
      title: "For Exchanges & Protocols",
      desc: "Continuous monitoring and threat protection.",
      items: [
        services.pentest,
        services.bugbounty,
        services.exploit,
        services.audit,
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-14 px-6 md:px-16">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 leading-tight">
          Solutions <span className="text-blue-600">for All</span>
        </h1>

        <p className="mt-3 text-gray-700 text-xl max-w-2xl leading-relaxed">
          Security, compliance, and risk detection for every stage of your Web3 journey.
        </p>
      </div>

      {/* GRID (same size preserved) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 h-[420px]">
        
        {/* LEFT SIDE */}
        <div className="grid grid-rows-3 gap-2 h-full">
          {categories.map((c, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-md border transition px-4 py-3 flex flex-col justify-center
              ${
                active === i
                  ? "border-blue-500 bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                {c.title}
              </h3>
              <p className="text-base text-gray-600 mt-1 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="contents"
            >
              {Array.from({ length: 4 }).map((_, idx) => {
                const item = categories[active].items[idx];

                if (!item) {
                  return (
                    <div
                      key={idx}
                      className="border border-gray-100 rounded-md"
                    />
                  );
                }

                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-md px-3 py-3 flex flex-col justify-center gap-1 hover:border-gray-400 transition"
                  >
                    <Icon className="text-gray-700" size={20} />

                    <h4 className="font-semibold text-base text-gray-900 leading-snug">
                      {item.t}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}