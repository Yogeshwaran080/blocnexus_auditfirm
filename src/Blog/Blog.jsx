import { useEffect, useMemo, useState } from "react";

import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import Newsletter from "./components/Newsletter";

import { getPublishedPosts } from "./api/blogApi";
import { adaptPost } from "./utils/postAdapters";

import PageLoader from "../components/PageLoader";
import Lottie404 from "../components/Lottie404";

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
        // Backend returns up to 40 most recent published posts (newest first).
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
    return <Lottie404 onRetry={fetchPosts} />;
  }

  return (
    <main className="bg-white min-h-screen">
      <BlogHero search={search} setSearch={setSearch} posts={posts} />

      {featuredBlog && <FeaturedBlog blog={featuredBlog} />}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
          </div>

          {filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-500 py-16 font-light">
              No articles found.
            </p>
          ) : (
            <BlogGrid blogs={filteredBlogs} />
          )}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
