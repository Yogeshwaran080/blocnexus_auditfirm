export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Black Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Slight Blue Grid Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          filter: "blur(1px)",
        }}
      />

      {/* Top Right Glow */}
      <div
        className="
          absolute
          -top-64
          -right-64
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/15
          blur-[180px]
        "
      />

      {/* Bottom Left Glow */}
      <div
        className="
          absolute
          -bottom-64
          -left-64
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/5
          blur-[140px]
        "
      />
    </div>
  );
}