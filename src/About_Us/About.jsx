import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  ArrowRight,
  Zap,
  CheckCircle2,
  Lock,
  Search
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
        title="About BlocNexus | Institutional Web3 Security for Financial Systems"
        description="BlocNexus provides zero-trust Web3 security infrastructure and auditing for financial institutions, digital asset treasuries, and decentralized protocols."
        keywords="About BlocNexus, institutional smart contract audit, financial technology security, blockchain security firm"
        canonical="/about-us"
      />

      {/* ── BACKGROUND GRID OVERLAY (Pure Neutral Grayscale) ── */}
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

      {/* ── 1. INSTITUTIONAL MANDATE: REAL BANK BUILDING IMAGE (NO HERO BANNER) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column (Strictly Black & White) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              01 // Institutional Security Mandate
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-[1.1]">
              Bridging Sovereign Banking Rigor with Decentralized Technology.
            </h1>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              As sovereign wealth funds, tier-1 financial institutions, and global clearing banks transition asset settlement onto public and private blockchains, conventional IT security models fall short. In Web3, transactions are irreversible — a single logical vulnerability can drain liquid capital in seconds.
            </p>
            <p className="text-zinc-700 text-base font-light leading-relaxed">
              BlocNexus was constructed to give financial entities and decentralized protocol architects defense-grade confidence. We combine line-by-line manual audit precision, formal mathematical invariant proofs, and real-time transaction firewalls to secure capital at scale.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-black">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-black" /> Federal Reserve Security Standards
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 size={18} className="text-black" /> Zero-Trust Architecture
              </div>
            </div>
          </div>

          {/* Right Real Financial Bank Building Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl bg-zinc-900">
              <img
                src={FinancialBuildingImg}
                alt="Federal Reserve and Wall Street Institutional Building Architecture"
                className="w-full h-[380px] sm:h-[480px] object-cover filter contrast-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
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

      {/* ── 2. THREAT INTELLIGENCE & REAL CONTROL CENTER IMAGE ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Real Control Center Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl bg-zinc-900">
              <img
                src={SecurityCenterImg}
                alt="BlocNexus Real-Time Threat Intelligence & Security Control Center"
                className="w-full h-[380px] sm:h-[480px] object-cover filter contrast-110 brightness-95"
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

          {/* Right Narrative Column (Black & White) */}
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
                <span className="text-base font-mono font-medium text-black">&lt; 10 Milliseconds</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-zinc-300">
                <span className="text-xs font-mono text-zinc-500 block">COVERAGE</span>
                <span className="text-base font-mono font-medium text-black">EVM + Solana + Layer 2s</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. OPERATIONAL PRINCIPLES (SECTION 03) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-24">
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

      {/* ── 4. FINAL CTA BANNER (DIRECTLY AFTER OPERATIONAL PRINCIPLES - NO OTHER SECTIONS) ── */}
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