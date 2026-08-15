import { useEffect, useMemo, useState } from "react";

import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import Newsletter from "./components/Newsletter";

import { getPublishedPosts } from "./api/blogApi";
import { adaptPost } from "./utils/postAdapters";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      setLoading(true);
      setError(null);
      try {
        // Backend returns up to 40 most recent published posts (newest first).
        const page = await getPublishedPosts(0, 40);
        const items = page?.content ?? [];
        if (!cancelled) {
          setPosts(
            items.map((post, index) => adaptPost(post, { featured: index === 0 }))
          );
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load blog posts.");
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

  return (
    <main className="bg-white min-h-screen">
      <BlogHero search={search} setSearch={setSearch} posts={posts} />

      {loading && (
        <section className="py-24 px-6 text-center text-black">
          Loading articles...
        </section>
      )}

      {!loading && error && (
        <section className="py-24 px-6 text-center">
          <p className="text-red-600 font-medium">{error}</p>
          <p className="mt-2 text-gray-500 text-sm">
            Make sure the backend API is running and reachable.
          </p>
        </section>
      )}

      {!loading && !error && (
        <>
          {featuredBlog && <FeaturedBlog blog={featuredBlog} />}

          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
              </div>

              {filteredBlogs.length === 0 ? (
                <p className="text-center text-gray-500 py-16">
                  No articles found.
                </p>
              ) : (
                <BlogGrid blogs={filteredBlogs} />
              )}
            </div>
          </section>
        </>
      )}

      <Newsletter />
    </main>
  );
}
