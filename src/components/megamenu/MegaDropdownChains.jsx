/**
 * MegaDropdownChains.jsx
 * ─────────────────────────────────────────────────────
 * Right sidebar in the mega dropdown — shows supported
 * blockchains with real SVG logos, grouped by ecosystem.
 * ─────────────────────────────────────────────────────
 */

import { ChainLogo } from "./ChainLogos";

export default function MegaDropdownChains({ ethereumChains, solanaChains }) {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="
        rounded-xl bg-white/[0.02] border border-white/[0.06]
        p-4 flex flex-col h-full
      "
    >
      {/* Heading */}
      <h4 className="text-[10px] font-light uppercase tracking-[0.18em] text-[#9CA3AF]/70 mb-3">
        Supported Chains
      </h4>

      {/* Ethereum ecosystem */}
      <p className="text-[9px] font-light uppercase tracking-[0.15em] text-white/30 mb-2">
        Ethereum & EVM
      </p>
      <ul className="space-y-2 mb-4">
        {ethereumChains.map((chain) => (
          <li key={chain.name} className="flex items-center gap-2.5">
            <ChainLogo name={chain.name} size={15} />
            <span className="text-[12px] text-white/80 font-light tracking-tight">
              {chain.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-3" />

      {/* Solana */}
      <p className="text-[9px] font-light uppercase tracking-[0.15em] text-white/30 mb-2">
        Solana
      </p>
      <ul className="space-y-2">
        {solanaChains.map((chain) => (
          <li key={chain.name} className="flex items-center gap-2.5">
            <ChainLogo name={chain.name} size={15} />
            <span className="text-[12px] text-white/80 font-light tracking-tight">
              {chain.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
