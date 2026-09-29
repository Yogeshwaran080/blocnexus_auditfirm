import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  Globe,
  ArrowRight,
  Cpu,
  Activity,
  Lock,
  Zap,
  CheckCircle2,
  ShieldAlert,
  Search,
  Layers
} from "lucide-react";

import FinancialBuildingImg from "../assets/financial_building.jpg";
import SecurityCenterImg from "../assets/security_center.jpg";

export default function About() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 pt-28 md:pt-36 pb-24 relative overflow-hidden"
    >
      <SEO
        title="About BlocNexus | Web3 Security Layer for Global Financial Institutions"
        description="BlocNexus provides the security layer for Web3 and financial institutions, safeguarding smart contracts, digital asset treasuries, and decentralized protocols with real-time threat prevention."
        keywords="About BlocNexus, Blockaid alternative, Web3 security firm, institutional smart contract audit, blockchain financial security"
        canonical="/about-us"
      />

      {/* ── BACKGROUND GRID OVERLAY (Blockaid Clean Aesthetic) ── */}
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

      {/* ── 1. HERO SECTION: THE SECURITY LAYER FOR WEB3 & FINANCE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-300/80 text-xs font-mono uppercase tracking-wider text-zinc-800 shadow-xs mb-6">
            <Building2 size={14} className="text-black" /> About BlocNexus Security
          </div>

          <h1 className="text-black font-light tracking-tight leading-[1.08] text-3xl sm:text-5xl lg:text-6xl">
            Building the Security Layer for <span className="font-normal text-blue-600">Web3</span> & Global Financial Ecosystems.
          </h1>

          <p className="mt-6 text-zinc-700 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            BlocNexus protects protocol developers, Web3 wallets, and financial institutions from malicious transactions, smart contract exploits, and zero-day threat campaigns before execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              to="/request-a-quote"
              className="px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition shadow-md flex items-center gap-2"
            >
              Request an Audit Scope <ArrowRight size={16} />
            </Link>

            <Link
              to="/smart-contract-auditing"
              className="px-8 py-4 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-sm transition shadow-xs flex items-center gap-2"
            >
              Explore Security Suite
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BAR (BLOCKAID STYLE STATS) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-300 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            <div className="p-2">
              <h3 className="text-3xl sm:text-5xl font-light text-black tracking-tight font-mono">$1.8B+</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Digital Assets Protected</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <h3 className="text-3xl sm:text-5xl font-light text-black tracking-tight font-mono">100M+</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Transactions Scanned</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <h3 className="text-3xl sm:text-5xl font-light text-black tracking-tight font-mono">&lt; 10ms</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Mempool Threat Response</p>
            </div>
            <div className="p-2 pt-6 lg:pt-2">
              <h3 className="text-3xl sm:text-5xl font-light text-black tracking-tight font-mono">0</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light">Critical Post-Audit Exploits</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR MANDATE & ORIGIN: FEDERAL RESERVE & WALL STREET INSTITUTION IMAGE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              01 // Institutional Mandate
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight">
              Bridging Sovereign Banking Rigor with Decentralized Technology.
            </h2>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              As sovereign wealth funds, tier-1 financial institutions, and global clearing banks transition asset settlement onto public and private blockchains, conventional IT security models fall short. In Web3, transactions are irreversible — a single logical vulnerability can drain liquid capital in seconds.
            </p>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              BlocNexus was constructed to give financial entities and decentralized protocol architects defense-grade confidence. We combine line-by-line manual audit precision, formal mathematical invariant proofs, and real-time transaction firewalls to secure capital at scale.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-black">
                <CheckCircle2 size={18} className="text-emerald-600" /> Federal Reserve Security Standards
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-black">
                <CheckCircle2 size={18} className="text-emerald-600" /> Zero-Trust Architecture
              </div>
            </div>
          </div>

          {/* Right Natural Federal Reserve / Financial District Building Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl group bg-zinc-900">
              <img
                src={FinancialBuildingImg}
                alt="Federal Reserve and Wall Street Institutional Building Security Architecture"
                className="w-full h-[380px] sm:h-[480px] object-cover filter contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  New York Financial District // Security Operations Base
                </span>
                <p className="text-sm font-light text-white mt-1">
                  Engineered to meet Wall Street institutional risk controls and sovereign digital asset standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. REAL-TIME THREAT INTELLIGENCE & COMMAND CENTER IMAGE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Command Center Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl group bg-zinc-900">
              <img
                src={SecurityCenterImg}
                alt="BlocNexus Real-Time Threat Intelligence & Security Control Center"
                className="w-full h-[380px] sm:h-[480px] object-cover filter contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  Sub-Millisecond Mempool Telemetry & Threat Surveillance
                </span>
                <p className="text-sm font-light text-white mt-1">
                  Real-time transaction simulation engines inspecting bytecode signatures before block inclusion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Intelligence Narrative Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              02 // Threat Intelligence Engine
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight">
              Proactive Protection Before Transactions Touch the Blockchain.
            </h2>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              Reactive security is obsolete. By the time an exploit is confirmed on-chain, millions in liquidity are lost. BlocNexus operates a continuous mempool surveillance engine that simulates incoming call payloads against live state forks in real time.
            </p>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              Our automated threat engine surfaces EIP-712 signature hijacking, setApprovalForAll drainers, front-running sandwich bots, and malicious dApp redirects before end users or protocol contracts sign execution payloads.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-zinc-300">
                <span className="text-xs font-mono text-zinc-500 block">SIMULATION SPEED</span>
                <span className="text-lg font-mono font-medium text-black">&lt; 10 Milliseconds</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-zinc-300">
                <span className="text-xs font-mono text-zinc-500 block">COVERAGE</span>
                <span className="text-lg font-mono font-medium text-black">EVM + Solana + Layer 2s</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. CORE OPERATIONAL VALUES (BLOCKAID FOUR CARDS) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            03 // Operational Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight mt-2">
            Built on Uncompromising Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Zero False Positives",
              desc: "Deep bytecode analysis and symbolic solvers ensure high-fidelity threat detection without blocking legitimate protocol activity.",
              icon: ShieldCheck
            },
            {
              title: "Sub-Millisecond Velocity",
              desc: "Lightning-fast RPC relays and simulation node clusters designed for high-frequency trading and DeFi protocols.",
              icon: Zap
            },
            {
              title: "Proactive Vulnerability Scans",
              desc: "Surfacing logic flaws, reentrancy vectors, and proxy storage collisions prior to mainnet deployment.",
              icon: Search
            },
            {
              title: "Institutional Transparency",
              desc: "Clear CVSS risk scoring, line-by-line patch guidance, and reproducible proof-of-concept test suites.",
              icon: Lock
            }
          ].map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-zinc-300 shadow-md flex flex-col justify-between hover:border-black transition duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-black tracking-tight mb-2">
                    {val.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 6. PRODUCTS & SERVICES SUITE ROUTING GRID ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              04 // Complete Security Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-2">
              Explore BlocNexus Products & Auditing Services
            </h2>
            <p className="mt-3 text-zinc-400 text-sm font-light leading-relaxed">
              Modular security solutions built for protocol developers, liquidity pools, and institutional digital asset managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Smart Contract Auditing", desc: "Manual code reviews & formal verification proofs.", path: "/smart-contract-auditing" },
              { title: "Transaction Threat Prevention", desc: "Real-time mempool protection firewall.", path: "/transaction" },
              { title: "Wallet & dApp Detection", desc: "Signature drainer shield & phishing protection.", path: "/wallet-detection" },
              { title: "NFT Security Scanner", desc: "Malicious airdrop & setApprovalForAll protection.", path: "/nft-detection" },
              { title: "Gas Optimization Profiler", desc: "Reduce contract gas fees by up to 40%.", path: "/gas-optimization" },
              { title: "Find Flaws in Contract", desc: "Automated vulnerability & invariant fuzzing.", path: "/find-flaws" },
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

      {/* ── 7. FINAL INSTITUTIONAL CTA BANNER ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-300 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-black tracking-tight">
              Ready to Secure Your Protocol Infrastructure?
            </h2>
            <p className="mt-2 text-zinc-600 text-sm font-light">
              Schedule a confidential scoping session with our senior security research team.
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