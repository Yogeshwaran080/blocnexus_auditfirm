import React from "react";
import ProductServiceTemplate from "./ProductServiceTemplate";
import TransactionImg from "../assets/Transaction.png";
import { Activity, Cpu, ShieldAlert, ShieldCheck } from "lucide-react";

export default function StaticAnalysis() {
  return (
    <ProductServiceTemplate
      title="Static Analysis & Monitoring"
      badgeText="⚡ Automated Continuous On-Chain Threat Surveillance"
      scrollItems={["On-Chain Watch", "CI/CD Scans", "Mempool Surveillance", "Circuit Breakers"]}
      description="24/7 automated vulnerability scanning integrated into CI/CD pipelines paired with real-time on-chain monitoring agents watching mempool activity."
      gridSize="38px 38px"
      heroImage={TransactionImg}
      pipelineTitle="Our Automated Monitoring & Surveillance Pipeline"
      pipelineDesc="Continuous automated scanning and 24/7 on-chain threat escalation."
      steps={[
        { num: "01", category: "CI/CD", title: "Automated Pipeline Integration", desc: "Embeds static analysis scanners directly into GitHub actions and deployment pipelines.", tagIcon: Activity, tagLabel: "CI/CD Bot", status: "Active" },
        { num: "02", category: "MEMPOOL", title: "Real-Time Mempool Surveillance", desc: "Monitors pending transactions for front-running, sandwich attacks, and MEV extraction.", tagIcon: Cpu, tagLabel: "Mempool Monitor", status: "Scanning" },
        { num: "03", category: "ANOMALY", title: "AI Anomaly & Outlier Detection", desc: "Flags sudden TVL fluctuations, unauthorized admin calls, and balance anomalies.", tagIcon: ShieldAlert, tagLabel: "Threat Engine", status: "Flagged", alertText: "Detects anomalous transaction spikes & sandwich attacks" },
        { num: "04", category: "PAUSE", title: "Automated Circuit Breaker Trigger", desc: "Triggers emergency protocol pauses via multi-sig hooks before block confirmation.", tagIcon: ShieldCheck, tagLabel: "Action Engine", status: "Protected" }
      ]}
    />
  );
}
