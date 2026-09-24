/**
 * megaMenuData.js
 * ─────────────────────────────────────────────────────
 * Single source of truth for the mega dropdown.
 *
 * Structure:
 *   - productsColumn   → BlocNexus products
 *   - servicesColumn   → BlocNexus services
 *   - chains           → Supported blockchains (grouped)
 *   - navLinks         → Top-level nav items
 * ─────────────────────────────────────────────────────
 */

/* ─── PRODUCTS ─── */

export const productsColumn = {
  heading: "Products",
  items: [
    {
      title: "Wallet Detection",
      desc: "End-user wallet security & malicious dApp scanning",
      icon: "Wallet",
      href: "/request-a-quote",
    },
    {
      title: "NFT Detection",
      desc: "Malicious NFT airdrop & drainer campaign scanning",
      icon: "ImageOff",
      href: "/request-a-quote",
    },
    {
      title: "Transaction Fraud Detection",
      desc: "Real-time fraud, phishing & social engineering prevention",
      icon: "ShieldAlert",
      href: "/request-a-quote",
    },
    {
      title: "Gas Optimization",
      desc: "Contract gas profiling & execution efficiency analysis",
      icon: "Fuel",
      href: "/request-a-quote",
    },
    {
      title: "Find Flaws in Contract",
      desc: "Automated vulnerability scanning & exploit detection",
      icon: "SearchCode",
      href: "/request-a-quote",
    },
  ],
};

/* ─── SERVICES ─── */

export const servicesColumn = {
  heading: "Services",
  items: [
    {
      title: "Smart Contract Auditing",
      desc: "Manual & formal verification of smart contracts",
      icon: "FileSearch",
      href: "/request-a-quote",
    },
    {
      title: "Penetration Testing",
      desc: "Real-world adversarial attack simulations",
      icon: "Target",
      href: "/request-a-quote",
    },
    {
      title: "Consultation & Architecture",
      desc: "Expert security guidance & protocol design review",
      icon: "BrainCircuit",
      href: "/request-a-quote",
    },
    {
      title: "Static Analysis & Monitoring",
      desc: "Automated scanning & continuous on-chain monitoring",
      icon: "Activity",
      href: "/request-a-quote",
    },
  ],
};

/* ─── CHAINS ─── */

export const ethereumChains = [
  { name: "Ethereum",  ticker: "ETH" },
  { name: "Base",      ticker: "BASE" },
  { name: "Arbitrum",  ticker: "ARB" },
  { name: "Optimism",  ticker: "OP" },
  { name: "Polygon",   ticker: "MATIC" },
  { name: "BSC",       ticker: "BNB" },
  { name: "Avalanche", ticker: "AVAX" },
];

export const solanaChains = [
  { name: "Solana", ticker: "SOL" },
];

/* ─── TOP-LEVEL NAV LINKS ─── */

export const navLinks = [
  { name: "Solutions", hasMega: true },
  { name: "About",     href: "/about-us" },
  { name: "Blogs",     href: "/blogs" },
  { name: "Contact",   href: "/request-a-quote" },
];
