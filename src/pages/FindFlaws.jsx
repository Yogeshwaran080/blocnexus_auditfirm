import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import BlocLogoImg from "../assets/Blocnexus_logo.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function FindFlaws() {
  return (
    <ProductServiceTemplate
      title="Find Flaws in Contract"
      badgeText="⚡ Automated Vulnerability & Exploit Scanning"
      scrollItems={["Logic Flaws", "Reentrancy Bugs", "Access Control", "Oracle Vulnerabilities"]}
      description="Automated static analysis, symbolic execution, and vulnerability scanning engine designed to discover critical smart contract flaws before mainnet deployment."
      gridSize="30px 30px"
      heroImage={BlocLogoImg}
      pipelineTitle="How We Surface Contract Vulnerabilities"
      pipelineDesc="Automated fuzz testing, invariant proving, and symbolic analysis."
      steps={[
        { num: "01", category: "SCANNING", title: "AST & Static Analysis Ingestion", desc: "Generates Abstract Syntax Trees (AST) and control flow graphs for complete code coverage.", tagIcon: Activity, tagLabel: "AST Engine", status: "Active" },
        { num: "02", category: "SYMBOLIC", title: "Symbolic Execution & Path Solving", desc: "Executes mathematical path solvers to discover unreachable states and integer overflows.", tagIcon: Cpu, tagLabel: "Symbolic Solver", status: "Proved" },
        { num: "03", category: "FUZZING", title: "Adversarial Fuzzing & Invariant Testing", desc: "Simulates millions of random state inputs to break protocol invariant assertions.", tagIcon: ShieldAlert, tagLabel: "Fuzz Engine", status: "Fuzzed", alertText: "Surfaces hidden reentrancy & access control flaws" },
        { num: "04", category: "REPORT", title: "Automated Remediation Roadmap", desc: "Generates precise line-by-line patch fixes and risk-prioritized vulnerability scores.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Report Ready" }
      ]}
    />
  );
}
