import React, { useState } from "react";
import SEO from "../components/SEO";
import { Upload, CheckCircle2, FileText, Send, Loader2, X } from "lucide-react";

export default function JobApplication() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    githubLinkedin: "",
    role: "Senior Smart Contract Auditor",
    coverNote: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        title="Careers & Engineering Application | BlocNexus"
        description="Apply to join BlocNexus Security Research team. We are hiring engineers skilled in Solidity, Rust, Go, System Design, OOP, and Apache distributed infrastructure."
        keywords="BlocNexus careers, Web3 security jobs, smart contract auditor apply, Solidity Rust Go engineer"
        canonical="/apply"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* 2-COLUMN PLAIN WHITE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: PLAIN TEXT & BULLET POINTS (NO CARDS, NO GRIDS, NO EXTRA DESIGN) ── */}
          <div className="lg:col-span-6 space-y-8 text-zinc-800">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-[1.1]">
                Careers & Engineering Application
              </h1>
              <p className="mt-4 text-zinc-600 text-base font-light leading-relaxed">
                BlocNexus is hiring elite security researchers, smart contract auditors, and infrastructure engineers to protect high-value Web3 protocols and digital asset treasuries.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                Technical Stack & Competencies
              </h2>
              <p className="text-zinc-600 text-sm font-light leading-relaxed mb-4">
                We value deep computer science fundamentals, low-level execution comprehension, and distributed systems architecture:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                <li><strong>Core Languages:</strong> Solidity, Rust, Go (Golang), and Yul Assembly.</li>
                <li><strong>Computer Science:</strong> System Design principles, Object-Oriented Programming (OOP) concepts, memory management, and concurrency primitives.</li>
                <li><strong>Distributed Infrastructure:</strong> Apache tools including Apache Kafka, Apache Cassandra, Apache Spark, and Apache Avro.</li>
                <li><strong>Security Fundamentals:</strong> EVM bytecode analysis, invariant fuzz testing, formal verification proofs, and zero-day threat analysis.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                Role Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                <li>Conduct line-by-line manual code audits and formal invariant verification for complex smart contracts.</li>
                <li>Engineer high-throughput transaction telemetry and RPC monitoring infrastructure in Go and Rust.</li>
                <li>Execute black-box and white-box penetration testing against cross-chain bridges and dApp frontends.</li>
                <li>Integrate real-time event processing pipelines using Apache Kafka for 24/7 on-chain threat surveillance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-black tracking-tight mb-3">
                What We Offer
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm font-light text-zinc-700 leading-relaxed">
                <li>Full remote work flexibility with competitive compensation packages.</li>
                <li>Opportunity to work alongside senior security researchers on high-impact Web3 systems.</li>
                <li>Budget for security conference attendance, research publication, and specialized tooling.</li>
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
                  Thank you for applying to BlocNexus. Our engineering leads will review your submission and respond within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setResumeFile(null);
                    setForm({ fullName: "", email: "", phone: "", githubLinkedin: "", role: "Senior Smart Contract Auditor", coverNote: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg border border-zinc-300 text-xs font-medium text-black hover:border-black transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-light text-black tracking-tight mb-6">
                  Apply for Position
                </h2>

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
