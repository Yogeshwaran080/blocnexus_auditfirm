// API client for the "Request an Audit Quote" form.
// Talks to the real Spring Boot backend (smart_contract_audit service).
//
// The leads endpoint is served at /api/leads (not under /api/v1, unlike the
// blog endpoints), so it has its own env var. Override it by adding/editing
// this line in the frontend's .env file:
//   VITE_LEADS_API_URL=http://localhost:8080/api/leads

const LEADS_API_URL =
  (import.meta.env && import.meta.env.VITE_LEADS_API_URL) ||
  "http://localhost:8080/api/leads";

class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

/** POST /api/leads — submits a new audit quote request. */
export async function submitLead(payload) {
  let response;
  try {
    response = await fetch(LEADS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
    // Surface the first field-level validation message if the backend sent one.
    const firstFieldError =
      data && data.errors && Object.values(data.errors)[0];
    const message =
      firstFieldError ||
      (data && (data.message || data.error)) ||
      `Request failed with status ${response.status}`;
    throw new ApiError(message, response.status, data);
  }

  return data;
}

export { ApiError };
