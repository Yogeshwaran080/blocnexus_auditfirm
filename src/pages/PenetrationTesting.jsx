import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import AuditLogoImg from "../assets/audit_logo.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function PenetrationTesting() {
  return (
    <ProductServiceTemplate
      title="Penetration Testing"
      badgeText="⚡ Real-World Adversarial Web3 Protocol Attacks"
      scrollItems={["Adversarial Attacks", "Cross-Chain Bridges", "RPC Infrastructure", "dApp Frontends"]}
      description="Simulate real-world adversarial attacks across your entire protocol attack surface — smart contracts, cross-chain bridges, dApp frontends, and backend relays."
      gridSize="48px 48px"
      heroImage={AuditLogoImg}
      pipelineTitle="Our Adversarial Attack Simulation Method"
      pipelineDesc="Black-box, gray-box, and white-box penetration testing by white-hat security researchers."
      steps={[
        { num: "01", category: "RECON", title: "Full Attack Surface Mapping", desc: "Maps all public endpoints, RPC gateways, bridge relays, and smart contract interfaces.", tagIcon: Activity, tagLabel: "Recon Matrix", status: "Active" },
        { num: "02", category: "EXPLOIT", title: "Adversarial Attack Simulation", desc: "Executes black-box and white-box exploit vectors simulating real malicious hackers.", tagIcon: Cpu, tagLabel: "Exploit Engine", status: "Executed" },
        { num: "03", category: "CHAOS", title: "Frontend & Bridge Vulnerability Scans", desc: "Surfaces DNS hijacking, BGP manipulation, RPC spoofing, and bridge state forgery.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Surfaced", alertText: "Identifies frontend DNS hijack & RPC relay vulnerabilities" },
        { num: "04", category: "HARDENING", title: "CVSS Impact Scoring & Debrief", desc: "Provides prioritized remediation guidance and post-engagement validation.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Hardened" }
      ]}
    />
  );
}
