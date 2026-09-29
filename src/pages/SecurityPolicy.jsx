import React from "react";
import SEO from "../components/SEO";
import { ShieldCheck, Lock, AlertTriangle, Key, Terminal, FileText } from "lucide-react";

export default function SecurityPolicy() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-28 pb-24 relative overflow-hidden"
    >
      <SEO
        title="Security Policy & Vulnerability Disclosure | BlocNexus"
        description="BlocNexus security policy, responsible vulnerability disclosure guidelines, bug bounty policy, and data handling standards for blockchain security audits."
        keywords="BlocNexus security policy, Web3 vulnerability disclosure, bug bounty policy, smart contract audit security, security reporting"
        canonical="/security-policy"
      />

      {/* Grid overlay background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-700 mb-4">
            <ShieldCheck size={14} className="text-zinc-900" /> Security Standards & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900">
            Security Policy & Responsible Disclosure
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            At BlocNexus, security is our foundational mandate. Learn how we safeguard client source code, handle sensitive vulnerability reports, and protect digital assets.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-500">
            Last Updated: September 28, 2026
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-12 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Lock size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">1. Code Confidentiality & Data Protection</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              All source code, uncompiled smart contracts, ABI specifications, architectural diagrams, and communication logs shared with BlocNexus for security assessments are treated as strictly confidential.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li>All audit engagements are governed by mutual Non-Disclosure Agreements (NDAs).</li>
              <li>Source code is stored in encrypted, zero-trust repositories accessible only by assigned lead security auditors.</li>
              <li>We perform automatic code purge workflows post-engagement upon client request.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <AlertTriangle size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">2. Responsible Vulnerability Disclosure Program</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              If you discover a vulnerability in BlocNexus infrastructure, public nodes, or managed products, we encourage immediate responsible reporting prior to public disclosure.
            </p>
            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-xs font-mono text-zinc-800 mb-4">
              PGP Security Email: security@blocnexus.com<br />
              Response SLA: &lt; 12 hours for critical triage
            </div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-2">Disclosure Guidelines:</h3>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li>Provide sufficient technical detail to reproduce the issue (PoC scripts, tx hashes, or test suites).</li>
              <li>Do not exploit live mainnet funds or disrupt active user protocol sessions.</li>
              <li>Allow BlocNexus security team adequate time to remediate before public announcement.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Key size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">3. Infrastructure & Operational Security</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              BlocNexus operates air-gapped security workstations, hardware security modules (HSM), and encrypted communications for all security researchers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li>Mandatory hardware key 2FA (YubiKey) across all company infrastructure and code repositories.</li>
              <li>Zero telemetry or IP tracking on client RPC endpoints and transaction simulation nodes.</li>
              <li>Bi-annual independent third-party penetration testing of our internal systems.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">4. Audit Disclaimer & Scope Limits</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              A smart contract audit or security review conducted by BlocNexus represents a point-in-time security evaluation. While our auditors employ rigorous manual and formal verification techniques, an audit does not guarantee 100% bug-free smart contract execution or immunity from future zero-day attacks. Protocol developers are advised to maintain bug bounty programs and circuit breaker emergency pauses.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
