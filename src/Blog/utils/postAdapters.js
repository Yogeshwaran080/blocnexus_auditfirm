// The backend's PostSummaryDto / PostDetailDto only expose: id, title, slug,
// description, contentMarkdown, contentHtml, tableOfContents, readTimeMinutes,
// views, likes, status, createdAt, updatedAt, publishedAt.
//
// The original design also displayed a "category" pill and a cover image,
// which the backend doesn't store. To keep the exact same visual design
// without inventing fake backend data, we derive these deterministically
// from the real post fields below (same input -> same output every time).

const CATEGORY_KEYWORDS = [
  { category: "Exploits", keywords: ["exploit", "attack", "hack", "vulnerab"] },
  { category: "Audit Reports", keywords: ["audit", "checklist", "review"] },
  { category: "Guides", keywords: ["guide", "how to", "tutorial", "walkthrough"] },
  { category: "Research", keywords: ["research", "analysis", "deep dive"] },
];

/** Best-effort category label derived from the post's title/description. */
export function deriveCategory(post) {
  const haystack = `${post.title ?? ""} ${post.description ?? ""}`.toLowerCase();
  for (const { category, keywords } of CATEGORY_KEYWORDS) {
    if (keywords.some((kw) => haystack.includes(kw))) return category;
  }
  return "Research";
}

/** Deterministic cover image per post so the same post always gets the same
 * image, without requiring an image field on the backend. */
export function deriveImage(post) {
  const seed = encodeURIComponent(post.slug || String(post.id ?? "post"));
  return `https://picsum.photos/seed/${seed}/1200/800`;
}

/** Formats an ISO datetime string like the old static data ("10 Jun 2026"). */
export function formatDate(isoString) {
  if (!isoString) return "";
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatReadTime(minutes) {
  const m = minutes && minutes > 0 ? minutes : 1;
  return `${m} min read`;
}

/** Adapts a PostSummaryDto (or PostDetailDto) into the shape BlogCard /
 * FeaturedBlog / BlogGrid already expect, so no component markup changes. */
export function adaptPost(post, { featured = false } = {}) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description || "",
    image: deriveImage(post),
    category: deriveCategory(post),
    date: formatDate(post.publishedAt || post.createdAt),
    views: post.views ?? 0,
    likes: post.likes ?? 0,
    readTime: formatReadTime(post.readTimeMinutes),
    readTimeMinutes: post.readTimeMinutes,
    featured,
  };
}
