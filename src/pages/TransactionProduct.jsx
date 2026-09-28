import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Activity,
  Zap,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";

import TransactionImg from "../assets/Transaction.png";

export default function TransactionProduct() {
  const navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 relative overflow-hidden"
    >
      {/* ── BACKGROUND GRID & TEXTURE (Matches Transaction.png ivory texture) ── */}
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

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 pt-28 md:pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Homepage Headline Typography & Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* YELLOW ACCENT AREA #1: Hero Top Badge (Subtle Light Yellow Small Space) */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/50 text-amber-950 border border-amber-300/70 text-xs font-semibold tracking-wide shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              ⚡ Real-Time Transaction Threat Prevention
            </div>

            {/* HEADLINE WITH STATIC HERO TEXT */}
            <h1 className="text-black font-light tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl flex flex-wrap items-baseline gap-x-2">
              <span>Secure</span>
              <span className="text-blue-600 font-light">Web3 Protocols</span>
              <div className="w-full mt-2 text-black font-light">
                Transaction Fraud Detection.
              </div>
            </h1>

            {/* HOMEPAGE TAGLINE */}
            <p className="mt-6 text-zinc-700 text-base md:text-xl font-light leading-relaxed max-w-xl">
              Build secure systems. Launch trusted Web3 protocols with confidence. Stop malicious zero-day drainers, phishing signatures, and smart contract exploits before execution.
            </p>

            {/* CTA BUTTONS (White and Black High-Contrast Design) */}
            <div className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <button
                onClick={() => navigate("/request-a-quote")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                Request Fraud Audit
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  document.getElementById("threat-detection-flow")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-sm transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap size={16} className="text-zinc-700" />
                Explore Threat Flow
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Transaction.png Image Prominently Displayed */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl group">
              {/* Outer Glow / Glass Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-black/10 via-zinc-400/20 to-black/10 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-white p-2.5 sm:p-4 border border-zinc-300/90 shadow-2xl overflow-hidden">
                {/* Header bar matching white & black aesthetic */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-zinc-500 font-light">BlocNexus Transaction Security Engine</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 bg-black text-white rounded">LIVE SHIELD</span>
                </div>

                {/* Main Image Asset */}
                <img
                  src={TransactionImg}
                  alt="BlocNexus Transaction Fraud Detection Engine"
                  className="w-full h-auto rounded-xl object-contain shadow-sm border border-zinc-200 transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── THREAT DETECTION PROCESS FLOW (Dark Container Box) ── */}
      <section id="threat-detection-flow" className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-2xl">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                <Terminal size={14} className="text-white" />
                Detection Pipeline
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                How We Detect & Prevent Transaction Threats
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
              Our 4-stage automated security pipeline analyzes every transaction payload in real-time before block inclusion.
            </p>
          </div>

          {/* PROCESS FLOW DIAGRAM & STEP MATRIX */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

            {/* Step 1 */}
            <div className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-sm">
                    01
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                    INGESTION
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-200">
                  Mempool & Signature Interception
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Captures unconfirmed transaction raw hex, off-chain EIP-712 signatures, and permit allowances directly at the dApp RPC layer.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1"><Activity size={12} /> RPC Relay</span>
                <span className="text-emerald-400">Captured</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-sm">
                    02
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                    SIMULATION
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-200">
                  Fork-State Execution Trace
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Simulates full execution in an isolated EVM sandbox against current mainnet state, tracking all internal call paths and balance shifts.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1"><Cpu size={12} /> EVM Sandbox</span>
                <span className="text-emerald-400">Trace Ready</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-sm">
                    03
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                    AI HEURISTICS
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-200">
                  Threat & Malicious Pattern Match
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Cross-checks call traces against active drainer bytecodes, unverified proxy spenders, infinite approval vectors, and zero-day databases.
                </p>

                {/* YELLOW ACCENT AREA #2: Step 3 Threat Highlight Callout (Light Yellow Accent Space) */}
                <div className="mt-4 p-3 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 text-xs font-medium flex items-center gap-2 shadow-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Flags approval hijacking & proxy drainers</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1"><ShieldAlert size={12} /> AI Scanner</span>
                <span className="text-amber-400">Pattern Verified</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-sm">
                    04
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                    VERDICT
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-200">
                  Real-Time Shield & Circuit Breaker
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Delivers instant PASS/BLOCK verdict to the user interface and triggers automated emergency pause hooks on high-risk protocol calls.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Action Engine</span>
                <span className="text-emerald-400">Threat Mitigated</span>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* ── CORE FEATURES (High-Contrast White & Black Card Grid) ── */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            Complete Threat Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight">
            How We Prevent Transaction Fraud
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Multi-layered transaction security engine operating directly at the mempool and wallet RPC layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                Drainer & Phishing Guard
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                Scans contract bytecodes and function selector patterns to detect known malicious drainer templates, fake NFT mints, and social engineering landmines.
              </p>
            </div>

            {/* YELLOW ACCENT AREA #3: Feature Highlight Pill (Subtle Light Yellow Accent Space) */}
            <div className="mt-6 pt-4 border-t border-zinc-100">
              <div className="p-3 rounded-xl bg-yellow-200/40 border border-yellow-300/60 text-yellow-950 flex items-center justify-between text-xs font-medium">
                <span className="font-semibold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700" /> Mempool Phishing Shield
                </span>
                <span className="px-2.5 py-0.5 bg-yellow-300/80 text-yellow-950 rounded font-mono text-[11px] font-bold">
                  Sub-10ms Scan
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                Simulated Execution Trace
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                Fork-simulates transaction calls against latest block state to reveal exact asset balance changes, token approvals, and state modifications before signing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>FORK SIMULATION</span>
              <span className="text-black font-semibold">ZERO RISKS</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                Permit & Allowance Shield
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                Prevents infinite allowance exploits and signature-based `permit2` hijacking by enforcing granular permission scopes and automated revokes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>EVM + SOLANA</span>
              <span className="text-black font-semibold">100% COVERAGE</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA BANNER (Dark Black & White Contrast) ── */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
              Ready to Protect Your Protocol Transactions?
            </h2>
            <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
              Get an institutional security audit or integrate our transaction fraud detection API into your dApp wallet layer today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center shrink-0">
            <button
              onClick={() => navigate("/request-a-quote")}
              className="px-8 py-4 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-sm transition cursor-pointer shadow-lg"
            >
              Get Started Now
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-white text-zinc-300 font-light text-sm transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
