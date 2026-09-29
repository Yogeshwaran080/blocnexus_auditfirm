import React from "react";
import SEO from "../components/SEO";

export default function SecurityPolicy() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-white text-zinc-900 pt-28 md:pt-36 pb-24"
    >
      <SEO
        title="Security Policy & Vulnerability Disclosure | BlocNexus"
        description="BlocNexus security policy, responsible vulnerability disclosure guidelines, bug bounty policy, and data handling standards for blockchain security audits."
        keywords="BlocNexus security policy, Web3 vulnerability disclosure, bug bounty policy, smart contract audit security, security reporting"
        canonical="/security-policy"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-8 mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            Security Standards & Compliance
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black">
            Security Policy & Responsible Disclosure
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            At BlocNexus, security is our foundational mandate. Learn how we safeguard client source code, handle sensitive vulnerability reports, and protect digital assets.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-400">
            Last Updated: September 28, 2026
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              1. Code Confidentiality & Data Protection
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              All source code, uncompiled smart contracts, ABI specifications, architectural diagrams, and communication logs shared with BlocNexus for security assessments are treated as strictly confidential.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li>All audit engagements are governed by mutual Non-Disclosure Agreements (NDAs).</li>
              <li>Source code is stored in encrypted, zero-trust repositories accessible only by assigned lead security auditors.</li>
              <li>We perform automatic code purge workflows post-engagement upon client request.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              2. Responsible Vulnerability Disclosure Program
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              If you discover a vulnerability in BlocNexus infrastructure, public nodes, or managed products, we encourage immediate responsible reporting prior to public disclosure.
            </p>
            <div className="text-xs font-mono text-zinc-800 py-1">
              PGP Security Email: <span className="font-semibold text-black">security@blocnexus.com</span> (Response SLA &lt; 12 hours)
            </div>
            <p className="text-sm font-medium text-black">Disclosure Guidelines:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li>Provide sufficient technical detail to reproduce the issue (PoC scripts, tx hashes, or test suites).</li>
              <li>Do not exploit live mainnet funds or disrupt active user protocol sessions.</li>
              <li>Allow BlocNexus security team adequate time to remediate before public announcement.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              3. Infrastructure & Operational Security
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              BlocNexus operates air-gapped security workstations, hardware security modules (HSM), and encrypted communications for all security researchers.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li>Mandatory hardware key 2FA (YubiKey) across all company infrastructure and code repositories.</li>
              <li>Zero telemetry or IP tracking on client RPC endpoints and transaction simulation nodes.</li>
              <li>Bi-annual independent third-party penetration testing of our internal systems.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              4. Audit Disclaimer & Scope Limits
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              A smart contract audit or security review conducted by BlocNexus represents a point-in-time security evaluation. While our auditors employ rigorous manual and formal verification techniques, an audit does not guarantee 100% bug-free smart contract execution or immunity from future zero-day attacks. Protocol developers are advised to maintain bug bounty programs and circuit breaker emergency pauses.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
