import React, { lazy, Suspense } from "react";
import lottieAnimation from "../assets/lottie404.json";

// Lazily load Lottie renderer so site bundle speed and performance are unaffected
const Lottie = lazy(() => import("lottie-react"));

export default function Lottie404({
  title = "Page Not Found",
  message = "The page you are looking for does not exist or server could not be reached.",
  onRetry,
}) {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center w-full min-h-[70vh] bg-white"
    >
      <div className="w-full max-w-[420px] sm:max-w-[500px] h-auto flex items-center justify-center">
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-gray-400 font-light text-sm">Loading...</div>}>
          <Lottie
            animationData={lottieAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%", maxHeight: 340 }}
          />
        </Suspense>
      </div>

      <h2 className="mt-4 text-2xl sm:text-3xl font-light tracking-tight text-gray-900">
        {title}
      </h2>

      <p className="mt-2 text-sm font-light text-gray-500 max-w-md leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-6 py-2.5 rounded-lg bg-gray-900 text-white font-light text-xs hover:bg-gray-800 transition cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
