import { Eye, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="
            h-56
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="p-6">
          <span className="text-sm text-blue-600 font-medium">
            {blog.category}
          </span>

          <h3 className="mt-3 text-xl font-bold text-gray-900">
            {blog.title}
          </h3>

          <p className="mt-3 text-gray-600">
            {blog.description}
          </p>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
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