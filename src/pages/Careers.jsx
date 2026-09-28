import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Briefcase, ArrowRight, ShieldCheck, Cpu, Code2, MapPin, Clock, Zap, CheckCircle2 } from "lucide-react";
import ProductServiceTemplate from "./ProductServiceTemplate";
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
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 relative overflow-hidden"
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

      {/* ── HERO SECTION ──
      <section className="relative z-10 pt-28 md:pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/50 text-amber-950 border border-amber-300/70 text-xs font-semibold tracking-wide shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              ⚡ Join Our Web3 Security Team
            </div>

            <h1 className="text-black font-light tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl">
              Build the Future of <span className="text-blue-600 font-light">Web3 Security</span>
            </h1>

            <p className="mt-6 text-zinc-700 text-base md:text-xl font-light leading-relaxed max-w-xl">
              We are hiring world-class security researchers, smart contract auditors, and offensive security engineers to protect billion-dollar protocols.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <button
                onClick={() => {
                  document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                View Open Positions
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate("/request-a-quote")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-sm transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-black/10 via-zinc-400/20 to-black/10 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-white p-4 border border-zinc-300/90 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-zinc-500 font-light">Security Research Division</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 bg-black text-white rounded">HIRING NOW</span>
                </div>

                <img
                  src={AuditImg}
                  alt="Security Engineering Team"
                  className="w-full h-auto rounded-xl object-contain shadow-sm border border-zinc-200 transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </section> */}

      {/* ── OPEN POSITIONS ── */}
      <section id="open-positions" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* <span className="text-xs font-mono font-medium tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            Career Opportunities
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight">
            Explore Open Security Roles
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Work with elite researchers solving complex smart contract security, zero-day threat detection, and cryptography challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openPositions.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full border border-zinc-200">
                    {job.department}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 font-light">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-black tracking-tight mb-2 group-hover:text-blue-600 transition">
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
                  onClick={() => navigate("/request-a-quote")}
                  className="px-4 py-2 bg-black text-white hover:bg-zinc-800 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1"
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
