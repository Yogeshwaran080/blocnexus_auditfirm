import { useEffect, useState, useRef, useMemo } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { Eye, Calendar, Clock, Heart, ArrowLeft, Search } from "lucide-react";

import { getPostBySlug, likePost, getPublishedPosts } from "./api/blogApi";
import { deriveImage, formatDate, formatReadTime } from "./utils/postAdapters";
import "./blogArticle.css";
import PageLoader from "../components/PageLoader";

export default function BlogPost() {
  const { id: slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [liked, setLiked] = useState(false);
  const [likeBusy, setLikeBusy] = useState(false);

  // Quick top search bar state
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);

  // Fetch current post
  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      setLoading(true);
      setNotFound(false);

      try {
        const data = await getPostBySlug(slug);
        if (cancelled) return;

        setPost(data);
        setLiked(localStorage.getItem(`liked_post_${data.id}`) === "true");
      } catch {
        if (cancelled) return;
        setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPost();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Fetch post list for search
  useEffect(() => {
    let cancelled = false;
    async function loadAllPosts() {
      try {
        const res = await getPublishedPosts(0, 40);
        if (!cancelled && res?.content) {
          setAllPosts(res.content);
        }
      } catch {
        // Silently ignore search lookup error
      }
    }
    loadAllPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  // Search filter
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allPosts
      .filter((p) => p.title?.toLowerCase().includes(q))
      .slice(0, 5);
  }, [searchQuery, allPosts]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLike = async () => {
    if (!post || liked || likeBusy) return;
    setLikeBusy(true);
    try {
      const result = await likePost(post.id);
      setPost((prev) => (prev ? { ...prev, likes: result.likes } : prev));
      setLiked(true);
      localStorage.setItem(`liked_post_${post.id}`, "true");
    } catch {
      // Silently ignore
    } finally {
      setLikeBusy(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  if (notFound || !post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#FAFAFA] min-h-screen text-zinc-900 pt-24 pb-32 relative"
    >
      {/* ── SUBTLE GRID BACKGROUND ── */}
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

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* ── TOP UTILITY BAR: BACK LINK & SEARCH ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-300">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Articles
          </Link>

          {/* Inline Quick Search */}
          <div ref={searchContainerRef} className="relative w-full sm:w-72">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-300 focus-within:border-blue-600 transition-colors">
              <Search size={14} className="text-zinc-500 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-xs font-light text-zinc-900 placeholder:text-zinc-400 outline-none"
              />
            </div>

            {searchOpen && searchResults.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 z-50 bg-white border border-black shadow-lg">
                {searchResults.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                        navigate(`/blog/${item.slug}`);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-zinc-900 hover:bg-zinc-100 truncate block transition-colors border-b border-zinc-100 last:border-b-0 font-light"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ── ARTICLE HEADER ── */}
        <header className="pt-8 pb-8">
          {/* CATEGORY TAG (Theme Accent Blue #1) */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white font-mono text-[11px] uppercase tracking-wider">
              {post.category || "Research"}
            </span>
          </div>

          {/* ARTICLE TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.15]">
            {post.title}
          </h1>

          {/* EXCERPT / DESCRIPTION */}
          {post.description && (
            <p className="mt-5 text-base sm:text-lg font-light text-zinc-700 leading-relaxed border-l-2 border-black pl-4">
              {post.description}
            </p>
          )}

          {/* METADATA BAR */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-zinc-300 py-3 text-xs font-mono text-zinc-600">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-zinc-500" />
                <span>{formatDate(post.publishedAt || post.createdAt)}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Eye size={14} className="text-zinc-500" />
                <span>{post.views || 0} VIEWS</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-zinc-500" />
                <span>{formatReadTime(post.readTimeMinutes)}</span>
              </div>
            </div>

            {/* LIKE BUTTON */}
            <button
              onClick={handleLike}
              disabled={likeBusy || liked}
              className={`
                flex items-center gap-2 px-4 py-1.5 text-xs font-mono border transition-all cursor-pointer disabled:cursor-default
                ${
                  liked
                    ? "bg-black text-white border-black"
                    : "border-zinc-300 text-zinc-900 bg-white hover:border-black"
                }
              `}
            >
              <Heart size={14} className={liked ? "fill-current text-white" : "text-zinc-700"} />
              <span>{liked ? "LIKED" : "LIKE"}</span>
              <span className="text-zinc-500">({post.likes || 0})</span>
            </button>
          </div>
        </header>

        {/* ── FEATURED IMAGE (SQUARE FRAME) ── */}
        {deriveImage(post) && (
          <div className="mb-10 border border-zinc-300 bg-white p-2">
            <img
              src={deriveImage(post)}
              alt={post.title}
              className="w-full h-auto max-h-[460px] object-cover border border-zinc-200"
            />
          </div>
        )}

        {/* ── TABLE OF CONTENTS (SQUARE PANEL) ── */}
        {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
          <div className="mb-10 p-6 bg-white border border-zinc-300">
            <h2 className="text-xs font-mono uppercase tracking-widest font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
              Table of Contents
            </h2>
            <ul className="space-y-2 text-sm font-light text-zinc-800">
              {post.tableOfContents.map((heading, index) => (
                <li key={`${index}-${heading}`} className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-blue-600 font-medium">{index + 1}.</span>
                  <span>{heading}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── MAIN ARTICLE CONTENT (SQUARE & MINIMAL STYLING) ── */}
        <article className="bg-white border border-zinc-300 p-6 md:p-10 shadow-xs">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
          />
        </article>

        {/* ── ARTICLE FOOTER NAVIGATION ── */}
        <div className="mt-12 pt-6 border-t border-zinc-300 flex items-center justify-between">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
