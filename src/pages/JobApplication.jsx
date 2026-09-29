import React, { useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import {
  Upload,
  CheckCircle2,
  FileText,
  Send,
  Loader2,
  X,
  Code2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  ArrowLeft
} from "lucide-react";

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
      className="min-h-screen bg-[#F4F3F1] text-zinc-900 pt-28 md:pt-36 pb-24 relative overflow-hidden"
    >
      <SEO
        title="Apply for Security Research Roles | BlocNexus Careers"
        description="Apply to join BlocNexus Security Research team. We are hiring engineers skilled in Solidity, Rust, Go, System Design, OOP, and Apache distributed infrastructure."
        keywords="BlocNexus job application, Web3 security jobs, apply smart contract auditor, Solidity Rust Go security engineer"
        canonical="/apply"
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        
        {/* Back button */}
        <div className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> Back to Careers
          </Link>
        </div>

        {/* MAIN 2-COLUMN LAYOUT: LEFT DESCRIPTION / RIGHT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── LEFT COLUMN: JOB REQUIREMENTS & TECH STACK OVERVIEW ── */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                Technical Role Overview
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight leading-[1.1]">
                Security Research & Engineering Application
              </h1>
              <p className="mt-4 text-zinc-700 text-base font-light leading-relaxed">
                We are building the next-generation security infrastructure for Web3 protocols and financial networks. We look for engineers with deep computer science fundamentals, low-level bytecode comprehension, and distributed systems expertise.
              </p>
            </div>

            {/* Core Tech Stack Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-300 shadow-md space-y-6">
              <h2 className="text-lg font-semibold text-black tracking-tight flex items-center gap-2">
                <Code2 size={18} className="text-black" /> Core Engineering Stack & Competencies
              </h2>

              <div className="space-y-4 text-sm font-light text-zinc-800">
                <div className="border-b border-zinc-100 pb-3">
                  <span className="font-medium text-black block mb-1">Languages:</span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Solidity</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Rust</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Go (Golang)</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Yul Assembly</span>
                  </div>
                </div>

                <div className="border-b border-zinc-100 pb-3">
                  <span className="font-medium text-black block mb-1">Computer Science & Architecture:</span>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    Strong System Design principles, Object-Oriented Programming (OOP) concepts, concurrency primitives, data structures, and memory management.
                  </p>
                </div>

                <div>
                  <span className="font-medium text-black block mb-1">Distributed Tools & Infrastructure:</span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono mt-1">
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Apache Kafka</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Apache Cassandra</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Apache Spark</span>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-300 rounded-md text-zinc-800">Apache Avro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-300 shadow-md space-y-4">
              <h2 className="text-lg font-semibold text-black tracking-tight flex items-center gap-2">
                <ShieldCheck size={18} className="text-black" /> Key Responsibilities
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-light list-disc pl-5 leading-relaxed">
                <li>Perform line-by-line manual code audits and formal invariant verification proofs for complex EVM & Rust smart contracts.</li>
                <li>Build high-throughput transaction telemetry and RPC monitoring tools in Go and Rust.</li>
                <li>Simulate adversarial black-box and white-box exploit vectors against cross-chain bridges and mempool relays.</li>
                <li>Integrate distributed event streaming pipelines using Apache tools for 24/7 on-chain threat monitoring.</li>
              </ul>
            </div>
          </div>

          {/* ── RIGHT COLUMN: APPLICATION FORM & FILE UPLOAD ── */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-zinc-300 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-light text-black tracking-tight">Application Submitted</h2>
                <p className="text-zinc-600 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you for applying to BlocNexus Security Research division. Our team will review your background and reach out within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setResumeFile(null);
                    setForm({ fullName: "", email: "", phone: "", githubLinkedin: "", role: "Senior Smart Contract Auditor", coverNote: "" });
                  }}
                  className="mt-6 px-6 py-3 rounded-xl border border-zinc-300 text-xs font-medium text-black hover:border-black transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-light text-black tracking-tight mb-4">
                  Apply Now
                </h2>

                {/* Target Role Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Target Role *
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                    required
                  >
                    <option value="Senior Smart Contract Auditor">Senior Smart Contract Auditor</option>
                    <option value="Protocol Penetration Tester">Protocol Penetration Tester</option>
                    <option value="EVM Security Engineer & Fuzzer">EVM Security Engineer & Fuzzer</option>
                    <option value="Security Operations Specialist">Security Operations Specialist</option>
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Satoshi Nakamoto"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
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
                      placeholder="satoshi@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
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
                      className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
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
                    className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition"
                  />
                </div>

                {/* RESUME FILE UPLOAD BOX */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Upload Resume (PDF, DOCX) *
                  </label>
                  
                  {resumeFile ? (
                    <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-mono">
                      <div className="flex items-center gap-2 truncate">
                        <FileText size={18} className="text-zinc-800 shrink-0" />
                        <span className="truncate text-zinc-900 font-medium">{resumeFile.name}</span>
                        <span className="text-zinc-500">({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="text-zinc-500 hover:text-black p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border-2 border-dashed border-zinc-300 hover:border-black rounded-2xl p-6 text-center transition cursor-pointer bg-zinc-50/50"
                    >
                      <input
                        type="file"
                        id="resume-input"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                      <label htmlFor="resume-input" className="cursor-pointer block">
                        <Upload size={24} className="mx-auto text-zinc-700 mb-2" />
                        <p className="text-xs font-medium text-zinc-900">
                          Click to upload or drag & drop your resume
                        </p>
                        <p className="text-[11px] font-mono text-zinc-500 mt-1">
                          Supported formats: PDF, DOCX (Max 10MB)
                        </p>
                      </label>
                    </div>
                  )}
                </div>

                {/* Cover Note / Relevant Work */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-1.5">
                    Cover Note / Audit Experience
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your auditing experience, notable findings, or open-source tools..."
                    value={form.coverNote}
                    onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                    className="w-full p-4 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm font-light outline-none focus:border-black transition resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl bg-black hover:bg-zinc-800 text-white font-medium text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting Application...
                    </>
                  ) : (
                    <>
                      Send Application <Send size={15} />
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
