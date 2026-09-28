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
        rounded-xl bg-zinc-50/90 border border-zinc-200/80
        p-4 flex flex-col h-full
      "
    >
      {/* Heading */}
      <h4 className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 mb-3">
        Supported Chains
      </h4>

      {/* Ethereum ecosystem */}
      <p className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
        Ethereum & EVM
      </p>
      <ul className="space-y-2 mb-4">
        {ethereumChains.map((chain) => (
          <li key={chain.name} className="flex items-center gap-2.5">
            <ChainLogo name={chain.name} size={15} />
            <span className="text-[12px] text-zinc-800 font-medium tracking-tight">
              {chain.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="h-px bg-zinc-200/80 mb-3" />

      {/* Solana */}
      <p className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
        Solana
      </p>
      <ul className="space-y-2">
        {solanaChains.map((chain) => (
          <li key={chain.name} className="flex items-center gap-2.5">
            <ChainLogo name={chain.name} size={15} />
            <span className="text-[12px] text-zinc-800 font-medium tracking-tight">
              {chain.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
