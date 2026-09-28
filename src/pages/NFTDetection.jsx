import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import AuditImg from "../assets/audit.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function NFTDetection() {
  return (
    <ProductServiceTemplate
      title="NFT Detection"
      badgeText="⚡ Malicious NFT Airdrop & Campaign Scanning"
      scrollItems={["NFT Airdrops", "Fake Mints", "Drainer Campaigns", "Royalty Shield"]}
      description="Scan NFT contracts and airdrop campaigns to eliminate phishing mint sites, fake token drops, and malicious NFT drainers."
      gridSize="50px 50px"
      heroImage={AuditImg}
      pipelineTitle="How We Detect NFT Phishing Campaigns"
      pipelineDesc="Automated analysis of NFT minting contracts, metadata URIs, and permit approvals."
      steps={[
        { num: "01", category: "INGESTION", title: "Airdrop & Mint Request Surveillance", desc: "Monitors incoming NFT mint calls, token transfers, and metadata URIs.", tagIcon: Activity, tagLabel: "NFT Relay", status: "Active" },
        { num: "02", category: "ANALYSIS", title: "Metadata & URI Verification", desc: "Inspects metadata storage endpoints (IPFS/Arweave) for malicious scripts or redirect exploits.", tagIcon: Cpu, tagLabel: "URI Inspector", status: "Verified" },
        { num: "03", category: "AI SHIELD", title: "Fake Mint & Drainer Pattern Match", desc: "Matches contract bytecode against known NFT drainer templates and counterfeit collections.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Pattern Matched", alertText: "Flags malicious NFT mint sites & metadata redirects" },
        { num: "04", category: "VERDICT", title: "Instant NFT Security Shield", desc: "Shields user wallets from approving malicious setApprovalForAll signature requests.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Shielded" }
      ]}
    />
  );
}
