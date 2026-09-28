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
  Layers,
  Search,
  CheckCircle2,
  FileCode,
  Lock,
  Target,
  BrainCircuit,
  Fuel,
  ImageOff,
  Wallet
} from "lucide-react";

import TransactionImg from "../assets/Transaction.png";
import AuditImg from "../assets/audit.png";
import AuditLogoImg from "../assets/audit_logo.png";
import HeroImg from "../assets/hero.png";
import BlocLogoImg from "../assets/Blocnexus_logo.png";

export default function ProductServiceTemplate({
  title = "Wallet Detection",
  badgeText = "⚡ Real-Time Wallet Security & Malicious dApp Protection",
  staticHeroText = "Web3 Protocols",
  description = "Protect end-user wallets and Web3 protocols from malicious approval signatures, zero-day drainers, and fake dApp frontends.",
  gridSize = "35px 35px",
  heroImage = AuditLogoImg,
  pipelineTitle = "How We Secure Wallets & Protocols",
  pipelineDesc = "Our 4-stage automated security pipeline analyzes every transaction payload and dApp connection before execution.",
  steps = [
    { num: "01", category: "DETECTION", title: "RPC Connection & Signature Interception", desc: "Monitors dApp connection requests, EIP-712 permit signatures, and RPC method calls.", tagIcon: Activity, tagLabel: "RPC Relay", status: "Active" },
    { num: "02", category: "ANALYSIS", title: "Smart Contract & Bytecode Scanning", desc: "Decompiles target dApp contract bytecode to verify ABI authenticity and flag unverified proxy spenders.", tagIcon: Cpu, tagLabel: "EVM Inspector", status: "Verified" },
    { num: "03", category: "AI SHIELD", title: "Phishing & Malicious Database Matching", desc: "Cross-checks domain origins and contract addresses against global blacklists and zero-day threat databases.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Pattern Matched", alertText: "Flags unverified wallet drainers & approval hijacking" },
    { num: "04", category: "VERDICT", title: "Instant Wallet Warning & Protection", desc: "Delivers sub-millisecond risk verdicts to the wallet user and blocks malicious allowance requests.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Shielded" }
  ],
  features = [
    { icon: ShieldAlert, title: "Drainer & Phishing Guard", desc: "Scans contract bytecodes and function selector patterns to detect known drainer templates and social engineering landmines.", highlight: "Mempool Phishing Shield", speed: "Sub-10ms Scan" },
    { icon: Cpu, title: "Simulated Execution Trace", desc: "Fork-simulates transaction calls against latest block state to reveal exact balance changes and token approvals before signing.", highlight: "EVM Sandbox Trace", speed: "Zero Risk" },
    { icon: Layers, title: "Permit & Allowance Shield", desc: "Prevents infinite allowance exploits and signature-based permit hijacking by enforcing granular permission scopes.", highlight: "EVM + Solana", speed: "100% Coverage" }
  ]
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 relative overflow-hidden"
    >
      {/* ── BACKGROUND GRID & TEXTURE (Custom slight grid per page) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: gridSize
        }}
      />

      {/* ── HERO SECTION (Crisp Page Loading) ── */}
      <section className="relative z-10 pt-28 md:pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* YELLOW ACCENT AREA #1 */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/50 text-amber-950 border border-amber-300/70 text-xs font-semibold tracking-wide shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              {badgeText}
            </div>

            {/* HEADLINE WITH STATIC HERO TEXT */}
            <h1 className="text-black font-light tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl flex flex-wrap items-baseline gap-x-2">
              <span>Secure</span>
              <span className="text-blue-600 font-light">{staticHeroText}</span>
              <div className="w-full mt-2 text-black font-light">
                {title}.
              </div>
            </h1>

            {/* TAGLINE */}
            <p className="mt-6 text-zinc-700 text-base md:text-xl font-light leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto">
              <button
                onClick={() => navigate("/request-a-quote")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                Request Consultation
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  document.getElementById("pipeline-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-sm transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap size={16} className="text-zinc-700" />
                Explore Pipeline
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-black/10 via-zinc-400/20 to-black/10 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-4 border border-zinc-300/90 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono text-zinc-500 font-light">{title} Security Engine</span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 bg-black text-white rounded">LIVE SHIELD</span>
                </div>

                <img
                  src={heroImage}
                  alt={`${title} Engine`}
                  className="w-full h-auto max-h-[420px] rounded-xl object-contain shadow-sm border border-zinc-200 transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROCESS PIPELINE (Dark Container Box) ── */}
      <section id="pipeline-section" className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                <Terminal size={14} className="text-white" />
                Security Pipeline
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                {pipelineTitle}
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
              {pipelineDesc}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const TagIcon = step.tagIcon;
              return (
                <div key={idx} className="bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-sm">
                        {step.num}
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-full uppercase">
                        {step.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-zinc-200">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      {step.desc}
                    </p>

                    {/* YELLOW ACCENT AREA #2 */}
                    {step.alertText && (
                      <div className="mt-4 p-3 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 text-xs font-medium flex items-center gap-2 shadow-xs">
                        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>{step.alertText}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1"><TagIcon size={12} /> {step.tagLabel}</span>
                    <span className="text-emerald-400">{step.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── CORE FEATURES GRID ── */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-medium tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            Institutional Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight">
            Comprehensive Web3 Security Features
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Multi-layered security engine built to protect smart contracts, dApps, and protocols against zero-day exploits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-7 border border-zinc-300/80 shadow-md flex flex-col justify-between hover:border-black transition duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                    <FeatIcon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-black tracking-tight mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* YELLOW ACCENT AREA #3 */}
                {idx === 0 ? (
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <div className="p-3 rounded-xl bg-yellow-200/40 border border-yellow-300/60 text-yellow-950 flex items-center justify-between text-xs font-medium">
                      <span className="font-semibold flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-amber-700" /> {feat.highlight}
                      </span>
                      <span className="px-2.5 py-0.5 bg-yellow-300/80 text-yellow-950 rounded font-mono text-[11px] font-bold">
                        {feat.speed}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{feat.highlight}</span>
                    <span className="text-black font-semibold">{feat.speed}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
              Ready to Secure Your {title}?
            </h2>
            <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
              Get an institutional security audit or integrate our security APIs into your protocol architecture today.
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
