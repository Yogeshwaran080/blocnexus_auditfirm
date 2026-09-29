import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { useLocation, Link } from "react-router-dom";
import { Upload, CheckCircle2, FileText, Send, Loader2, X, ArrowLeft, Shield, Cpu, Code2, Server } from "lucide-react";

// Role-specific detailed data dictionary
const ROLE_DETAILS = {
  "Senior Smart Contract Auditor": {
    department: "Security Research",
    type: "Full-Time / Remote",
    summary: "Lead line-by-line manual code audits, formal verification proofs, and vulnerability assessments for tier-1 Web3 DeFi protocols, cross-chain bridges, and Layer 2 infrastructure.",
    stack: ["Solidity", "Yul Assembly", "EVM Bytecode", "Foundry", "Slither", "Formal Verification"],
    responsibilities: [
      "Conduct rigorous manual code reviews and mathematical logic checks on EVM & Non-EVM smart contracts.",
      "Develop custom property-based fuzzing suites and invariant test harnesses using Foundry & Echidna.",
      "Identify zero-day reentrancy, access control, oracle manipulation, and economic flash loan exploit vectors.",
      "Author clear, professional audit reports with concrete remediation code snippets and severity ratings.",
      "Collaborate directly with protocol founders to verify patch implementations prior to mainnet deployment."
    ],
    requirements: [
      "3+ years experience auditing smart contracts or writing production-grade EVM protocols.",
      "Deep understanding of EVM storage layout, inline assembly (Yul), memory management, and gas mechanics.",
      "Solid computer science fundamentals, Object-Oriented Programming (OOP), and data structures.",
      "Familiarity with static analysis tools and formal verification frameworks."
    ]
  },
  "Protocol Penetration Tester": {
    department: "Offensive Security",
    type: "Full-Time / Remote",
    summary: "Simulate adversarial black-box and white-box cyberattacks against cross-chain bridge relays, dApp frontends, web sockets, and RPC validator node infrastructure.",
    stack: ["Rust", "Python", "Go (Golang)", "Web3 Frontends", "Burp Suite", "RPC Node Exploits"],
    responsibilities: [
      "Execute black-box penetration testing against dApp web interfaces, browser extension wallet connections, and backend API endpoints.",
      "Audit RPC node endpoints, validator gossip networks, and relayer infrastructure for denial-of-service and transaction malleability risks.",
      "Develop custom Python/Rust proof-of-concept scripts demonstrating exploit feasibility without risking mainnet assets.",
      "Formulate actionable hardening recommendations for frontend and infrastructure security leads."
    ],
    requirements: [
      "Proven track record in Web3 application security and penetration testing.",
      "Proficiency in Rust, Python, or Go for developing offensive security tooling.",
      "Deep knowledge of HTTP security headers, CORS policies, Web3 provider injection models, and RPC interfaces.",
      "Understanding of System Design principles and distributed network topologies."
    ]
  },
  "EVM Security Engineer & Fuzzer": {
    department: "Tooling & Infrastructure",
    type: "Full-Time / Remote",
    summary: "Develop automated invariant fuzzing tools, static analysis engines, and real-time on-chain transaction monitoring infrastructure built on Go, Rust, and Apache distributed systems.",
    stack: ["Go (Golang)", "Rust", "System Design", "OOP Concepts", "Apache Kafka", "Apache Spark"],
    responsibilities: [
      "Build high-throughput static analysis engines and transaction simulation algorithms in Go and Rust.",
      "Architect distributed event stream processing using Apache Kafka for real-time protocol anomaly detection.",
      "Engineered automated invariant fuzzers that execute millions of synthetic transactions per second.",
      "Apply object-oriented design patterns and modular System Design for enterprise security software."
    ],
    requirements: [
      "Strong background in Go (Golang), Rust, or C++ with focus on low-latency memory management.",
      "Experience with Apache infrastructure tools (Apache Kafka, Apache Cassandra, Apache Spark).",
      "Comprehensive knowledge of EVM execution state transitions, opcodes, and trace decoding.",
      "Strong computer science fundamentals, concurrency primitives, and data structures."
    ]
  },
  "Security Operations Specialist": {
    department: "Incident Response",
    type: "Full-Time / Remote",
    summary: "Manage 24/7 mempool threat monitoring alerts, coordinate white-hat fund rescue operations, and triage incoming vulnerability disclosure bug bounty reports.",
    stack: ["Go", "Python", "Apache Avro", "Mempool Indexing", "Incident Triage", "RPC Telemetry"],
    responsibilities: [
      "Monitor real-time mempool transaction streams using Apache Avro schema serialization for front-running attacks.",
      "Coordinate rapid white-hat emergency pauses and fund rescue maneuvers alongside client security leads.",
      "Triage responsible vulnerability disclosures submitted by external security researchers.",
      "Maintain post-mortem incident reports and update automated threat detection signatures."
    ],
    requirements: [
      "Experience in Web3 incident response, threat intelligence, or SOC environments.",
      "Familiarity with mempool monitoring techniques, MEV bots, and emergency circuit breaker protocols.",
      "Clear technical communication and crisis management skills."
    ]
  }
};

