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
        px-3 py-2 rounded-xl
        hover:bg-zinc-100/90 transition-all duration-150
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
            bg-zinc-100 border border-zinc-200/80
            group-hover:bg-white group-hover:border-blue-300
            transition-colors duration-150 shadow-2xs
          "
        >
          <Icon
            size={12}
            className="text-zinc-600 group-hover:text-blue-600 transition-colors duration-150"
          />
        </div>
      )}

      {/* Label */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-medium text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
            {item.title}
          </span>

          {item.badge && (
            <span className="shrink-0 text-[9px] font-mono font-medium tracking-wider uppercase px-1.5 py-0.5 rounded border border-blue-200 bg-blue-50 text-blue-700 leading-none">
              {item.badge}
            </span>
          )}
        </div>

        <p className="text-[11px] font-light text-zinc-500 group-hover:text-zinc-700 leading-relaxed mt-0.5 line-clamp-1">
          {item.desc}
        </p>
      </div>
    </button>
  );
}
