import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import AuditImg from "../assets/audit.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function SmartContractAuditing() {
  return (
    <ProductServiceTemplate
      title="Smart Contract Auditing"
      badgeText="⚡ Institutional Manual & Formal Smart Contract Verification"
      scrollItems={["Solidity Audits", "Vyper Verification", "Solana Programs", "Move & Cairo"]}
      description="Rigorous line-by-line manual code inspection paired with formal mathematical verification to eliminate critical exploits before protocol mainnet deployment."
      gridSize="60px 60px"
      heroImage={AuditImg}
      pipelineTitle="Our Institutional Security Audit Process"
      pipelineDesc="Structured multi-tier security review by senior Web3 protocol auditors."
      steps={[
        { num: "01", category: "MANUAL", title: "Line-by-Line Manual Code Review", desc: "Senior security researchers inspect logic, access controls, state transitions, and math.", tagIcon: Activity, tagLabel: "Auditor Matrix", status: "Active" },
        { num: "02", category: "FORMAL", title: "Formal Verification & Invariant Proofs", desc: "Proves protocol invariants mathematically using formal specification tools.", tagIcon: Cpu, tagLabel: "Formal Engine", status: "Verified" },
        { num: "03", category: "ECONOMIC", title: "MEV & Economic Attack Simulation", desc: "Simulates flash loans, oracle manipulation vectors, and liquidation cascade risks.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Simulated", alertText: "Detects reentrancy, flash loan exploits, & governance risks" },
        { num: "04", category: "CERTIFICATION", title: "Comprehensive Audit Report & Retest", desc: "Delivers actionable fix recommendations and re-audits patched code prior to launch.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Certified" }
      ]}
    />
  );
}
