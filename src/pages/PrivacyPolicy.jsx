import React from "react";
import SEO from "../components/SEO";
import { Shield, Eye, Lock, Globe, Server, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-28 pb-24 relative overflow-hidden"
    >
      <SEO
        title="Privacy Policy | BlocNexus Web3 Security"
        description="BlocNexus privacy policy detailing how we respect user privacy, process zero personal tracking data, and secure client information during audit requests."
        keywords="BlocNexus privacy policy, Web3 data privacy, security firm privacy, blockchain data protection"
        canonical="/privacy-policy"
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
            <Shield size={14} className="text-zinc-900" /> Data Privacy & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            BlocNexus adheres to strict privacy-first principles. We do not sell user data, track individual wallet behaviors, or collect unnecessary personal data.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-500">
            Effective Date: September 28, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Eye size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">1. Information We Collect</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              We collect minimal information necessary to deliver auditing services and respond to security inquiries:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li><strong>Quote & Inquiry Data:</strong> Contact details (email address, telegram handle, company name, scope links) submitted voluntarily via our contact form.</li>
              <li><strong>Newsletter Subscription:</strong> Email addresses provided voluntarily for security research updates.</li>
              <li><strong>Server Logs:</strong> Standard aggregated server logs (IP address, browser type, timestamp) used solely for DDoS protection and system security.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Lock size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">2. How We Use Information</h2>
            </div>
            <p className="text-zinc-600 mb-4">
              Information collected is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 text-sm">
              <li>Scope, schedule, and deliver smart contract audit proposals.</li>
              <li>Communicate audit findings, re-test reports, and security patches.</li>
              <li>Send requested security research newsletters and security advisories.</li>
              <li>Protect our web application from malicious bot traffic and unauthorized access.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <Globe size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">3. Zero Data Sale & Third-Party Sharing</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              We never sell, rent, or trade your contact information, smart contract repository data, or organizational details to third parties, ad networks, or data brokers. Information is shared only with trusted infrastructure providers (such as hosting and encrypted database relays) essential to operating our services under strict confidentiality agreements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                <UserCheck size={18} />
              </div>
              <h2 className="text-xl font-medium text-zinc-900">4. Your Data Rights & Deletion Requests</h2>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Under GDPR, CCPA, and global privacy standards, you have the right to inspect, update, or request permanent deletion of your personal data from our systems.
            </p>
            <p className="text-zinc-600 text-xs font-mono bg-zinc-50 p-3 rounded-lg border border-zinc-200">
              To request complete data deletion, contact: privacy@blocnexus.com
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
