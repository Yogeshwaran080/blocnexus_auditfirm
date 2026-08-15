const categories = [
  "All",
  "Audit Reports",
  "Research",
  "Exploits",
  "Guides",
];

export default function CategoryFilter({
  active,
  setActive,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}