import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen } from "lucide-react";
import Lottie404 from "../components/Lottie404";

export default function NotFound() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#050711] text-white flex flex-col items-center justify-center py-12 px-6 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto w-full text-center flex flex-col items-center">
        {/* Lottie 404 Graphic */}
        <div className="w-full max-w-[520px] -mb-6">
          <Lottie404 />
        </div>

        {/* 404 Header Information */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mt-2">
          Page Not Found
        </h1>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
          The page or article you are looking for does not exist, may have been relocated, or failed to load.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors cursor-pointer shadow-md"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-light text-sm hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
          >
            <BookOpen size={16} />
            Explore Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
