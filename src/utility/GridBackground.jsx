export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* Pure Black Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-[-250px]
          right-[-250px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/10
          blur-[200px]
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          bottom-[-250px]
          left-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/5
          blur-[200px]
        "
      />

    </div>
  );
}   