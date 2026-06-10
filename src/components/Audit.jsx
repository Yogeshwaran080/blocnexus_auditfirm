import { motion } from "framer-motion";
import { FileSearch, Target, Code2, ScanLine, ArrowUpRight } from "lucide-react";

export default function SolutionsSection() {
  const services = [
    {
      icon: FileSearch,
      title: "Smart Contract Audit",
      label: "AUDIT",
      action: "Get Audit",
      desc: "Deep manual + automated inspection of smart contracts to detect critical vulnerabilities before mainnet deployment.",
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
      desc: "Real-world adversarial simulation to evaluate how your protocol behaves under active exploitation attempts.",
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
      desc: "Full-stack security + architecture review ensuring scalability, upgrade safety, and production readiness.",
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
      desc: "Automated vulnerability scanning with continuous monitoring to detect risks before attackers exploit them.",
      points: [
        "Static analysis (Slither-style detection)",
        "Dependency & library risk tracking",
        "Continuous post-deployment monitoring",
      ],
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-16 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FA] border border-[#EBEBEB] p-8 md:p-10 rounded-[32px] flex flex-col justify-between hover:border-gray-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[13px] font-bold tracking-widest text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                      {service.label}
                    </span>
                  </div>

                  <Icon size={40} className="text-gray-900 mb-6" strokeWidth={1.5} />
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-[16px]">
                    {service.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-[15px]">
                        <span className="text-gray-400">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UNIQUE ACTION BUTTON */}
                <button className="group flex items-center justify-between bg-[#EFEFEF] hover:bg-[#E5E5E5] text-gray-900 px-6 py-4 rounded-full w-full font-semibold transition-all duration-300">
                  <span>{service.action}</span>
                  <div className="bg-black text-white p-2 rounded-full transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}