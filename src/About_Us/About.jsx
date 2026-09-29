import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Cpu,
  Activity,
  ArrowRight,
  Building2,
  Globe,
  Terminal,
  Zap,
  CheckCircle2,
  FileCode2,
  Layers,
  Search
} from "lucide-react";

import AuditImg from "../assets/audit.png";
import TransactionImg from "../assets/Transaction.png";
import AuditLogoImg from "../assets/audit_logo.png";
import HeroImg from "../assets/hero.png";

export default function About() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 pt-28 md:pt-36 pb-24 relative overflow-hidden"
    >
      <SEO
        title="About BlocNexus | Tier-1 Web3 Cybersecurity & Smart Contract Audit Firm"
        description="BlocNexus is an elite Web3 cybersecurity firm protecting global financial institutions, protocol treasuries, and decentralized finance markets with formal verification and real-time threat prevention."
        keywords="About BlocNexus, Web3 security firm, institutional blockchain security, smart contract audit team, financial technology security"
        canonical="/about-us"
      />

      {/* ── BACKGROUND GRID & TEXTURE (Matches Hero Section) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px"
        }}
      />

      {/* ── HERO SECTION: INSTITUTIONAL MANDATE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-300/80 text-xs font-mono uppercase tracking-wider text-zinc-800 shadow-xs mb-6">
            <Building2 size={14} className="text-black" /> Institutional Mandate & Security Vision
          </div>

          <h1 className="text-black font-light tracking-tight leading-[1.08] text-3xl sm:text-5xl lg:text-6xl">
            Architected to Protect <span className="font-normal text-blue-600">Financial Institutions</span> & Decentralized Capital Markets.
          </h1>

          <p className="mt-6 text-zinc-700 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            BlocNexus was established on a singular institutional mandate: to engineer bulletproof security frameworks for financial entities, digital asset treasuries, protocol architects, and decentralized liquidity networks worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              to="/request-a-quote"
              className="px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2"
            >
              Request an Audit Scope <ArrowRight size={16} />
            </Link>

            <Link
              to="/smart-contract-auditing"
              className="px-8 py-4 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-sm transition-all duration-200 shadow-xs flex items-center justify-center gap-2"
            >
              Explore Audit Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISUAL INSTITUTIONAL REFERENCE SECTION (NEW YORK / WALL STREET SECURITY LAB AESTHETIC) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Container */}
          <div className="lg:col-span-7 relative bg-white rounded-3xl p-4 md:p-6 border border-zinc-300 shadow-xl overflow-hidden group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-900">
              <img
                src={AuditImg}
                alt="BlocNexus Financial Security Operations Lab"
                className="w-full h-[320px] sm:h-[420px] object-cover filter contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  Global Headquarters & Security Research Lab
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                  Wall Street & Institutional Digital Asset Safeguards
                </h3>
              </div>
            </div>

            {/* Overlaid Float Metric Card */}
            <div className="hidden sm:flex absolute bottom-8 right-8 bg-black/90 text-white p-5 rounded-2xl border border-zinc-800 backdrop-blur-md shadow-2xl items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                SLA
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Zero-Day Defense</p>
                <p className="text-sm font-light text-white mt-0.5">&lt; 10ms Real-Time Mempool Interception</p>
              </div>
            </div>
          </div>

          {/* Secondary Visual Info Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-zinc-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-5">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                Securing Sovereign & Enterprise Capital
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                As traditional financial entities deploy on-chain liquidity, smart contract security is no longer an optional code review — it is the cornerstone of global financial stability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-zinc-300 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-5">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                Defense-in-Depth Engineering
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                We combine line-by-line manual code audits, formal mathematical invariant proofs, and automated mempool threat detection to ensure capital remains immune to adversary attacks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── OUR VISION & PHILOSOPHY: DEEP READABLE CONTENT ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-300 shadow-lg">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              01 // Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-black tracking-tight mt-2 mb-8">
              Why Institutional Protocol Security Demands Rigor Beyond Checklist Audits.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 text-zinc-700 text-base font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                In decentralized finance and Web3 protocol architecture, code is law — but immutable code also means immutable risk. A single logical flaw, un-cached state update, or reentrancy primitive can result in catastrophic capital loss within a single block confirmation.
              </p>
              <p>
                BlocNexus was founded by senior security researchers, cryptography specialists, and EVM offensive security engineers who recognized that automated linters and surface-level audits are inadequate for institutional deployments.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Our security methodology treats every smart contract ecosystem as a mission-critical financial clearing house. We evaluate non-obvious game-theoretic exploits, flash-loan manipulation vectors, cross-chain bridge state forgery, and oracle latency delays before mainnet deployment.
              </p>
              <p>
                By bridging traditional Wall Street quantitative risk governance with state-of-the-art Web3 offensive security research, BlocNexus provides protocols with unyielding architectural confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 4 PILLARS OF OUR SECURITY ARCHITECTURE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            02 // Security Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight mt-2">
            Our Four Pillars of Protocol Defense
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Mathematical Formal Verification",
              desc: "Proving state machine invariants mathematically using formal specification tools to eliminate logic loopholes.",
              icon: Cpu
            },
            {
              num: "02",
              title: "Offensive Penetration & Chaos",
              desc: "Simulating black-box adversarial attacks against RPC nodes, bridge relays, and dApp frontends.",
              icon: ShieldCheck
            },
            {
              num: "03",
              title: "Real-Time Transaction Defense",
              desc: "Sub-millisecond mempool monitoring firewall blocking sandwich attacks, front-running, and malicious calls.",
              icon: Activity
            },
            {
              num: "04",
              title: "Institutional Proxy Governance",
              desc: "Verifying UUPS proxy patterns, Diamond storage safety, and multi-sig emergency timelocks.",
              icon: Lock
            }
          ].map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-zinc-300 shadow-md flex flex-col justify-between hover:border-black transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-zinc-400 font-bold">{pillar.num}</span>
                    <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
                      <IconComponent size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRODUCTS & SECURITY SERVICES ROUTING MATRIX ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              03 // Product & Service Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-2">
              Integrated Security Infrastructure for Web3 Systems
            </h2>
            <p className="mt-3 text-zinc-400 text-sm font-light leading-relaxed">
              Explore our specialized security products and auditing services built for financial protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Smart Contract Auditing", desc: "Line-by-line manual reviews & formal verification proofs.", path: "/smart-contract-auditing" },
              { title: "Transaction Threat Prevention", desc: "Real-time mempool protection firewall against MEV & drainers.", path: "/transaction" },
              { title: "Wallet & dApp Detection", desc: "Protection against signature hijacking & zero-day drainers.", path: "/wallet-detection" },
              { title: "Gas Optimization Profiling", desc: "Reduce EVM gas consumption by up to 40% with storage packing.", path: "/gas-optimization" },
              { title: "Find Flaws in Contract", desc: "Automated vulnerability & invariant fuzzing scanner.", path: "/find-flaws" },
              { title: "Penetration Testing", desc: "Adversarial attack simulations against bridges & RPC relays.", path: "/penetration-testing" },
            ].map((prod, idx) => (
              <Link
                key={idx}
                to={prod.path}
                className="group bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl hover:border-white transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    {prod.title}
                    <ArrowRight size={16} className="text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-zinc-400 text-xs font-light mt-2 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUANTITATIVE IMPACT METRICS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-300 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            <div className="p-4">
              <h3 className="text-4xl sm:text-5xl font-light text-black tracking-tight font-mono">$1.8B+</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Digital Asset TVL Secured</p>
            </div>
            <div className="p-4 pt-8 lg:pt-4">
              <h3 className="text-4xl sm:text-5xl font-light text-black tracking-tight font-mono">0</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Critical Exploits Post-Audit</p>
            </div>
            <div className="p-4 pt-8 lg:pt-4">
              <h3 className="text-4xl sm:text-5xl font-light text-black tracking-tight font-mono">&lt;10ms</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Mempool Threat Response</p>
            </div>
            <div className="p-4 pt-8 lg:pt-4">
              <h3 className="text-4xl sm:text-5xl font-light text-black tracking-tight font-mono">100+</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Audit Reviews Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL INSTITUTIONAL CTA ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-300 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-black tracking-tight">
              Ready to Secure Your Protocol Architecture?
            </h2>
            <p className="mt-2 text-zinc-600 text-sm font-light">
              Connect with our senior security research team for confidential scoping and timelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center shrink-0">
            <Link
              to="/request-a-quote"
              className="px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition shadow-md flex items-center gap-2"
            >
              Get Started Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}