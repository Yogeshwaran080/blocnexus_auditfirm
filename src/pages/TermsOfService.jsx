import React from "react";
import SEO from "../components/SEO";

export default function TermsOfService() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-white text-zinc-900 pt-28 md:pt-36 pb-24"
    >
      <SEO
        title="Terms of Service | BlocNexus Web3 Security"
        description="BlocNexus terms of service governing website usage, security audit engagements, intellectual property rights, and liability limitations."
        keywords="BlocNexus terms of service, Web3 audit terms, smart contract security agreement, legal terms"
        canonical="/terms-of-service"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-8 mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            Legal Terms & Conditions
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black">
            Terms of Service
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            Please read these Terms of Service carefully before utilizing BlocNexus security platform services, audit reports, or automated scanning products.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-400">
            Last Revised: September 28, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              By accessing the BlocNexus website (www.blocnexus.com), engaging our security researchers for smart contract audits, or integrating our real-time security APIs, you agree to be bound by these Terms of Service and all applicable laws and regulations governing Web3 and cybersecurity services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              2. Scope of Security Services
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              BlocNexus provides technical cybersecurity reviews, static analysis scanning, threat monitoring, and smart contract audit reports.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li>Audit deliverables represent a point-in-time security review based on provided commit hashes.</li>
              <li>Modifications made to audited source code post-audit invalidates certified report scope unless re-tested.</li>
              <li>Clients retain full ownership of their underlying smart contract code and intellectual property.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              3. Limitation of Liability
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              To the maximum extent permitted by applicable law, BlocNexus, its security researchers, and directors shall not be liable for any direct, indirect, incidental, or consequential financial losses, smart contract exploits, TVL drains, or protocol disruptions resulting from code vulnerabilities, third-party dependency failures, or market volatility.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              4. Intellectual Property & Brand Usage
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              The BlocNexus logo, security badge certificates, audit report formatting, and technical verification seals are trademarks of BlocNexus Security Inc. Authorized clients may display BlocNexus verification badges on project documentation solely when linking to official, verified audit reports.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
