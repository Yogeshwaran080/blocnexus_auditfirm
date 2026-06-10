import { useMemo, useState } from "react";

import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import CategoryFilter from "./components/CategoryFilter";
import BlogGrid from "./components/BlogGrid";
import Newsletter from "./components/Newsletter";

import blogs from "./data/blogs";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");

  const featuredBlog = blogs.find(
    (blog) => blog.featured
  );

  const filteredBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        const matchesCategory =
          activeCategory === "All" ||
          blog.category === activeCategory;

        const matchesSearch =
          blog.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          blog.description
            .toLowerCase()
            .includes(search.toLowerCase());

        return (
          matchesCategory && matchesSearch
        );
      })
      .sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      );
  }, [search, activeCategory]);

  return (
    <main className="bg-white min-h-screen">

      <BlogHero
        search={search}
        setSearch={setSearch}
      />

      {featuredBlog && (
        <FeaturedBlog blog={featuredBlog} />
      )}

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <CategoryFilter
              active={activeCategory}
              setActive={setActiveCategory}
            />
          </div>

          <BlogGrid blogs={filteredBlogs} />

        </div>
      </section>

      <Newsletter />

    </main>
  );
}