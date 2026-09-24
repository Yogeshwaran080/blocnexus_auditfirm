/**
 * MegaDropdownColumn.jsx
 * ─────────────────────────────────────────────────────
 * Renders one column inside the mega dropdown.
 * Each column has a heading and a vertical list of items.
 */

import MegaDropdownItem from "./MegaDropdownItem";

export default function MegaDropdownColumn({ heading, items, onItemClick }) {
  return (
    <div className="flex flex-col">
      {/* Column heading */}
      <h4
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="
          text-[10px] font-light uppercase tracking-[0.18em]
          text-[#9CA3AF]/70 mb-3 px-3
        "
      >
        {heading}
      </h4>

      {/* Items */}
      <div className="flex flex-col gap-0.5">
        {items.map((item, i) => (
          <MegaDropdownItem key={i} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
}
