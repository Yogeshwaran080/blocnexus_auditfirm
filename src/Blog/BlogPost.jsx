import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Eye,
  Calendar,
  Clock,
  Heart,
} from "lucide-react";

import blogs from "./data/blogs";

export default function BlogPost() {
  const { id } = useParams();

  const [liked, setLiked] = useState(false);

  const blog = blogs.find(
    (b) => String(b.id) === id
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black">
          Blog Not Found
        </h1>
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
            {blog.category}
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
            {blog.title}
          </h1>

          {/* EXCERPT */}

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
            Deep security analysis, exploit
            breakdown, root cause analysis,
            mitigation strategies, and
            real-world attack scenarios.
          </p>

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
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Eye size={18} />
              <span>{blog.views}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>

            {/* LIKE BUTTON */}

            <button
              onClick={() =>
                setLiked(!liked)
              }
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

                ${
                  liked
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-black hover:bg-blue-50 hover:border-blue-300"
                }
              `}
            >
              <Heart
                size={18}
                className={
                  liked
                    ? "fill-current"
                    : ""
                }
              />

              {liked
                ? "Liked"
                : "Like"}
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
            src={blog.image}
            alt={blog.title}
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
              <li>
                1. Introduction
              </li>

              <li>
                2. Technical Analysis
              </li>

              <li>
                3. Root Cause
              </li>

              <li>
                4. Impact
              </li>

              <li>
                5. Mitigation
              </li>

              <li>
                6. Conclusion
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ARTICLE */}

      {/* ARTICLE */}

<section className="pb-32">
  <div className="max-w-3xl mx-auto px-6">

    <article className="space-y-12 text-black">

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Introduction
        </h2>

        <p className="text-lg leading-9 text-black">
          Smart contract security remains one
          of the most important challenges in
          decentralized finance. Protocols
          routinely secure millions of dollars
          in assets, making them attractive
          targets for attackers seeking
          financial gain through exploitation.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          Even a seemingly minor implementation
          mistake can lead to severe
          consequences including fund loss,
          protocol insolvency, governance
          manipulation, or complete system
          compromise.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Technical Analysis
        </h2>

        <p className="text-lg leading-9 text-black">
          The vulnerability originates when
          user-controlled data enters a
          sensitive execution path without
          sufficient validation. During
          testing, multiple edge cases were
          identified where assumptions about
          protocol state transitions were
          violated.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          An attacker can leverage these
          inconsistencies to influence internal
          accounting logic, bypass intended
          security controls, and trigger
          unexpected protocol behavior.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-black">
{`function withdraw(uint256 amount) external {
    require(balance[msg.sender] >= amount);
    balance[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
}`}
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Root Cause
        </h2>

        <p className="text-lg leading-9 text-black">
          The root cause stems from a trust
          boundary violation. The protocol
          assumes that all external
          interactions behave honestly and
          return expected values.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          Public blockchain environments are
          adversarial by nature, meaning every
          external interaction must be treated
          as potentially malicious.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Impact
        </h2>

        <p className="text-lg leading-9 text-black">
          Successful exploitation could result
          in unauthorized withdrawals,
          accounting inconsistencies, denial of
          service, governance manipulation, or
          complete protocol insolvency.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          Depending on deployment size and
          total value locked, financial losses
          could range from thousands to
          millions of dollars.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Mitigation
        </h2>

        <p className="text-lg leading-9 text-black">
          Security can be significantly
          improved through comprehensive input
          validation, strict invariant checks,
          robust access control mechanisms, and
          extensive testing coverage.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          Continuous auditing, bug bounty
          programs, and proactive monitoring
          should be integrated into the
          protocol's long-term security
          strategy.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">
          Conclusion
        </h2>

        <p className="text-lg leading-9 text-black">
          Smart contract security is an ongoing
          process rather than a one-time task.
          Teams must continuously review their
          assumptions, monitor protocol
          behavior, and adapt defenses as new
          attack techniques emerge.
        </p>

        <p className="text-lg leading-9 text-black mt-6">
          A defense-in-depth approach remains
          the most effective strategy for
          protecting users, assets, and
          protocol integrity.
        </p>
      </div>

    </article>

  </div>
</section>

    </main>
  );
}