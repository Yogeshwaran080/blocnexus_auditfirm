import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import BlocLogoImg from "../assets/Blocnexus_logo.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function ConsultationArchitecture() {
  return (
    <ProductServiceTemplate
      title="Consultation & Architecture"
      badgeText="⚡ Expert Web3 Security Guidance & Protocol Review"
      scrollItems={["Protocol Architecture", "Proxy Safety", "Multisig Governance", "Tokenomics"]}
      description="Full-stack architectural review validating upgradeable proxy patterns, modular access control hierarchies, and protocol invariant boundaries before writing code."
      gridSize="52px 52px"
      heroImage={BlocLogoImg}
      pipelineTitle="How We Design Resilient Web3 Architecture"
      pipelineDesc="Pre-code architectural validation, upgrade pattern reviews, and multisig governance design."
      steps={[
        { num: "01", category: "BLUEPRINT", title: "Architecture & Data Flow Mapping", desc: "Reviews cross-contract data flows, state mutability, and upgrade proxy patterns.", tagIcon: Activity, tagLabel: "Blueprint Matrix", status: "Active" },
        { num: "02", category: "PROXIES", title: "UUPS & Diamond Proxy Safety Review", desc: "Validates storage collision safety and upgrade governance authorization checks.", tagIcon: Cpu, tagLabel: "Proxy Inspector", status: "Validated" },
        { num: "03", category: "GOVERNANCE", title: "Multisig & Timelock Hierarchy", desc: "Designs emergency pause controls, multi-sig key custody, and decentralized timelocks.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Hardened", alertText: "Eliminates upgrade storage collisions & key centralization" },
        { num: "04", category: "ROADMAP", title: "Production Security Roadmap", desc: "Delivers comprehensive protocol design blueprints and security milestone roadmaps.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Blueprint Ready" }
      ]}
    />
  );
}
