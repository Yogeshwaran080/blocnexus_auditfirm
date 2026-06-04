import { motion } from "framer-motion";
import GridBackground from "../utility/GridBackground";
import TextType from "../utility/TextType";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black font-manrope"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24">
        <div className="max-w-4xl">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white tracking-tight"
          >
            
            {/* Line 1 */}
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

            {/* Line 2 */}
            <div className="text-5xl md:text-7xl font-semibold leading-[1.1] mt-2">
              Auditing & Protection.
            </div>

            {/* Tagline */}
            <div className="mt-5 text-slate-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Build secure systems. Launch trusted Web3 protocols with confidence.
            </div>

          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get an Audit
            </button>

            <button className="rounded-xl border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600">
              View Services
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}