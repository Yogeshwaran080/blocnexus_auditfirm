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
      href: "/wallet-detection",
    },
    {
      title: "NFT Detection",
      desc: "Malicious NFT airdrop & drainer campaign scanning",
      icon: "ImageOff",
      href: "/nft-detection",
    },
    {
      title: "Transaction Fraud Detection",
      desc: "Real-time fraud, phishing & social engineering prevention",
      icon: "ShieldAlert",
      href: "/transaction",
    },
    {
      title: "Gas Optimization",
      desc: "Contract gas profiling & execution efficiency analysis",
      icon: "Fuel",
      href: "/gas-optimization",
    },
    {
      title: "Find Flaws in Contract",
      desc: "Automated vulnerability scanning & exploit detection",
      icon: "SearchCode",
      href: "/find-flaws",
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
      href: "/smart-contract-auditing",
    },
    {
      title: "Penetration Testing",
      desc: "Real-world adversarial attack simulations",
      icon: "Target",
      href: "/penetration-testing",
    },
    {
      title: "Consultation & Architecture",
      desc: "Expert security guidance & protocol design review",
      icon: "BrainCircuit",
      href: "/consultation-architecture",
    },
    {
      title: "Static Analysis & Monitoring",
      desc: "Automated scanning & continuous on-chain monitoring",
      icon: "Activity",
      href: "/static-analysis",
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

/* ─── COMPANY DROPDOWN LINKS ─── */
export const companyLinks = [
  { name: "About Us",       desc: "Our mission, research & security team", icon: "Info",                   href: "/about-us" },
  { name: "Careers",        desc: "Join our security research team",       icon: "Briefcase",             href: "/careers" },
  { name: "Contact Us",     desc: "Get in touch with our security team",   icon: "Mail",                  href: "/request-a-quote" },
];

/* ─── TOP-LEVEL NAV LINKS ─── */

export const navLinks = [
  { name: "Products",  hasProductsDropdown: true },
  { name: "Services",  hasServicesDropdown: true },
  { name: "Company",   hasCompanyDropdown: true },
  { name: "Blogs",     href: "/blogs" },
  { name: "Contact",   href: "/request-a-quote" },
];
