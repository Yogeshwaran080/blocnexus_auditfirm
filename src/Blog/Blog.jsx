import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";

import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import Newsletter from "./components/Newsletter";

import { getPublishedPosts } from "./api/blogApi";
import { adaptPost } from "./utils/postAdapters";

import PageLoader from "../components/PageLoader";
import SEO from "../components/SEO";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const page = await getPublishedPosts(0, 40);
      const items = page?.content ?? [];
      setPosts(items.map((post, index) => adaptPost(post, { featured: index === 0 })));
    } catch (err) {
      setError(err?.message || "Server unreachable. Unable to load blog posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      setLoading(true);
      setError(null);
      try {
        const page = await getPublishedPosts(0, 40);
        const items = page?.content ?? [];
        if (!cancelled) {
          setPosts(
            items.map((post, index) => adaptPost(post, { featured: index === 0 }))
          );
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Server unreachable.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredBlog = useMemo(
    () => posts.find((blog) => blog.featured),
    [posts]
  );

  const filteredBlogs = useMemo(() => {
    return posts
      .filter((blog) => {
        const matchesCategory =
          activeCategory === "All" || blog.category === activeCategory;

        const query = search.toLowerCase();
        const matchesSearch =
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts, search, activeCategory]);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#FAFAFA] min-h-screen text-zinc-900 relative"
    >
      <SEO
        title="Web3 Security Insights & Smart Contract Audit Research | BlocNexus Blog"
        description="Explore in-depth Web3 security research, smart contract vulnerability analysis, DeFi exploit breakdowns, and blockchain security best practices by BlocNexus."
        keywords="Web3 security blog, smart contract audit articles, DeFi exploit analysis, EVM security research, blockchain audit guides"
        canonical="/blogs"
      />
      {/* ── SUBTLE TECHNICAL GRID BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        <BlogHero search={search} setSearch={setSearch} posts={posts} />

        {featuredBlog && <FeaturedBlog blog={featuredBlog} />}

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between pb-3 border-b border-zinc-300">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-semibold">
                Filter by Topic
              </span>
              <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white border border-zinc-300">
                <p className="text-zinc-600 font-light text-sm">
                  No articles found matching "{search}".
                </p>
              </div>
            ) : (
              <BlogGrid blogs={filteredBlogs} />
            )}
          </div>
        </section>

        <Newsletter />
      </div>
    </main>
  );
}
