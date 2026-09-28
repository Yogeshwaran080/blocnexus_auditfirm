import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

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

    const N = 300;
    const pts = [];
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = PHI * i;
      pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r, node: i % 18 === 0 });
    }

    let rotY = 0;
    const rotX = 0.22;
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    const draw = () => {
      if (!visRef.current) { frameRef.current = requestAnimationFrame(draw); return; }
      rotY += 0.004;
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.40;

      // Outer ring
      ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.06, 0, Math.PI * 2); ctx.stroke();

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
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - d / (R * 0.55)) * 0.3 * a.z})`;
            ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
          }
        }
      }

      // Dots
      for (let i = 0; i < proj.length; i++) {
        const p = proj[i];
        const f = p.z > 0;
        const a = f ? 0.3 + p.z * 0.7 : 0.05 + (p.z + 1) * 0.05;

        if (p.node && f) {
          const nr = 2 + p.z * 1.2;
          ctx.fillStyle = `rgba(59, 130, 246, ${a * 0.4})`;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, nr * 2.2, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, nr, 0, Math.PI * 2); ctx.fill();
        } else {
          const dr = f ? 1.2 + p.z * 0.5 : 0.7;
          ctx.fillStyle = f ? `rgba(255, 255, 255, ${a * 0.6})` : `rgba(255, 255, 255, ${a * 0.15})`;
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
      <div className="relative rounded-full border border-dashed border-zinc-700/60" style={{ width: "88%", height: "88%", animation: "spin 38s linear infinite reverse" }}>
        {CHAINS.map((svg, i) => {
          const rad = ((i / CHAINS.length) * 360 * Math.PI) / 180;
          const x = 50 + 50 * Math.cos(rad);
          const y = 50 + 50 * Math.sin(rad);
          return (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <div style={{ animation: "spin 38s linear infinite" }}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 border border-zinc-700 shadow-md flex items-center justify-center">{svg}</div>
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
    desc: "Rigorous manual inspection of every smart contract function paired with formal mathematical verification to eliminate reentrancy, access control flaws, and economic exploit vectors before mainnet release.",
    deliverables: [
      "Full vulnerability classification report (Critical / High / Medium / Low)",
      "Formal verification results with proof of invariant correctness",
      "Remediation guidance with code-level fix recommendations",
    ],
    scope: "Solidity • Vyper • Rust (Solana) • Move (Aptos/Sui) • Cairo (StarkNet)",
  },
  {
    tag: "02",
    title: "Protocol Penetration Testing",
    desc: "Simulating real-world adversarial attacks across smart contracts, cross-chain bridges, dApp frontends, and validator infrastructure using identical tooling and techniques active exploiters employ.",
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
    desc: "Full-stack architectural review validating upgradeable proxy patterns, access control hierarchies, cross-contract state flows, and protocol invariant boundaries for enterprise readiness.",
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
    desc: "Deploying real-time on-chain monitoring agents that inspect mempool activity, track anomalous transaction vectors, and trigger automated circuit breakers before block inclusion.",
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
    desc: "Mathematical risk modeling and adversarial game-theory simulations mapping cross-protocol contagion paths, MEV extraction opportunities, and oracle manipulation vectors.",
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
    desc: "Establishing institutional incident response protocols, white-hat fund rescue procedures, and hardened validator key architecture with HSM, MPC, and multi-sig controls.",
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
      className="w-full min-w-full bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden border-t border-b border-zinc-800 select-none"
    >
      {/* ── TECHNICAL GRID BACKGROUND OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 70%),
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />

      {/* FULL WIDTH CONTAINER */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 pb-8 border-b border-zinc-800">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest block mb-3 font-semibold">
              // Institutional Security Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              End-to-End Security for{" "}
              <span className="text-blue-500 font-light">Web3 Protocols</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Trusted by lead Web3 teams and protocols. We apply multi-layered threat analysis, mathematical verification, and real-time execution shielding to secure digital asset infrastructure.
          </p>
        </div>

        {/* ── MAIN CONTENT GRID: 3D GLOBE (LEFT) & CAPABILITIES CAROUSEL (RIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN — 3D Globe & Chain Orbit Ring */}
          <div className="lg:col-span-5 flex items-center justify-center py-4 lg:py-0">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]">
              <PureGlobe />
              <OrbitRing />
            </div>
          </div>

          {/* RIGHT COLUMN — Capability Details & Deliverables */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[420px] bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 md:p-10 shadow-2xl">

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={(d) => ({ x: d > 0 ? 16 : -16, opacity: 0 })}
                animate={{ x: 0, opacity: 1 }}
                exit={(d) => ({ x: d > 0 ? -16 : 16, opacity: 0 })}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex flex-col flex-1"
              >
                {/* Index & Section tag */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-medium tracking-widest text-blue-400">
                    CAPABILITY {s.tag} / {String(SOLUTIONS.length).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>

                {/* Capability Title */}
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-3 tracking-tight leading-tight">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 font-light text-xs sm:text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 uppercase block mb-3">
                    // Key Deliverables
                  </span>
                  <div className="space-y-2.5">
                    {s.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm font-light text-zinc-200 leading-relaxed bg-zinc-950/60 border border-zinc-800 p-3"
                      >
                        <span className="font-mono text-blue-400 text-xs shrink-0 mt-0.5 font-medium">
                          0{i + 1}.
                        </span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope line */}
                <div className="pt-4 border-t border-zinc-800">
                  <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                    Supported Scope
                  </span>
                  <p className="text-zinc-300 text-xs font-mono mt-1 font-light">
                    {s.scope}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-zinc-800 mt-6">
              {/* Progress Dots */}
              <div className="flex gap-2">
                {SOLUTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                    className={`h-1.5 transition-all duration-200 cursor-pointer ${
                      idx === i ? "w-8 bg-blue-500" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`View capability ${i + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous capability"
                  className="w-9 h-9 border border-zinc-700 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next capability"
                  className="w-9 h-9 border border-zinc-700 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}