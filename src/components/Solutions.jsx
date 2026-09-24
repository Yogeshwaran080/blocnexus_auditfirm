import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

/* ───────────── Chain Logos (SVG icons) ───────────── */
const CHAINS = [
  <svg key="eth" viewBox="0 0 256 417" className="w-3.5 h-3.5"><path fill="#627EEA" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8A92B2" d="M127.962 0L0 212.32l127.962 75.638V154.158z"/><path fill="#627EEA" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/><path fill="#8A92B2" d="M127.962 416.905v-104.72L0 236.585z"/></svg>,
  <svg key="sol" viewBox="0 0 397 311" className="w-3.5 h-3.5"><defs><linearGradient id="sg1" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#00FFA3"/><stop offset="100%" stopColor="#DC1FFF"/></linearGradient></defs><path fill="url(#sg1)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/><path fill="url(#sg1)" d="M64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"/><path fill="url(#sg1)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/></svg>,
  <svg key="btc" viewBox="0 0 24 24" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="12" fill="#F7931A"/><path fill="#FFF" d="M16.2 10.3c.2-1.3-.8-2-2.1-2.5l.4-1.7-1-.3-.4 1.7c-.3-.1-.5-.2-.8-.2l.4-1.7-1-.3-.4 1.7c-.2 0-.5-.1-.7-.2l-1.4-.4-.3 1.1s.7.2.7.2c.4.1.5.3.4.6l-1 4.2c-.1.2-.2.3-.5.2 0 0-.7-.2-.7-.2l-.6 1.3 1.3.3c.2.1.5.1.7.2l-.4 1.8 1 .2.4-1.7c.3.1.5.1.8.2l-.4 1.7 1 .3.4-1.8c1.8.3 3.1.2 3.7-1.4.5-1.2 0-1.9-.9-2.4.6-.3 1.1-.9.9-1.9z"/></svg>,
  <svg key="matic" viewBox="0 0 178 200" className="w-3.5 h-3.5"><path fill="#8247E5" d="M133.5 55.8L89 29.2 44.5 55.8v53.3L89 135.8l44.5-26.7V55.8zm-44.5-53L0 55.8v97.3L89 206l89-52.9V55.8L89 2.8z"/></svg>,
  <svg key="arb" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fill="#28A0F0" d="M12 2L2 19.5h20L12 2zm0 4.2l6.5 11.3H5.5L12 6.2z"/><path fill="#FFF" d="M12 9.5l3.2 5.5H8.8L12 9.5z"/></svg>,
  <svg key="base" viewBox="0 0 115 115" className="w-3.5 h-3.5"><circle cx="57.5" cy="57.5" r="57.5" fill="#0052FF"/><path fill="#FFF" d="M57.5 96c21.263 0 38.5-17.237 38.5-38.5S78.763 19 57.5 19C36.852 19 20 35.312 19.04 55.73h46.85v3.54H19.04C20 79.688 36.852 96 57.5 96z"/></svg>,
  <svg key="op" viewBox="0 0 24 24" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10" fill="#FF0420"/><path fill="#FFF" d="M9.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm5-5.2h2.2v4.8c0 1.3-.9 2.2-2.2 2.2H12.3v-1.8h2.2V8z"/></svg>,
  <svg key="avax" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fill="#E84142" d="M12 2L1 21h22L12 2zm0 5.5l7 12H5l7-12z"/></svg>,
  <svg key="bnb" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fill="#F0B90B" d="M12 3l3.2 3.2-3.2 3.2-3.2-3.2L12 3zm-6.2 6.2l3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2zm12.4 0l3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2zM12 15.4l3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2z"/></svg>,
  <svg key="link" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fill="#375BD2" d="M12 2l8.5 4.9v9.8L12 21.5l-8.5-4.8V6.9L12 2zm0 3.4L6 8.9v6.2l6 3.5 6-3.5V8.9l-6-3.5z"/></svg>,
];

