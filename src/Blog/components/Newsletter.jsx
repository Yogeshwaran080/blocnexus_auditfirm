import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;

    // Later connect your backend here

    setSubscribed(true);
    setEmail("");

    // Reset button after 2.5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 2500);
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
            onChange={(e) =>
              setEmail(e.target.value)
            }
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
            onClick={handleSubscribe}
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
      </div>
    </section>
  );
}