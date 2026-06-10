import React from "react";

export default function About() {
  return (
    <section className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Securing the Future of Web3
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We help protocols, startups, enterprises, and exchanges build
            secure blockchain applications through comprehensive security
            assessments, smart contract audits, penetration testing, and
            continuous risk analysis.
          </p>
        </div>

        <div className="mt-16 space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            At our core, we believe security is not a one-time checklist but an
            ongoing commitment. As the blockchain ecosystem evolves, new attack
            vectors emerge every day. Our mission is to stay ahead of those
            threats and help teams deploy with confidence.
          </p>

          <p>
            Our team combines deep expertise in smart contract security,
            protocol design, and offensive security testing. We conduct
            thorough reviews to identify vulnerabilities before attackers do,
            ensuring that critical assets and user funds remain protected.
          </p>

          <p>
            From early-stage startups preparing for launch to established
            enterprises managing complex ecosystems, we provide tailored
            security solutions that match the unique requirements of every
            project.
          </p>

          <p>
            We focus on transparency, technical excellence, and actionable
            recommendations. Every engagement is designed to strengthen the
            security posture of your protocol while helping your team understand
            and mitigate potential risks.
          </p>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="mt-2 text-gray-600">Security Reviews</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="mt-2 text-gray-600">Threat Monitoring</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">Web3</h3>
              <p className="mt-2 text-gray-600">Security Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}