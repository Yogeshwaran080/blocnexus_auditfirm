import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

// Vertical Text Scroll Component (bottom-to-top transition matching product page)
function VerticalTextScroll({
  items = ["Smart Contracts", "Protocols", "dApps", "DeFi Platforms"],
  interval = 2200,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span className="inline-flex overflow-hidden align-bottom h-[1.12em] relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-blue-600 font-light whitespace-nowrap inline-block"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Animated Crisp Slim Dark Black Lines along Grid Lines (Starts 70% from Left)
function GridGlowingLinesAnimation() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const CELL_SIZE = 45; // Matches background grid 45px 45px

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const numCols = Math.ceil(canvas.width / CELL_SIZE);
    const numRows = Math.ceil(canvas.height / CELL_SIZE);

    // Create pulses traveling strictly along right-side grid lines
    const numPulses = 8;
    const pulses = Array.from({ length: numPulses }, () => {
      const isHorizontal = Math.random() > 0.5;
      const col = Math.floor(Math.random() * (numCols + 1));
      const row = Math.floor(Math.random() * (numRows + 1));
      return {
        col,
        row,
        dir: isHorizontal ? "H" : "V",
        step: Math.random() > 0.5 ? 1 : -1,
        progress: Math.random(),
        speed: 0.01 + Math.random() * 0.015,
        length: 1.5 + Math.random() * 1.5, // length in grid units
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxCols = Math.ceil(canvas.width / CELL_SIZE);
      const maxRows = Math.ceil(canvas.height / CELL_SIZE);

      ctx.save();
      ctx.lineCap = "square";

      pulses.forEach((p) => {
        p.progress += p.speed;

        // Step to next grid cell when progress reaches 1
        if (p.progress >= 1) {
          p.progress = 0;
          if (p.dir === "H") {
            p.col += p.step;
          } else {
            p.row += p.step;
          }

          // Keep strictly inside bounds
          if (p.col < 0 || p.col > maxCols || p.row < 0 || p.row > maxRows) {
            p.col = Math.floor(Math.random() * (maxCols + 1));
            p.row = Math.floor(Math.random() * (maxRows + 1));
          }

          // 50% chance to turn 90 degrees at grid intersection
          if (Math.random() > 0.5) {
            p.dir = p.dir === "H" ? "V" : "H";
            p.step = Math.random() > 0.5 ? 1 : -1;
          }
        }

        // Compute head & tail positions strictly on grid lines
        let headX, headY, tailX, tailY;
        const offset = p.progress * CELL_SIZE;

        if (p.dir === "H") {
          headY = p.row * CELL_SIZE;
          tailY = headY;
          headX = p.col * CELL_SIZE + p.step * offset;
          tailX = headX - p.step * (p.length * CELL_SIZE);
        } else {
          headX = p.col * CELL_SIZE;
          tailX = headX;
          headY = p.row * CELL_SIZE + p.step * offset;
          tailY = headY - p.step * (p.length * CELL_SIZE);
        }

        // Draw sharp, slim dark black line segment (no blur)
        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, "rgba(0, 0, 0, 0)");
        grad.addColorStop(0.4, "rgba(0, 0, 0, 0.45)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.95)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.0; // Crisp slim line
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // Draw sharp node point at head
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(headX, headY, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block absolute left-[70%] right-0 top-0 bottom-0 h-full pointer-events-none z-5 opacity-90"
    />
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-[#F4F3F1] text-zinc-900 pt-28 md:pt-36 pb-16"
    >
      {/* ── BACKGROUND GRID & TEXTURE (Matches product pages light theme) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px"
        }}
      />

      {/* ── ANIMATED DARK BLACK GLOWING LINES ALONG GRID LINES ── */}
      <GridGlowingLinesAnimation />

      <div className="relative z-10 lg:-mt-3 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center min-h-[75vh]">
        <div className="w-full max-w-full md:max-w-4xl">

          {/* HEADLINE WITH VERTICAL TEXT SCROLL */}
          <h1 className="text-black font-light tracking-tight leading-[1.08] text-[38px] sm:text-6xl lg:text-7xl flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3">
            <span>Secure</span>
            <VerticalTextScroll
              items={[
                "Smart Contracts",
                "Protocols",
                "dApps",
                "DeFi Platforms",
              ]}
            />
            <div className="w-full mt-2 text-black font-light">
              Auditing & Consultation.
            </div>
          </h1>

          {/* TAGLINE */}
          <p className="mt-6 text-zinc-700 text-base md:text-2xl font-light leading-relaxed max-w-2xl">
            Build secure systems. Launch trusted Web3 protocols with confidence. Comprehensive line-by-line manual code audits, formal verification, and penetration testing.
          </p>

          {/* CTA BUTTONS (High-Contrast White and Black Design) */}
          <div className="mt-10 flex flex-wrap gap-4 items-center w-full sm:w-auto">
            <button
              onClick={() => navigate("/request-a-quote")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-base transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              Get an Audit
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-zinc-300 hover:border-black text-zinc-900 font-medium text-base transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap size={18} className="text-zinc-700" />
              View Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}