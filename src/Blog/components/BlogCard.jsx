import { Eye, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`} className="block h-full">
      <div
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-gray-300
          hover:shadow-xl
        "
      >
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="
              h-52
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-sm font-medium text-blue-600">
            {blog.category}
          </span>

          <h3 className="mt-3 line-clamp-2 text-xl font-bold text-gray-900">
            {blog.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-gray-600">
            {blog.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {blog.date}
            </div>

            <div className="flex items-center gap-2">
              <Eye size={14} />
              {blog.views}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
