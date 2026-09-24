import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileSearch,
  Target,
  Code2,
  ScanLine,
  ArrowUpRight,
} from "lucide-react";

export default memo(function AuditSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileSearch,
      title: "Smart Contract Audit",
      label: "AUDIT",
      action: "Get Audit",
      desc:
        "Deep manual + automated inspection of smart contracts to detect critical vulnerabilities before mainnet deployment.",
      points: [
        "Reentrancy, overflow & logic flaw detection",
        "MEV & front-running risk analysis",
        "Gas optimization & execution efficiency",
      ],
    },
    {
      icon: Target,
      title: "Penetration Testing",
      label: "PENTEST",
      action: "Get PenTest",
      desc:
        "Real-world adversarial simulation to evaluate how your protocol behaves under active exploitation attempts.",
      points: [
        "Attacker modeling (white/gray/black box)",
        "Flash loan & oracle manipulation testing",
        "Liquidity drain & staking exploit simulation",
      ],
    },
    {
      icon: Code2,
      title: "Code Review & Architecture",
      label: "CODE REVIEW",
      action: "Get Code Review",
      desc:
        "Full-stack security + architecture review ensuring scalability, upgrade safety, and production readiness.",
      points: [
        "Smart contract design pattern validation",
        "Upgradeable proxy risk assessment",
        "Access control & privilege escalation checks",
      ],
    },
    {
      icon: ScanLine,
      title: "Static Analysis & Monitoring",
      label: "MONITORING",
      action: "Get Monitoring",
      desc:
        "Automated vulnerability scanning with continuous monitoring to detect risks before attackers exploit them.",
      points: [
        "Static analysis (Slither-style detection)",
        "Dependency & library risk tracking",
        "Continuous post-deployment monitoring",
      ],
    },
  ];

  const handleActionClick = useCallback(() => {
    navigate("/request-a-quote#quote");
  }, [navigate]);

  return (
    <section
      id="services"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8F9FA] border border-[#EBEBEB] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[28px] flex flex-col justify-between hover:border-gray-300 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="text-[12px] sm:text-[13px] font-light tracking-widest text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-light tracking-[0.2em] uppercase text-gray-400">
                      {service.label}
                    </span>
                  </div>

                  <Icon
                    size={36}
                    className="text-gray-900 mb-5 opacity-80"
                    strokeWidth={1.2}
                  />

                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 uppercase tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed text-[14px] sm:text-[15px] font-light">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-gray-700 font-light text-[13px] sm:text-[14px]"
                      >
                        <span className="text-gray-400 text-xs">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACTION BUTTON */}
                <button
                  onClick={handleActionClick}
                  className="group flex items-center justify-between bg-[#EFEFEF] hover:bg-[#E5E5E5] text-gray-900 px-5 py-3.5 rounded-full w-full font-light transition-all duration-300 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm">{service.action}</span>

                  <div className="bg-black text-white p-1.5 rounded-full transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
})