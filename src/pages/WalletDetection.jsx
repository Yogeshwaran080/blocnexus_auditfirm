import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import AuditLogoImg from "../assets/audit_logo.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function WalletDetection() {
  return (
    <ProductServiceTemplate
      title="Wallet Detection"
      badgeText="⚡ End-User Wallet & Malicious dApp Protection"
      scrollItems={["Wallet Security", "dApp Scanning", "Drainer Shield", "Phishing Guard"]}
      description="Real-time protection for end-user Web3 wallets. Detect malicious dApp signatures, approval hijacking, and zero-day wallet drainers."
      gridSize="35px 35px"
      heroImage={AuditLogoImg}
      pipelineTitle="How We Protect Web3 Wallets"
      pipelineDesc="Four-layer RPC & wallet simulation matrix inspecting signatures and spender bytecode."
      steps={[
        { num: "01", category: "INGESTION", title: "RPC Connection & Signature Interception", desc: "Monitors connection requests, EIP-712 permit signatures, and RPC call payloads.", tagIcon: Activity, tagLabel: "RPC Relay", status: "Active" },
        { num: "02", category: "ANALYSIS", title: "Spender Contract Verification", desc: "Decompiles target spender contracts to verify ABI source authenticity and check blacklists.", tagIcon: Cpu, tagLabel: "EVM Inspector", status: "Verified" },
        { num: "03", category: "AI SHIELD", title: "Phishing & Drainer Pattern Match", desc: "Cross-references addresses against global phishing lists and active drainer signature templates.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Pattern Matched", alertText: "Flags unverified wallet drainers & approval hijacking" },
        { num: "04", category: "VERDICT", title: "Instant Wallet Shield & Warning", desc: "Delivers sub-millisecond warning alerts to the wallet interface and blocks malicious calls.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Shielded" }
      ]}
    />
  );
}
