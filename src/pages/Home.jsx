import Hero from "../components/Hero";
import SolutionsSection from "../components/Solutions";
import Audit from "../components/Audit";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO
        title="BlocNexus | Institutional Web3 Smart Contract Audits & Protocol Security"
        description="BlocNexus delivers institutional-grade Web3 smart contract auditing, protocol penetration testing, formal verification, and real-time transaction threat prevention."
        keywords="smart contract audit, Web3 security, protocol security, blockchain audit firm, EVM audit, Solana audit, transaction fraud prevention"
        canonical="/"
      />
      <Hero />
      <SolutionsSection />
      <Audit />
    </main>
  );
}