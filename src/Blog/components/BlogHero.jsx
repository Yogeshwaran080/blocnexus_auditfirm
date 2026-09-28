import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogHero({ search, setSearch, posts = [] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return posts
      .filter((post) => post.title?.toLowerCase().includes(query))
      .slice(0, 6);
  }, [search, posts]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToPost(slug) {
    setOpen(false);
    setSearch("");
    navigate(`/blog/${slug}`);
  }

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative bg-white pt-28 pb-16 px-6 border-b border-zinc-200"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8">
          <div>
            {/* CATEGORY / SUBTITLE ACCENT */}
            {/* <span className="text-blue-600 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
              // Security & Protocol Research
            </span> */}

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-black leading-tight">
              Articles & Technical Reports
            </h1>

            <p className="mt-3 text-zinc-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
              In-depth smart contract security research, exploit post-mortems, formal verification analysis, and Web3 vulnerability disclosure.
            </p>
          </div>

          {/* SIMPLE SEARCH BAR (SQUARE SHARP THEMING) */}
          <div ref={containerRef} className="w-full md:w-80 lg:w-96 shrink-0 relative">
            <div className="flex items-center gap-3 bg-white border border-zinc-900 focus-within:border-blue-600 transition-colors px-4 py-3">
              <Search size={18} className="text-zinc-700 shrink-0" />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                placeholder="Search research & reports..."
                className="bg-transparent outline-none w-full text-zinc-900 text-xs font-light placeholder:text-zinc-500"
              />
            </div>

            {open && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 z-50 max-h-72 overflow-y-auto bg-white border border-black shadow-xl text-left">
                {suggestions.map((post) => (
                  <li key={post.id}>
                    <button
                      type="button"
                      onClick={() => goToPost(post.slug)}
                      className="block w-full truncate px-4 py-2.5 text-left text-xs font-light text-zinc-900 hover:bg-zinc-100 transition-colors border-b border-zinc-100 last:border-b-0"
                    >
                      {post.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
