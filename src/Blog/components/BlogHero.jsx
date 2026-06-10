import { Search } from "lucide-react";
import GridBackground from "../utils/GridBackground";

export default function BlogHero() {
  return (
    <section className="relative bg-black pt-40 pb-24 px-6 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="text-blue-500 text-sm font-medium tracking-widest uppercase">
          BlocNexus Research
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white">
          Blogs & Research
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
          Smart contract security research, audit reports,
          exploit analysis, protocol reviews and Web3
          security insights.
        </p>

        <div className="mt-10 max-w-xl mx-auto">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
            "
          >
            <Search
              size={20}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search articles..."
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-slate-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}