import { Eye, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section style={{ fontFamily: "'Inter', sans-serif" }} className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-300">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-900 font-semibold">
            Featured Research
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 border border-blue-200 bg-blue-50 px-2 py-0.5">
            LATEST ISSUE
          </span>
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="group block bg-white border border-zinc-300 hover:border-black transition-all p-6 md:p-8 shadow-xs"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* FEATURED IMAGE */}
            <div className="lg:col-span-6 overflow-hidden border border-zinc-200">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[320px] md:h-[380px] w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div>
                <span className="inline-block px-2.5 py-1 bg-black text-white font-mono text-[10px] uppercase tracking-wider">
                  {blog.category || "Research"}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-black mt-4 group-hover:text-blue-600 transition-colors leading-tight">
                {blog.title}
              </h3>

              <p className="mt-4 text-zinc-600 font-light text-sm md:text-base leading-relaxed line-clamp-3">
                {blog.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-zinc-200 text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-zinc-500" />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-zinc-500" />
                    {blog.views}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-zinc-500" />
                    {blog.readTime}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-black font-semibold text-xs group-hover:translate-x-1 transition-transform">
                  Read Article
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}