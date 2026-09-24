/**
 * MegaDropdownItem.jsx
 * ─────────────────────────────────────────────────────
 * A single row inside a mega-dropdown column.
 * Renders an icon, title, description, and optional badge.
 */

import iconMap from "./iconMap";

export default function MegaDropdownItem({ item, onClick }) {
  const Icon = iconMap[item.icon];

  return (
    <button
      onClick={() => onClick(item.href)}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="
        group flex items-start gap-2.5 w-full text-left
        px-3 py-2 rounded-lg
        hover:bg-white/[0.04] transition-all duration-150
        cursor-pointer
      "
    >
      {/* Smaller Icon Container */}
      {Icon && (
        <div
          className="
            mt-0.5 shrink-0
            w-6 h-6 rounded-md
            flex items-center justify-center
            bg-white/[0.03] border border-white/[0.06]
            group-hover:bg-blue-500/10 group-hover:border-blue-500/30
            transition-colors duration-150
          "
        >
          <Icon
            size={12}
            className="text-[#9CA3AF] group-hover:text-blue-400 transition-colors duration-150"
          />
        </div>
      )}

      {/* Label */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-light text-white/90 group-hover:text-white transition-colors leading-tight tracking-tight">
            {item.title}
          </span>

          {item.badge && (
            <span className="text-[9px] font-light tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-blue-300 leading-none">
              {item.badge}
            </span>
          )}
        </div>

        <p className="text-[11px] font-light text-[#9CA3AF]/60 group-hover:text-[#9CA3AF] leading-relaxed mt-0.5 line-clamp-1">
          {item.desc}
        </p>
      </div>
    </button>
  );
}
