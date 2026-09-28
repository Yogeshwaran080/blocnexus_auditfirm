const categories = [
  "All",
  "Audit Reports",
  "Research",
  "Exploits",
  "Guides",
];

export default function CategoryFilter({ active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer rounded-none
              ${
                isActive
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-white text-zinc-800 border-zinc-300 hover:border-black"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}