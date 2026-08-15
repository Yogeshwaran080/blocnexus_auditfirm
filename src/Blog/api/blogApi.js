// Centralized API client for the Blog module.
// Talks to the real Spring Boot backend (smart_contract_audit service).
//
// Base URL is read from Vite env (VITE_API_BASE_URL). Falls back to the
// default local dev address of the backend (http://localhost:8080/api/v1).
// Override it by creating a `.env` file in the frontend root:
//   VITE_API_BASE_URL=http://localhost:8080/api/v1

const API_BASE_URL =
  (import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  "http://localhost:8080/api/v1";

class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch {
    throw new ApiError(
      "Could not reach the server. Please check your connection and try again.",
      0,
      null
    );
  }

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  const data = isJson ? await response.json().catch(() => null) : null;

  if (!response.ok) {
    const message =
      (data && (data.message || data.error)) ||
      `Request failed with status ${response.status}`;
    throw new ApiError(message, response.status, data);
  }

  return data;
}

/* ---------------------------- Posts endpoints ---------------------------- */

/** GET /posts — paginated list of published posts, newest first. */
export function getPublishedPosts(page = 0, size = 10) {
  return request(`/posts?page=${page}&size=${size}`);
}

/** GET /posts/recent — most recent published posts (default 5). */
export function getRecentPosts(limit = 5) {
  return request(`/posts/recent?limit=${limit}`);
}

/** GET /posts/{slug} — single post by slug. Backend increments the view
 * counter server-side on every successful call, so simply calling this
 * once per page visit is enough to track a real view. */
export function getPostBySlug(slug) {
  return request(`/posts/${encodeURIComponent(slug)}`);
}

/** PUT /posts/{id}/like — increments the like counter by 1. */
export function likePost(id) {
  return request(`/posts/${id}/like`, { method: "PUT" });
}

/* ---------------------------- Users endpoints ----------------------------- */

/** POST /users — creates a new user record. */
export function createUser(name, email) {
  return request(`/users`, {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });
}

/** PUT /users/{id}/subscription — sets subscribed to "YES" or "NO". */
export function updateSubscription(userId, subscribed) {
  return request(`/users/${userId}/subscription`, {
    method: "PUT",
    body: JSON.stringify({ subscribed }),
  });
}

export { ApiError };
