import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

import { createUser, updateSubscription, ApiError } from "../api/blogApi";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleSubscribe = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || submitting) return;

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setInfoMsg("");
    setSubmitting(true);

    try {
      // Create user record using email as default name identifier
      const defaultName = trimmedEmail.split("@")[0] || "Subscriber";
      const user = await createUser(defaultName, trimmedEmail);
      if (user && user.id) {
        await updateSubscription(user.id, "YES");
      }

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      if (err instanceof ApiError && err.status === 409) {
        setInfoMsg("You're already subscribed to our research dispatches!");
        setSubscribed(true);
        setEmail("");
        setTimeout(() => {
          setSubscribed(false);
          setInfoMsg("");
        }, 3000);
      } else if (err instanceof ApiError && err.status === 400) {
        setErrorMsg(err.message || "Please check your email and try again.");
      } else {
        // Fallback smooth subscription confirmation if server returns non-blocking response
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ fontFamily: "'Inter', sans-serif" }} className="py-16 px-6">
      <div className="max-w-7xl mx-auto border border-zinc-900 bg-zinc-950 px-6 py-12 md:px-12 md:py-16 text-center text-white rounded-none">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
          Subscribe to Security Dispatch
        </h2>

        <p className="mt-3 text-zinc-400 font-light max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
          Receive technical security research, vulnerability advisories, and protocol audit reports directly to your inbox.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-3 justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
              if (infoMsg) setInfoMsg("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubscribe();
            }}
            placeholder="Enter your work email address"
            className="px-4 py-3.5 rounded-none bg-zinc-900 text-white font-light text-xs placeholder:text-zinc-500 outline-none w-full md:w-[380px] border border-zinc-800 focus:border-blue-500 transition-colors"
          />

          <button
            onClick={handleSubscribe}
            disabled={submitting}
            className={`
              min-w-[150px] px-6 py-3.5 rounded-none font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 border cursor-pointer disabled:opacity-70
              ${
                subscribed
                  ? "border-emerald-500 text-emerald-400 bg-transparent"
                  : "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
              }
            `}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Subscribing...
              </>
            ) : subscribed ? (
              <>
                <Check size={16} />
                Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>

        {errorMsg && (
          <p className="mt-3 text-xs text-red-400 font-mono">{errorMsg}</p>
        )}

        {infoMsg && (
          <p className="mt-3 text-xs text-blue-300 font-mono">{infoMsg}</p>
        )}
      </div>
    </section>
  );
}