// Fallback detail object for unlisted or custom roles
const DEFAULT_ROLE_DETAILS = {
  department: "Security & Engineering",
  type: "Full-Time / Remote",
  summary: "BlocNexus is hiring elite security researchers, smart contract auditors, and infrastructure engineers to protect high-value Web3 protocols and digital asset treasuries.",
  stack: ["Solidity", "Rust", "Go (Golang)", "System Design", "OOP Concepts", "Apache Tools"],
  responsibilities: [
    "Conduct line-by-line manual code audits and formal invariant verification for complex smart contracts.",
    "Engineer high-throughput transaction telemetry and RPC monitoring infrastructure in Go and Rust.",
    "Execute black-box and white-box penetration testing against cross-chain bridges and dApp frontends.",
    "Integrate real-time event processing pipelines using Apache Kafka for 24/7 on-chain threat surveillance."
  ],
  requirements: [
    "Core proficiency in Solidity, Rust, or Go.",
    "Strong understanding of System Design principles and Object-Oriented Programming (OOP).",
    "Familiarity with distributed data pipelines and security testing methodology."
  ]
};

export default function JobApplication() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedRoleFromQuery = searchParams.get("role") || "Senior Smart Contract Auditor";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    githubLinkedin: "",
    role: selectedRoleFromQuery,
    coverNote: "",
  });

  useEffect(() => {
    if (selectedRoleFromQuery) {
      setForm((prev) => ({ ...prev, role: selectedRoleFromQuery }));
    }
  }, [selectedRoleFromQuery]);

  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Active role data
  const roleData = ROLE_DETAILS[form.role] || DEFAULT_ROLE_DETAILS;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-white text-zinc-900 pt-28 md:pt-36 pb-24"
    >
      <SEO
        title={`Apply for ${form.role} | BlocNexus`}
        description={`Submit your application for the ${form.role} role at BlocNexus Web3 Security.`}
        keywords="BlocNexus application, Web3 security job apply, smart contract auditor application, Solidity Rust Go engineer"
        canonical="/apply"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition"
          >
            <ArrowLeft size={14} /> Back to Open Positions
          </Link>
        </div>

        {/* 2-COLUMN PLAIN WHITE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: DYNAMIC ROLE DETAILS, REQUIREMENTS & TECH STACK ── */}
          <div className="lg:col-span-6 space-y-8 text-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                <span>{roleData.department}</span>
                <span>•</span>
                <span>{roleData.type}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-[1.1]">
                {form.role}
              </h1>
              <p className="mt-4 text-zinc-600 text-base font-light leading-relaxed">
                {roleData.summary}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                Technical Stack & Key Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {roleData.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono text-zinc-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                Role Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                {roleData.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                Target Requirements & Qualifications
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                {roleData.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                What We Offer
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                <li>100% remote-first work environment with flexible global hours.</li>
                <li>Competitive compensation with performance-based bonuses.</li>
                <li>Budget for security conference attendance, research publication, and specialized tooling.</li>
                <li>Opportunity to audit and protect high-impact, multi-billion dollar Web3 protocols.</li>
              </ul>
            </div>
          </div>

          {/* ── RIGHT COLUMN: PLAIN SIMPLE ALIGNED FORM ── */}
          <div className="lg:col-span-6 bg-white p-2 sm:p-4">
            {submitted ? (
              <div className="py-12 text-center space-y-4 border border-zinc-200 p-8 rounded-2xl">
                <CheckCircle2 size={36} className="mx-auto text-black" />
                <h2 className="text-2xl font-light text-black">Application Submitted</h2>
                <p className="text-zinc-600 text-sm font-light max-w-sm mx-auto leading-relaxed">
                  Thank you for applying to BlocNexus for the position of <strong className="text-black font-medium">{form.role}</strong>. Our engineering leads will review your submission and respond within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setResumeFile(null);
                    setForm({ fullName: "", email: "", phone: "", githubLinkedin: "", role: selectedRoleFromQuery, coverNote: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg border border-zinc-300 text-xs font-medium text-black hover:border-black transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-light text-black tracking-tight">
                    Apply for Position
                  </h2>
                  <p className="text-xs font-mono text-zinc-500 mt-1">
                    Role: <span className="text-black font-medium">{form.role}</span>
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                    />
                  </div>
                </div>

                {/* GitHub / LinkedIn */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    GitHub / LinkedIn / Portfolio URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/username"
                    value={form.githubLinkedin}
                    onChange={(e) => setForm({ ...form, githubLinkedin: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                  />
                </div>

                {/* RESUME FILE UPLOAD BOX */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Resume Upload (PDF, DOCX) *
                  </label>
                  
                  {resumeFile ? (
                    <div className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-300 bg-zinc-50 text-xs font-mono">
                      <div className="flex items-center gap-2 truncate">
                        <FileText size={16} className="text-zinc-800 shrink-0" />
                        <span className="truncate text-zinc-900 font-medium">{resumeFile.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="text-zinc-500 hover:text-black p-1"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border border-dashed border-zinc-300 hover:border-black rounded-lg p-5 text-center transition cursor-pointer bg-white"
                    >
                      <input
                        type="file"
                        id="resume-file-input"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                      <label htmlFor="resume-file-input" className="cursor-pointer block">
                        <Upload size={20} className="mx-auto text-zinc-600 mb-1.5" />
                        <p className="text-xs font-light text-zinc-800">
                          Click to select or drag & drop resume file
                        </p>
                        <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                          PDF or DOCX format
                        </p>
                      </label>
                    </div>
                  )}
                </div>

                {/* Cover Note / Relevant Work */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Cover Note / Experience Brief
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief overview of relevant auditing experience, security findings, or open-source projects..."
                    value={form.coverNote}
                    onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                    className="w-full p-3.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 rounded-lg bg-black hover:bg-zinc-800 text-white font-medium text-sm transition shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Send Application <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
