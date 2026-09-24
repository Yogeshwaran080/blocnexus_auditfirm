import { Eye, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedBlog({ blog }) {
  return (
    <section style={{ fontFamily: "'Inter', sans-serif" }} className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-light tracking-tight text-black mb-8">
          Featured Research
        </h2>

        <Link to={`/blog/${blog.slug}`} className="grid lg:grid-cols-2 gap-8">

          <img
            src={blog.image}
            alt=""
            className="rounded-3xl h-[420px] object-cover w-full"
          />

          <div className="flex flex-col justify-center">

            <span className="text-blue-600 font-light text-sm">
              {blog.category}
            </span>

            <h3 className="text-4xl md:text-5xl font-light tracking-tight text-black mt-4">
              {blog.title}
            </h3>

            <p className="mt-6 text-gray-600 font-light leading-relaxed">
              {blog.description}
            </p>

            <div className="flex gap-6 mt-8 text-gray-600 font-light text-sm">

              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <Eye size={16} />
                {blog.views}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} />
                {blog.readTime}
              </div>

            </div>

          </div>

        </Link>

      </div>
    </section>
  );
}