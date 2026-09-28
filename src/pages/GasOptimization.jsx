import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import HeroImg from "../assets/hero.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function GasOptimization() {
  return (
    <ProductServiceTemplate
      title="Gas Optimization"
      seoTitle="Smart Contract Gas Optimization & EVM Profiling | BlocNexus"
      seoDescription="Reduce EVM smart contract gas fees by up to 40%. Profiling storage slot packing, Yul inline assembly, loop unrolling, and opcode execution."
      seoKeywords="smart contract gas optimization, EVM gas profiler, Solidity gas efficiency, Yul assembly optimization, storage slot packing"
      canonical="/gas-optimization"
      badgeText="⚡ Smart Contract Execution & Gas Profiling"
      scrollItems={["Gas Profiling", "Opcode Analysis", "Storage Packing", "Bytecode Tuning"]}
      description="Optimize smart contract execution efficiency, reduce EVM transaction gas fees by up to 40%, and streamline storage layout."
      gridSize="40px 40px"
      heroImage={HeroImg}
      pipelineTitle="How We Optimize Smart Contract Gas"
      pipelineDesc="Deep opcode profiling, storage packing analysis, and automated loop unrolling verification."
      steps={[
        { num: "01", category: "PROFILING", title: "EVM Opcode & Execution Tracing", desc: "Traces transaction execution opcodes to measure exact gas consumption per internal call.", tagIcon: Activity, tagLabel: "Gas Profiler", status: "Active" },
        { num: "02", category: "STORAGE", title: "Storage Layout & Slot Packing", desc: "Analyzes struct packing, variable alignments, and storage slot access patterns.", tagIcon: Cpu, tagLabel: "Slot Optimizer", status: "Analyzed" },
        { num: "03", category: "REFACTOR", title: "Automated Code & Loop Optimization", desc: "Refactors un-cached state reads, redundant checks, and inefficient memory allocations.", tagIcon: ShieldAlert, tagLabel: "Refactor Engine", status: "Optimized", alertText: "Reduces contract gas consumption by up to 40%" },
        { num: "04", category: "VERIFICATION", title: "Benchmark & Invariant Verification", desc: "Validates optimized bytecode to ensure zero loss of protocol security or invariants.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Verified" }
      ]}
    />
  );
}
