import { useState, useEffect, useRef } from "react";
import {
  Target,
  FileSearch,
  Code2,
  ScanLine,
  Radar,
  Bug,
  Lock,
  Shield,
  ArrowUpRight,
} from "lucide-react";

export default function SolutionsSection() {
  const [active, setActive] = useState(0);

  const rightScrollContainerRef = useRef(null);
  const categoryElementsRef = useRef([]);
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef(null);

  const services = {
    audit: {
      icon: FileSearch,
      t: "Smart Contract Audit",
      d: "Comprehensive manual and automated vulnerability analysis.",
    },
    pentest: {
      icon: Target,
      t: "Penetration Testing",
      d: "Simulated real-world adversarial attacks.",
    },
    code: {
      icon: Code2,
      t: "Code Review",
      d: "Expert-led architecture and logic review.",
    },
    static: {
      icon: ScanLine,
      t: "Static Analysis",
      d: "Automated vulnerability detection.",
    },
    threat: {
      icon: Radar,
      t: "Threat Modeling",
      d: "Pre-deployment risk identification.",
    },
    bugbounty: {
      icon: Bug,
      t: "Bug Bounty Setup",
      d: "Crowdsourced security testing.",
    },
    exploit: {
      icon: Lock,
      t: "Exploit Detection",
      d: "Real-time exploit monitoring.",
    },
    hardening: {
      icon: Shield,
      t: "Protocol Hardening",
      d: "Infrastructure security strengthening.",
    },
  };

  const categories = [
    {
      title: "Enterprises",
      desc: "Institutional security management",
      items: [
        services.audit,
        services.pentest,
        services.hardening,
        services.code,
      ],
    },
    {
      title: "Web3 Projects",
      desc: "Secure launch strategies",
      items: [
        services.audit,
        services.code,
        services.static,
        services.threat,
      ],
    },
    {
      title: "Exchanges & DeFi",
      desc: "Continuous protection systems",
      items: [
        services.pentest,
        services.bugbounty,
        services.exploit,
        services.audit,
      ],
    },
  ];

  const handleCategoryClick = (index) => {
    isClickScrolling.current = true;
    setActive(index);

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    const target = categoryElementsRef.current[index];
    const container = rightScrollContainerRef.current;

    if (target && container) {
      container.scrollTo({
        top: target.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }

    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  useEffect(() => {
    const container = rightScrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: container,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    categoryElementsRef.current.forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#FAFAFA] py-14 px-5 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.25em]">
            Solutions Map
          </p>
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-2">
            Security for the Ecosystem
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT SIDEBAR (DESKTOP) + TOP SCROLL (MOBILE) */}
          <div className="lg:col-span-5">

            {/* MOBILE CATEGORY BAR */}
            <div className="flex lg:hidden gap-3 overflow-x-auto pb-3 mb-5 scrollbar-hide">
              {categories.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleCategoryClick(i)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm transition ${
                    active === i
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* DESKTOP SIDEBAR */}
            <div className="hidden lg:flex lg:flex-col gap-4 lg:sticky lg:top-10 h-fit">
              {categories.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleCategoryClick(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition ${
                    active === i
                      ? "bg-white border-blue-600 shadow-sm"
                      : "bg-transparent border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold ${
                      active === i
                        ? "text-blue-600"
                        : "text-gray-900"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {c.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 relative">

            <div
              ref={rightScrollContainerRef}
              className="
                h-[520px]
                md:h-[520px]
                lg:h-[520px]
                overflow-y-auto
                pr-2
                space-y-5
                scroll-smooth
                relative
              "
            >
              {categories.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  data-index={catIdx}
                  ref={(el) =>
                    (categoryElementsRef.current[catIdx] = el)
                  }
                >
                  <div className="space-y-3">
                    {cat.items.map((item, idx) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={`${catIdx}-${idx}`}
                          className="
                            flex
                            items-start
                            justify-between
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            p-4
                            hover:border-gray-400
                            transition
                            min-h-[100px]
                            md:min-h-[110px]
                          "
                        >
                          <div className="flex gap-3 max-w-[75%]">
                            <Icon
                              className="text-gray-400 mt-1"
                              size={18}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {item.t}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.d}
                              </p>
                            </div>
                          </div>

                          <button className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                            Action
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥 RESPONSIVE SMOKE FADE */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 md:h-32">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_75%)] bg-[#FAFAFA]/60" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}