/* ───────────── Canvas Globe Animation ───────────── */
const PureGlobe = memo(function PureGlobe() {
  const canvasRef = useRef(null);
  const visRef = useRef(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    let w, h;
    const setSize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const N = 280;
    const pts = [];
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = PHI * i;
      pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r, node: i % 20 === 0 });
    }

    let rotY = 0;
    const rotX = 0.22;
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    const draw = () => {
      if (!visRef.current) { frameRef.current = requestAnimationFrame(draw); return; }
      rotY += 0.004;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.38;

      // Outer ring
      ctx.strokeStyle = "rgba(256,256,256,0.12)";
      ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.05, 0, Math.PI * 2); ctx.stroke();

      const proj = [];
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        proj.push({ sx: cx + x1 * R, sy: cy + y2 * R, z: z2, node: p.node });
      }
      proj.sort((a, b) => a.z - b.z);

      // Connection lines
      ctx.lineWidth = 0.5;
      const fn = proj.filter(p => p.z > 0.1 && p.node);
      for (let i = 0; i < fn.length; i++) {
        for (let j = i + 1; j < fn.length; j++) {
          const a = fn[i], b = fn[j];
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (d < R * 0.55) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / (R * 0.55)) * 0.15 * a.z})`;
            ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
          }
        }
      }

      // Dots
      for (let i = 0; i < proj.length; i++) {
        const p = proj[i];
        const f = p.z > 0;
        const a = f ? 0.25 + p.z * 0.75 : 0.05 + (p.z + 1) * 0.05;

        if (p.node && f) {
          const nr = 2 + p.z * 1;
          ctx.fillStyle = `rgba(255,255,255,${a * 0.3})`;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, nr * 2, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, nr, 0, Math.PI * 2); ctx.fill();
        } else {
          const dr = f ? 1.1 + p.z * 0.5 : 0.7;
          ctx.fillStyle = f ? `rgba(255,255,255,${a * 0.5})` : `rgba(255,255,255,${a * 0.2})`;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, dr, 0, Math.PI * 2); ctx.fill();
        }
      }
      frameRef.current = requestAnimationFrame(draw);
    };

    const obs = new IntersectionObserver(([e]) => { visRef.current = e.isIntersecting; }, { threshold: 0.1 });
    obs.observe(canvas);
    frameRef.current = requestAnimationFrame(draw);
    const onR = () => setSize();
    window.addEventListener("resize", onR, { passive: true });
    return () => { cancelAnimationFrame(frameRef.current); obs.disconnect(); window.removeEventListener("resize", onR); };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
});

/* ───────────── Orbit Ring ───────────── */
const OrbitRing = memo(function OrbitRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative rounded-full border border-dashed border-white/10" style={{ width: "88%", height: "88%", animation: "spin 38s linear infinite reverse" }}>
        {CHAINS.map((svg, i) => {
          const rad = ((i / CHAINS.length) * 360 * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <div style={{ animation: "spin 38s linear infinite" }}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/80 border border-white/15 shadow-sm flex items-center justify-center">{svg}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

/* ───────────── Solutions Data ───────────── */
const SOLUTIONS = [
  {
    tag: "01",
    title: "Smart Contract Security Audit",
    desc: "Our auditors perform rigorous, line-by-line manual inspection of every smart contract function, paired with formal mathematical verification, to surface critical logic flaws, reentrancy vectors, and economic exploits — before your protocol ever touches mainnet.",
    deliverables: [
      "Vulnerability classification report (Critical / High / Medium / Low)",
      "Formal verification results with proof of invariant correctness",
      "Remediation guidance with code-level fix recommendations",
    ],
    scope: "Solidity • Vyper • Rust (Solana) • Move (Aptos/Sui) • Cairo (StarkNet)",
  },
  {
    tag: "02",
    title: "Protocol Penetration Testing",
    desc: "We simulate real-world adversarial attacks across your entire attack surface — smart contracts, cross-chain bridges, dApp frontends, backend RPC relays, and validator infrastructure — using the same tools and techniques real attackers deploy.",
    deliverables: [
      "Attack narrative report with full exploitation chain documentation",
      "Risk-prioritized findings with CVSS scoring & impact analysis",
      "Post-engagement debrief and validation of applied remediations",
    ],
    scope: "Black Box • Gray Box • White Box • Economic Exploit Simulation",
  },
  {
    tag: "03",
    title: "Code Review & Architecture Assessment",
    desc: "We conduct a full-stack architectural review — validating upgradeable proxy patterns, modular access control hierarchies, cross-contract data flows, and protocol invariant boundaries — to ensure your codebase is production-ready and resistant to systemic failures.",
    deliverables: [
      "Architecture risk matrix covering proxies, governance & state",
      "Upgrade safety assessment for UUPS, Transparent & Diamond proxies",
      "Supply-chain risk analysis across all imported libraries",
    ],
    scope: "EVM Chains • Solana Programs • ZK Circuits • Layer 2 Rollups",
  },
  {
    tag: "04",
    title: "Continuous On-Chain Monitoring",
    desc: "We integrate automated vulnerability scanning into your CI/CD pipeline and deploy real-time on-chain monitoring agents that watch mempool activity, detect anomalous transaction patterns, and trigger circuit breakers before exploits reach block confirmation.",
    deliverables: [
      "24/7 automated threat detection with real-time incident escalation",
      "Mempool surveillance for sandwich attacks & MEV extraction",
      "Automated emergency pause integration with multi-sig approval",
    ],
    scope: "Forta • OpenZeppelin Defender • Custom Monitoring Agents • Tenderly",
  },
  {
    tag: "05",
    title: "Threat Modeling & Economic Simulation",
    desc: "We apply mathematical risk modeling and adversarial game-theory simulations to map cross-protocol contagion paths, MEV extraction opportunities, liquidation cascades, and oracle manipulation vectors — giving your team a complete pre-deployment risk picture.",
    deliverables: [
      "Agent-based economic stress test results under extreme markets",
      "Cross-protocol dependency and composability risk mapping",
      "MEV and oracle manipulation mitigation strategy & roadmap",
    ],
    scope: "DeFi Protocols • AMMs • Lending Markets • Derivatives • Bridges",
  },
  {
    tag: "06",
    title: "Incident Response & Protocol Hardening",
    desc: "We establish institutional-grade incident response protocols, coordinate white-hat fund rescue operations during active exploits, and harden your validator infrastructure with HSM key management, multi-sig governance, and battle-tested operational security procedures.",
    deliverables: [
      "Incident response playbook with escalation matrix & war room flows",
      "Key management architecture review covering HSM, MPC & multi-sig",
      "Bug bounty program design, launch, and ongoing triage management",
    ],
    scope: "Immunefi • HackerOne • Custom Programs • Emergency Response",
  },
];

/* ───────────── Main Section ───────────── */
export default function SolutionsSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => { setDir(1); setIdx(p => (p + 1) % SOLUTIONS.length); }, []);
  const prev = useCallback(() => { setDir(-1); setIdx(p => (p - 1 + SOLUTIONS.length) % SOLUTIONS.length); }, []);

  const s = SOLUTIONS[idx];

  return (
    <section
      id="solutions"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full bg-white text-gray-900 py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4 px-2">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-light tracking-[0.25em] text-gray-500 uppercase mb-2 block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-gray-900 leading-[1.15]">
              End-to-End Security for{" "}
              <span className="text-blue-600 font-light">Web3 Protocols</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Trusted by protocols managing billions in total value locked. Our team brings institutional-grade security methodology to every engagement.
          </p>
        </div>

        {/* Full-Width Black Box Container with Slight Outer Padding */}
        <div className="w-full">
          <div className="rounded-2xl sm:rounded-3xl bg-gray-950 p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl border border-gray-900">

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/20 rounded-bl-[160px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

              {/* LEFT INSIDE BLACK BOX — Globe & Orbit Ring */}
              <div className="lg:col-span-5 flex items-center justify-center py-2 lg:py-0">
                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[360px] md:h-[360px]">
                  <PureGlobe />
                  <OrbitRing />
                </div>
              </div>

              {/* RIGHT INSIDE BLACK BOX — Slide Contents */}
              <div className="lg:col-span-7 flex flex-col justify-between min-h-[360px]">

                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={idx}
                    custom={dir}
                    initial={(d) => ({ x: d > 0 ? 18 : -18, opacity: 0 })}
                    animate={{ x: 0, opacity: 1 }}
                    exit={(d) => ({ x: d > 0 ? -18 : 18, opacity: 0 })}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="flex flex-col flex-1"
                  >
                    {/* Top line — tag + total */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[11px] font-mono font-light tracking-[0.2em] text-gray-400">
                        {s.tag} — {String(SOLUTIONS.length).padStart(2, "0")}
                      </span>
                      <div className="flex-1 h-px bg-gray-800" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-light text-white mb-2.5 tracking-tight leading-tight">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 font-light text-[13px] sm:text-[14px] leading-[1.6] mb-5">
                      {s.desc}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-5">
                      <span className="text-[10px] font-mono font-light tracking-[0.2em] text-gray-500 uppercase block mb-2.5">
                        Key Deliverables
                      </span>
                      <div className="space-y-2">
                        {s.deliverables.map((d, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-[12px] sm:text-[13px] font-light text-gray-300 leading-relaxed bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-lg">
                            <span className="text-gray-500 font-mono text-[10px] mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scope line */}
                    <div className="pt-3 border-t border-gray-800/80">
                      <span className="text-[10px] font-mono font-light tracking-[0.2em] text-gray-500 uppercase">Scope</span>
                      <p className="text-gray-400 text-[12px] sm:text-[13px] mt-1 font-light">{s.scope}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 mt-5">
                  {/* Progress dots */}
                  <div className="flex gap-1.5">
                    {SOLUTIONS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                        className={`h-1 rounded-full transition-all duration-200 cursor-pointer ${
                          idx === i ? "w-6 bg-gray-400" : "w-1.5 bg-gray-700 hover:bg-gray-600"
                        }`}
                        aria-label={`View capability ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex items-center gap-2">
                    <button onClick={prev} aria-label="Previous" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                      <ArrowLeft size={14} />
                    </button>
                    <button onClick={next} aria-label="Next" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}