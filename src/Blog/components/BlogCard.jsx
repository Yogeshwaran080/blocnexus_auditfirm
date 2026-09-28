import { Eye, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`} style={{ fontFamily: "'Inter', sans-serif" }} className="block h-full group">
      <div className="flex h-full flex-col bg-white border border-zinc-300 hover:border-black transition-colors shadow-xs rounded-none">
        {/* SHARP RECTANGULAR IMAGE */}
        <div className="overflow-hidden border-b border-zinc-200">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* CARD CONTENT */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-medium">
              {blog.category}
            </span>
            <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <h3 className="line-clamp-2 text-lg font-light text-black tracking-tight group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-zinc-600 font-light text-xs leading-relaxed">
            {blog.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-4 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={13} className="text-zinc-400" />
              {blog.date}
            </div>

            <div className="flex items-center gap-1.5">
              <Eye size={13} className="text-zinc-400" />
              {blog.views}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
