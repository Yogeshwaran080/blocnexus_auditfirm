import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <main
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen bg-white text-zinc-900 pt-28 md:pt-36 pb-24"
    >
      <SEO
        title="Privacy Policy | BlocNexus Web3 Security"
        description="BlocNexus privacy policy detailing how we respect user privacy, process zero personal tracking data, and secure client information during audit requests."
        keywords="BlocNexus privacy policy, Web3 data privacy, security firm privacy, blockchain data protection"
        canonical="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-8 mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            Data Privacy & Transparency
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            BlocNexus adheres to strict privacy-first principles. We do not sell user data, track individual wallet behaviors, or collect unnecessary personal data.
          </p>
          <div className="mt-4 text-xs font-mono text-zinc-400">
            Effective Date: September 28, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-800 text-sm sm:text-base font-light leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              1. Information We Collect
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              We collect minimal information necessary to deliver auditing services and respond to security inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li><strong>Quote & Inquiry Data:</strong> Contact details (email address, telegram handle, company name, scope links) submitted voluntarily via our contact form.</li>
              <li><strong>Newsletter Subscription:</strong> Email addresses provided voluntarily for security research updates.</li>
              <li><strong>Server Logs:</strong> Standard aggregated server logs (IP address, browser type, timestamp) used solely for DDoS protection and system security.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              2. How We Use Information
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Information collected is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 text-sm">
              <li>Scope, schedule, and deliver smart contract audit proposals.</li>
              <li>Communicate audit findings, re-test reports, and security patches.</li>
              <li>Send requested security research newsletters and security advisories.</li>
              <li>Protect our web application from malicious bot traffic and unauthorized access.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              3. Zero Data Sale & Third-Party Sharing
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              We never sell, rent, or trade your contact information, smart contract repository data, or organizational details to third parties, ad networks, or data brokers. Information is shared only with trusted infrastructure providers (such as hosting and encrypted database relays) essential to operating our services under strict confidentiality agreements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-zinc-100 pt-8">
            <h2 className="text-xl sm:text-2xl font-light text-black tracking-tight">
              4. Your Data Rights & Deletion Requests
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Under GDPR, CCPA, and global privacy standards, you have the right to inspect, update, or request permanent deletion of your personal data from our systems.
            </p>
            <div className="text-xs font-mono text-zinc-800 py-1">
              To request complete data deletion, contact: <span className="font-semibold text-black">privacy@blocnexus.com</span>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
