import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GridBackground from "../utils/GridBackground";

export default function BlogHero({ search, setSearch, posts = [] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Instant client-side match against already-loaded posts (no API calls,
  // no debounce needed) so results appear as the user types, with zero lag.
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
    <section className="relative bg-black pt-40 pb-24 px-6 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
          BlocNexus Research
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white">
          Blogs & Research
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
          Smart contract security research, audit reports,
          exploit analysis, protocol reviews and Web3
          security insights.
        </p>

        <div ref={containerRef} className="mt-10 max-w-xl mx-auto relative">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
            "
          >
            <Search
              size={20}
              className="text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="Search articles..."
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-slate-500
              "
            />
          </div>

          {open && suggestions.length > 0 && (
            <ul
              className="
                absolute
                left-0
                right-0
                top-full
                mt-2
                z-20
                max-h-80
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-black/95
                backdrop-blur-xl
                text-left
                shadow-2xl
              "
            >
              {suggestions.map((post) => (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => goToPost(post.slug)}
                    className="
                      block
                      w-full
                      truncate
                      px-5
                      py-3
                      text-left
                      text-sm
                      text-slate-200
                      transition-colors
                      hover:bg-white/10
                    "
                  >
                    {post.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
