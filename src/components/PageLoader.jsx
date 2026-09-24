/**
 * Simple, professional loader — small spinning circle on a
 * black backdrop with glass-blur. Used only where truly needed
 * (Suspense fallback, data-fetching states).
 */
export default function PageLoader({ fullScreen = true }) {
  const spinner = (
    <div className="flex items-center justify-center">
      <div
        className="
          w-8 h-8
          rounded-full
          border-[2.5px] border-white/15
          border-t-white
          animate-spin
        "
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  /* Inline variant — sits inside a section */
  return (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      {spinner}
    </div>
  );
}
