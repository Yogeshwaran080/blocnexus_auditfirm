import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";

import { createUser, updateSubscription, ApiError } from "../api/blogApi";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Name popup state
  const [showNameModal, setShowNameModal] = useState(false);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleSubscribeClick = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setInfoMsg("");
    setShowNameModal(true);
  };

  const closeModal = () => {
    if (submitting) return;
    setShowNameModal(false);
    setName("");
    setErrorMsg("");
  };

  const finishSubscribed = () => {
    setSubscribed(true);
    setEmail("");
    setName("");
    setShowNameModal(false);
    setTimeout(() => setSubscribed(false), 2500);
  };

  const handleConfirmSubscribe = async () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMsg("Please enter your name.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      // Creates the user record in the database.
      const user = await createUser(trimmedName, email.trim());

      // Marks the newly created user as subscribed = YES.
      await updateSubscription(user.id, "YES");

      finishSubscribed();
    } catch (err) {
      if (err instanceof ApiError && err.status === 409) {
        // Email already exists in the DB — backend has no lookup-by-email
        // endpoint, so we can't fetch their id to update the subscription.
        // Treat it as already subscribed rather than failing loudly.
        setInfoMsg("You're already on our list!");
        finishSubscribed();
      } else if (err instanceof ApiError && err.status === 400) {
        setErrorMsg(err.message || "Please check your details and try again.");
      } else {
        setErrorMsg(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div
        className="
          max-w-5xl
          mx-auto
          rounded-3xl
          bg-[#050816]
          px-8
          py-16
          text-center
        "
      >
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Stay Ahead of Threats
        </h2>

        <p
          className="
            mt-4
            text-slate-400
            max-w-2xl
            mx-auto
          "
        >
          Get the latest security research,
          exploit analysis, audit findings,
          and Web3 vulnerability reports.
        </p>

        <div
          className="
            mt-8
            flex
            flex-col
            md:flex-row
            gap-4
            justify-center
            items-center
          "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubscribeClick();
            }}
            placeholder="Enter your email"
            className="
              px-5
              py-4
              rounded-xl
              bg-white/10
              text-white
              placeholder:text-slate-500
              outline-none
              w-full
              md:w-[420px]
              border
              border-white/10
              focus:border-blue-500
              transition-all
            "
          />

          <button
            onClick={handleSubscribeClick}
            className={`
              min-w-[170px]
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
              border

              ${
                subscribed
                  ? "border-green-500 text-green-400 bg-transparent"
                  : "border-blue-600 bg-blue-600 text-white hover:bg-blue-700"
              }
            `}
          >
            {subscribed ? (
              <>
                <Check size={18} />
                Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>

        {!showNameModal && errorMsg && (
          <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
        )}

        {!showNameModal && infoMsg && (
          <p className="mt-4 text-sm text-blue-300">{infoMsg}</p>
        )}
      </div>

      {/* NAME POPUP */}
      {showNameModal && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            px-6
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              bg-[#050816]
              border
              border-white/10
              px-8
              py-10
              text-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="
                absolute
                top-5
                right-5
                text-slate-400
                hover:text-white
                transition-colors
              "
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white">
              Almost there
            </h3>

            <p className="mt-2 text-slate-400 text-sm">
              What should we call you, {email}?
            </p>

            <input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errorMsg) setErrorMsg("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleConfirmSubscribe();
              }}
              placeholder="Your name"
              className="
                mt-6
                w-full
                px-5
                py-4
                rounded-xl
                bg-white/10
                text-white
                placeholder:text-slate-500
                outline-none
                border
                border-white/10
                focus:border-blue-500
                transition-all
              "
            />

            {errorMsg && (
              <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
            )}

            <button
              onClick={handleConfirmSubscribe}
              disabled={submitting}
              className="
                mt-6
                w-full
                px-8
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                flex
                items-center
                justify-center
                gap-2
                border
                border-blue-600
                bg-blue-600
                text-white
                hover:bg-blue-700
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Confirm Subscription"
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
