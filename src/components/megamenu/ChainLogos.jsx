/**
 * ChainLogos.jsx
 * ─────────────────────────────────────────────────────
 * Inline SVG logos for each supported blockchain.
 * Returns a small, brand-accurate icon for use in the
 * mega dropdown chains sidebar.
 *
 * Each logo uses the chain's official brand colours.
 * ─────────────────────────────────────────────────────
 */

export function ChainLogo({ name, size = 18 }) {
  const s = size;

  switch (name) {
    case "Ethereum":
      return (
        <svg width={s} height={s} viewBox="0 0 256 417" fill="none">
          <path fill="#627EEA" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
          <path fill="#8A92B2" d="M127.962 0L0 212.32l127.962 75.638V154.158z" />
          <path fill="#627EEA" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" />
          <path fill="#8A92B2" d="M127.962 416.905v-104.72L0 236.585z" />
        </svg>
      );

    case "Base":
      return (
        <svg width={s} height={s} viewBox="0 0 115 115" fill="none">
          <circle cx="57.5" cy="57.5" r="57.5" fill="#0052FF" />
          <path fill="#fff" d="M57.5 96c21.263 0 38.5-17.237 38.5-38.5S78.763 19 57.5 19C36.852 19 20 35.312 19.04 55.73h46.85v3.54H19.04C20 79.688 36.852 96 57.5 96z" />
        </svg>
      );

    case "Arbitrum":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#213147" />
          <path fill="#28A0F0" d="M20.9 25.5l3.4-5.5 3.4 5.7-3.4 2L20.9 25.5z" />
          <path fill="#fff" d="M24.3 13.7L20 21l-4.3-7.3h8.6zM15.7 20l-3.4 5.5 3.4 2 3.4-5.7L15.7 20z" />
        </svg>
      );

    case "Optimism":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#FF0420" />
          <path fill="#fff" d="M13.5 15a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM21.5 15h2.8v6c0 1.7-1.1 3-2.8 3h-2.8v-2.2h2.8V15z" />
        </svg>
      );

    case "Polygon":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#8247E5" />
          <path fill="#fff" d="M26.3 16.4c-.4-.2-.9-.2-1.3 0l-3.1 1.8-2.1 1.2-3.1 1.8c-.4.2-.9.2-1.3 0l-2.4-1.4c-.4-.3-.7-.7-.7-1.2v-2.7c0-.5.2-1 .7-1.2l2.4-1.4c.4-.2.9-.2 1.3 0l2.4 1.4c.4.3.7.7.7 1.2v1.8l2.1-1.2v-1.8c0-.5-.2-1-.7-1.2l-4.5-2.6c-.4-.2-.9-.2-1.3 0l-4.6 2.7c-.4.2-.7.7-.7 1.2v5.2c0 .5.2 1 .7 1.2l4.5 2.6c.4.2.9.2 1.3 0l3.1-1.8 2.1-1.2 3.1-1.8c.4-.2.9-.2 1.3 0l2.4 1.4c.4.3.7.7.7 1.2v2.7c0 .5-.2 1-.7 1.2l-2.4 1.4c-.4.2-.9.2-1.3 0l-2.4-1.4c-.4-.3-.7-.7-.7-1.2v-1.8l-2.1 1.2v1.8c0 .5.2 1 .7 1.2l4.5 2.6c.4.2.9.2 1.3 0l4.5-2.6c.4-.2.7-.7.7-1.2v-5.2c0-.5-.2-1-.7-1.2l-4.5-2.7z" />
        </svg>
      );

    case "BSC":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#F0B90B" />
          <path fill="#fff" d="M20 10l3 3-5.5 5.5-3-3L20 10zm-7 7l3 3-3 3-3-3 3-3zm14 0l3 3-3 3-3-3 3-3zm-7 7l3 3-5.5 5.5-3-3L20 24z" />
          <path fill="#fff" d="M20 17l3 3-3 3-3-3 3-3z" />
        </svg>
      );

    case "Avalanche":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#E84142" />
          <path fill="#fff" d="M27.2 26h-3.8c-.6 0-1-.2-1.3-.7l-2.1-3.6 2-3.5c.3-.5.7-.7 1.3-.7h3.8c.6 0 1 .2 1.3.7l2.1 3.5-2.1 3.6c-.3.5-.7.7-1.2.7zm-10.4 0h-3.6c-.6 0-1-.2-1.3-.7L9.7 21.7c-.3-.5-.3-1.1 0-1.5l2.1-3.5c.3-.5.7-.7 1.3-.7h3.6c.6 0 1 .2 1.3.7l2.1 3.5c.3.5.3 1.1 0 1.5L18 25.3c-.3.5-.7.7-1.2.7z" />
        </svg>
      );

    case "Solana":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#000" />
          <defs>
            <linearGradient id="sol-g" x1="30" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFA3" />
              <stop offset="1" stopColor="#DC1FFF" />
            </linearGradient>
          </defs>
          <path fill="url(#sol-g)" d="M12.5 24.5c.2-.2.5-.3.8-.3h15c.5 0 .7.6.4.9l-2.7 2.7c-.2.2-.5.3-.8.3h-15c-.5 0-.7-.6-.4-.9l2.7-2.7zM12.5 12.2c.2-.2.5-.3.8-.3h15c.5 0 .7.6.4.9l-2.7 2.7c-.2.2-.5.3-.8.3h-15c-.5 0-.7-.6-.4-.9l2.7-2.7zM27.5 18.3c-.2-.2-.5-.3-.8-.3h-15c-.5 0-.7.6-.4.9l2.7 2.7c.2.2.5.3.8.3h15c.5 0 .7-.6.4-.9l-2.7-2.7z" />
        </svg>
      );

    default:
      return (
        <div
          className="rounded-full bg-white/10"
          style={{ width: s, height: s }}
        />
      );
  }
}
