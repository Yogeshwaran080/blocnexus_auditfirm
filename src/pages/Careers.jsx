import React from "react";
import SEO from "../components/SEO";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase, Code, ShieldCheck, Cpu, Server, Check } from "lucide-react";

export default function Careers() {
  const navigate = useNavigate();

  const openRoles = [
    {
      id: "senior-smart-contract-auditor",
      title: "Senior Smart Contract Auditor",
      type: "Full-Time / Remote",
      department: "Security Engineering",
      stack: ["Solidity", "Yul", "EVM Bytecode", "Foundry", "Slither"],
      summary: "Lead complex manual code reviews, invariant fuzzing, and formal verification for DeFi, cross-chain bridges, and Layer 2 protocols.",
      responsibilities: [
        "Perform line-by-line manual code audits of EVM and non-EVM smart contracts.",
        "Develop custom invariant fuzz testing suites and property-based test harnesses.",
        "Author comprehensive audit reports with clear vulnerability classifications and remediation guidance.",
        "Collaborate directly with protocol founders to verify patch implementations."
      ]
    },
    {
      id: "infrastructure-telemetry-engineer",
      title: "Infrastructure & Telemetry Engineer",
      type: "Full-Time / Remote",
      department: "Core Systems",
      stack: ["Go (Golang)", "Rust", "System Design", "OOP", "gRPC"],
      summary: "Build ultra-low latency transaction telemetry pipelines, real-time node indexing engines, and high-throughput RPC infrastructure.",
      responsibilities: [
        "Design and maintain distributed RPC monitoring infrastructure capable of processing 100k+ TPS.",
        "Optimize memory management, zero-copy serialization, and concurrent data pipelines in Go and Rust.",
        "Architect resilient event-driven microservices using modern System Design and OOP principles.",
        "Ensure 99.99% uptime for transaction security validation APIs."
      ]
    },
    {
      id: "distributed-systems-architect",
      title: "Distributed Systems Architect (Apache Ecosystem)",
      type: "Full-Time / Remote",
      department: "Data Platform",
      stack: ["Apache Kafka", "Apache Spark", "Apache Cassandra", "Apache Avro", "Java/Go"],
      summary: "Architect big-data event streams and analytical processing platforms for real-time threat intelligence and fraud detection.",
      responsibilities: [
        "Build scalable event streaming pipelines with Apache Kafka for real-time transaction ingestion.",
        "Implement distributed analytical engines using Apache Spark and Apache Cassandra.",
        "Design schema evolution strategies with Apache Avro for cross-microservice state synchronization.",
        "Conduct capacity planning, fault-tolerance benchmarking, and distributed storage optimization."
      ]
    },
    {
      id: "security-researcher-penetration-tester",
      title: "Security Researcher & Penetration Tester",
      type: "Full-Time / Remote",
      department: "Offensive Security",
      stack: ["Rust", "Python", "Web3 Frontends", "RPC Node Exploits", "Fuzzing"],
      summary: "Conduct offensive security assessments against dApp web frontends, browser extension wallets, and validator infrastructure.",
      responsibilities: [
        "Perform black-box and white-box penetration testing on decentralized applications and APIs.",
        "Identify zero-day vectors in validator clients, RPC endpoints, and cross-chain relayers.",
        "Publish novel security research, exploit PoCs, and post-mortem advisories.",
        "Provide actionable mitigation strategies to client engineering teams."
      ]
    }
  ];

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-white text-zinc-900 pt-28 md:pt-36 pb-24"
    >
      <SEO
        title="Careers & Openings | BlocNexus Web3 Security"
        description="Explore open engineering and security research roles at BlocNexus. We are hiring auditors and developers skilled in Solidity, Rust, Go, System Design, and Apache tools."
        keywords="BlocNexus careers, Web3 security jobs, smart contract auditor hiring, Solidity Rust Go engineer"
        canonical="/careers"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-zinc-200 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 mb-4">
            <Briefcase size={14} className="text-zinc-900" /> Engineering Openings
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-[1.1]">
            Careers & Open Positions
          </h1>
          <p className="mt-4 text-zinc-600 text-base font-light leading-relaxed max-w-3xl">
            BlocNexus is hiring top-tier security researchers, smart contract auditors, and distributed systems engineers to protect high-value Web3 protocols and enterprise blockchain infrastructure.
          </p>
        </div>

        {/* Company Overview & Tech Stack Summary (Simple Points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 text-zinc-800">
          <div>
            <h2 className="text-xl font-medium text-black tracking-tight mb-3">
              Why Join BlocNexus?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
              <li><strong>High Impact:</strong> Safeguard billions in total value locked (TVL) across leading Web3 protocols.</li>
              <li><strong>Deep Technical Rigor:</strong> Work alongside veteran security researchers on low-level EVM bytecode, formal verification, and distributed systems.</li>
              <li><strong>Remote-First Culture:</strong> 100% remote team with flexible work hours and competitive compensation.</li>
              <li><strong>Continuous Learning:</strong> Security conference stipends, research publishing budgets, and specialized tooling.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-black tracking-tight mb-3">
              Core Technical Stack & Engineering Culture
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
              <li><strong>Languages:</strong> Solidity, Rust, Go (Golang), Yul, Python, Java.</li>
              <li><strong>Computer Science:</strong> System Design, OOP, Concurrency, Memory Optimization, Cryptography.</li>
              <li><strong>Infrastructure:</strong> Apache Kafka, Apache Cassandra, Apache Spark, Apache Avro.</li>
              <li><strong>Security:</strong> Invariant Fuzzing, Formal Verification, Bytecode Analysis, Static Analysis.</li>
            </ul>
          </div>
        </div>

        {/* Open Roles List Header */}
        <div className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
          <h2 className="text-2xl font-light text-black tracking-tight">
            Current Open Roles ({openRoles.length})
          </h2>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            All Positions 100% Remote
          </span>
        </div>

        {/* Roles List */}
        <div className="space-y-10">
          {openRoles.map((role) => (
            <div
              key={role.id}
              className="border-b border-zinc-200 pb-10 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-1">
                    <span>{role.department}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-black tracking-tight">
                    {role.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    navigate(`/apply?role=${encodeURIComponent(role.title)}`);
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-black hover:bg-zinc-800 text-white text-xs font-medium transition cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  Apply for Position <ArrowRight size={14} />
                </button>
              </div>

              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                {role.summary}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-[11px] font-mono border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Simple Bullet Points of Responsibilities */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Key Responsibilities:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-light text-zinc-700 leading-relaxed">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
