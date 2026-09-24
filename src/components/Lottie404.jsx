import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/lottie404.json";

/**
 * Renders the 404 Lottie animation using lottie-web directly.
 * No text, no title, no message — just the animation centred on screen.
 * Accepts an optional `onRetry` callback to render a subtle retry button.
 */
export default function Lottie404({ onRetry }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="flex flex-col items-center justify-center pt-8 pb-24 px-6 w-full min-h-[75vh] bg-[#050711]"
    >
      {/* Lottie animation container */}
      <div
        ref={containerRef}
        className="w-full max-w-[560px] sm:max-w-[640px]"
        style={{ minHeight: 300 }}
      />
    </div>
  );
}
