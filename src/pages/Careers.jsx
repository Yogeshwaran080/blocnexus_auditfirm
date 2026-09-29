import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, ArrowRight, ShieldCheck, Cpu, Code2, MapPin, Clock, Zap, CheckCircle2, Building2 } from "lucide-react";
import AuditImg from "../assets/audit.png";
import SEO from "../components/SEO";

export default function Careers() {
  const navigate = useNavigate();

  const openPositions = [
    {
      title: "Senior Smart Contract Auditor",
      department: "Security Research",
      type: "Full-Time",
      location: "Remote / Hybrid",
      desc: "Lead line-by-line manual code audits, formal verification proofs, and vulnerability assessments for tier-1 Web3 DeFi protocols."
    },
    {
      title: "Protocol Penetration Tester",
      department: "Offensive Security",
      type: "Full-Time",
      location: "Remote",
      desc: "Simulate adversarial black-box & white-box attacks against cross-chain bridges, dApp frontends, and mempool RPC relays."
    },
    {
      title: "EVM Security Engineer & Fuzzer",
      department: "Tooling & Infrastructure",
      type: "Full-Time",
      location: "Remote",
      desc: "Develop automated invariant fuzzing tools, static analysis engines, and real-time on-chain transaction monitoring bots."
    },
    {
      title: "Security Operations Specialist",
      department: "Incident Response",
      type: "Full-Time",
      location: "Remote",
      desc: "Manage 24/7 mempool threat monitoring alerts, coordinate white-hat fund rescue operations, and triage bug bounty reports."
    }
  ];

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 relative overflow-hidden pt-28 md:pt-36 pb-24"
    >
      <SEO
        title="Careers at BlocNexus | Join Our Web3 Security Research Team"
        description="Join BlocNexus as a Smart Contract Auditor, Security Researcher, or Penetration Tester. Help protect billions of dollars in Web3 digital assets."
        keywords="Web3 careers, smart contract auditor jobs, blockchain security jobs, Web3 pentester careers"
        canonical="/careers"
      />
      {/* ── BACKGROUND GRID & TEXTURE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px"
        }}
      />

      {/* ── OPEN POSITIONS GRID ── */}
      <section id="open-positions" className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8 border-b border-zinc-300 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 mb-3 shadow-2xs">
              <Briefcase size={14} className="text-black" /> Join Our Team
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-black tracking-tight">
              Current Open Roles
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 font-light">{openPositions.length} Active Openings</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openPositions.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200 group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-medium px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full border border-zinc-200">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 font-light">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-light text-black tracking-tight mb-2 group-hover:text-blue-600 transition">
                  {job.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                  {job.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Accepting Applications
                </span>
                <button
                  onClick={() => {
                    navigate(`/apply?role=${encodeURIComponent(job.title)}`);
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                  className="px-4 py-2 bg-black text-white hover:bg-zinc-800 rounded-lg text-xs font-light transition cursor-pointer flex items-center gap-1"
                >
                  Apply Now <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}