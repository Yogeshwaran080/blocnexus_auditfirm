import React from "react";
import SEO from "../components/SEO";
import { Scale, FileText, CheckCircle2, ShieldAlert, AlertCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-28 pb-24 relative overflow-hidden"
    >
      <SEO
        title="Terms of Service | BlocNexus Web3 Security"
        description="BlocNexus terms of service governing website usage, security audit engagements, intellectual property rights, and liability limitations."
        keywords="BlocNexus terms of service, Web3 audit terms, smart contract security agreement, legal terms"
        canonical="/terms-of-service"
      />

      {/* Background Grid */}
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
            <Scale size={14} className="text-zinc-900" /> Legal Terms & Conditions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            Please read these Terms of Service carefully before utilizing BlocNexus security platform services, audit reports, or automated scanning products.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-500">
            Last Revised: September 28, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              By accessing the BlocNexus website (`www.blocnexus.com`), engaging our security researchers for smart contract audits, or integrating our real-time security APIs, you agree to be bound by these Terms of Service and all applicable laws and regulations governing Web3 and cybersecurity services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">2. Scope of Security Services</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              BlocNexus provides technical cybersecurity reviews, static analysis scanning, threat monitoring, and smart contract audit reports.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li>Audit deliverables represent a point-in-time security review based on provided commit hashes.</li>
              <li>Modifications made to audited source code post-audit invalidates certified report scope unless re-tested.</li>
              <li>Clients retain full ownership of their underlying smart contract code and intellectual property.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <ShieldAlert size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">3. Limitation of Liability</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To the maximum extent permitted by applicable law, BlocNexus, its security researchers, and directors shall not be liable for any direct, indirect, incidental, or consequential financial losses, smart contract exploits, TVL drains, or protocol disruptions resulting from code vulnerabilities, third-party dependency failures, or market volatility.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <AlertCircle size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">4. Intellectual Property & Brand Usage</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              The BlocNexus logo, security badge certificates, audit report formatting, and technical verification seals are trademarks of BlocNexus Security Inc. Authorized clients may display BlocNexus verification badges on project documentation solely when linking to official, verified audit reports.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
