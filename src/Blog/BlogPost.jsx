import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, Calendar, Clock, Heart } from "lucide-react";

import { getPostBySlug, likePost } from "./api/blogApi";
import { deriveImage, formatDate, formatReadTime } from "./utils/postAdapters";
import "./blogArticle.css";

export default function BlogPost() {
  // Route param is named ":id" but the backend looks posts up by slug.
  const { id: slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [liked, setLiked] = useState(false);
  const [likeBusy, setLikeBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      setLoading(true);
      setNotFound(false);

      try {
        // Every successful call here increments the backend's view
        // counter for this post (server-side, in PostService.getPostBySlug).
        const data = await getPostBySlug(slug);
        if (cancelled) return;

        setPost(data);
        setLiked(localStorage.getItem(`liked_post_${data.id}`) === "true");
      } catch {
        // Any failure (404 not found, network error, etc.) renders the
        // same "Blog Not Found" state, matching the original design.
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

  const handleLike = async () => {
    if (!post || liked || likeBusy) return;
    setLikeBusy(true);
    try {
      const result = await likePost(post.id);
      setPost((prev) => (prev ? { ...prev, likes: result.likes } : prev));
      setLiked(true);
      localStorage.setItem(`liked_post_${post.id}`, "true");
    } catch {
      // Silently ignore — like is a non-critical enhancement.
    } finally {
      setLikeBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-black text-lg">Loading article...</p>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* HEADER */}

      <section className="pt-36 pb-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* CATEGORY */}

          <span
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-blue-50
              text-blue-600
              text-sm
              font-semibold
              border
              border-blue-100
            "
          >
            Blog
          </span>

          {/* TITLE */}

          <h1
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-bold
              text-black
              leading-tight
            "
          >
            {post.title}
          </h1>

          {/* EXCERPT */}

          {post.description && (
            <p
              className="
                mt-6
                text-xl
                text-black
                max-w-3xl
                mx-auto
                leading-relaxed
              "
            >
              {post.description}
            </p>
          )}

          {/* META */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              items-center
              gap-8
              text-black
            "
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.publishedAt || post.createdAt)}</span>
            </div>

            <div className="flex items-center gap-2">
              <Eye size={18} />
              <span>{post.views}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{formatReadTime(post.readTimeMinutes)}</span>
            </div>

            {/* LIKE BUTTON */}

            <button
              onClick={handleLike}
              disabled={likeBusy || liked}
              className={`
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                border
                transition-all
                duration-300
                disabled:cursor-default

                ${
                  liked
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-black hover:bg-blue-50 hover:border-blue-300"
                }
              `}
            >
              <Heart size={18} className={liked ? "fill-current" : ""} />
              {liked ? "Liked" : "Like"}
              <span className="opacity-75">({post.likes})</span>
            </button>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}

      <section className="pb-16">
        <div
          className="
            max-w-4xl
            mx-auto
            px-6
            flex
            justify-center
          "
        >
          <img
            src={deriveImage(post)}
            alt={post.title}
            className="
              w-full
              max-w-4xl
              h-[420px]
              object-cover
              rounded-3xl
              shadow-xl
            "
          />
        </div>
      </section>

      {/* CONTENTS */}

      {Array.isArray(post.tableOfContents) && post.tableOfContents.length > 0 && (
        <section className="pb-12">
          <div className="max-w-2xl mx-auto px-6">
            <div
              className="
                border
                border-gray-200
                rounded-2xl
                p-6
                bg-gray-50
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  text-black
                  mb-4
                "
              >
                Contents
              </h3>

              <ul
                className="
                  space-y-3
                  text-black
                "
              >
                {post.tableOfContents.map((heading, index) => (
                  <li key={`${index}-${heading}`}>
                    {index + 1}. {heading}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE */}

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
          />
        </div>
      </section>
    </main>
  );
}
