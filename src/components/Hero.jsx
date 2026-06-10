import { motion } from "framer-motion";
import GridBackground from "../utility/GridBackground";
import TextType from "../utility/TextType";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-black font-manrope"
    >
      <GridBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[85vh]
          md:min-h-screen
          items-center
          max-w-7xl
          px-6
          md:px-8
          pt-12
          md:pt-24
          pb-8
          md:pb-0
        "
      >
        <div className="max-w-4xl w-full">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white tracking-tight"
          >
            {/* MOBILE VIEW */}
            <div className="block md:hidden text-center">

              <div className="text-[38px] font-semibold leading-[0.98]">
  Secure
</div>

<div
  className="
    mt-1
    text-[38px]
    font-semibold
    leading-[0.98]
    text-blue-500
    min-h-[60px]
    flex
    items-center
    justify-center
  "
>
                <TextType
                  text={[
                    "Smart Contracts",
                    "Protocols",
                    "dApps",
                    "DeFi Platforms",
                  ]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={1200}
                  showCursor
                  cursorCharacter="|"
                  cursorBlinkDuration={0.6}
                />
              </div>

              <div className="mt-1 text-[38px] font-semibold leading-[0.98]">
  Auditing & Protection.
</div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:block">
              <div className="flex flex-wrap items-baseline gap-3 text-5xl md:text-7xl font-semibold leading-[1.05]">
                <span>Secure</span>

                <span className="text-blue-500">
                  <TextType
                    text={[
                      "Smart Contracts",
                      "Protocols",
                      "dApps",
                      "DeFi Platforms",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDuration={1200}
                    showCursor
                    cursorCharacter="|"
                    cursorBlinkDuration={0.6}
                  />
                </span>
              </div>

              <div className="text-5xl md:text-7xl font-semibold leading-[1.1] mt-2">
                Auditing & Protection.
              </div>
            </div>

            {/* TAGLINE */}
            <div
              className="
                mt-6
                md:mt-5
                text-slate-400
                text-base
                md:text-2xl
                font-medium
                max-w-2xl
                leading-relaxed
                text-center
                md:text-left
                mx-auto
                md:mx-0
              "
            >
              Build secure systems. Launch trusted Web3 protocols with
              confidence.
            </div>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-14
              md:mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              md:justify-start
            "
          >
            <button onClick={() => navigate("/request-a-quote")}
              className="
                w-full
                sm:w-auto
                rounded-xl
                bg-blue-600
                px-8
                py-4
                md:px-6
                md:py-3
                text-base
                md:text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Get an Audit
            </button>

            <button
              onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
              className="
                w-full
                sm:w-auto
                rounded-xl
                border
                border-slate-700
                px-8
                py-4
                md:px-6
                md:py-3
                text-base
                md:text-sm
                font-semibold
                text-slate-300
                transition
                hover:border-slate-500
              "
            >
              View Services
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}