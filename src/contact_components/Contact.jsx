import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    telegram: "",
    projectType: "",
    customProjectType: "",
    blockchain: "",
    projectStatus: "",
    contractSize: "",
    deadline: "",
    repository: "",
    documentation: "",
    notes: "",
    services: [],
  });

  const projectTypes = [
    "DeFi",
    "NFT",
    "Token",
    "DAO",
    "Bridge",
    "DEX",
    "Lending Protocol",
    "Staking Protocol",
    "GameFi",
    "RWA",
    "Infrastructure",
    "Other",
  ];

  const blockchains = [
    "Ethereum",
    "Base",
    "Arbitrum",
    "Optimism",
    "Polygon",
    "BNB Chain",
    "Avalanche",
    "Solana",
    "Sui",
    "Aptos",
    "Other",
  ];

  const serviceOptions = [
    "Smart Contract Audit",
    "Penetration Testing",
    "Security Consultation",
    "Threat Modeling",
    "Architecture Review",
    "Monitoring",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleService = (service) => {
    if (form.services.includes(service)) {
      setForm({
        ...form,
        services: form.services.filter((s) => s !== service),
      });
    } else {
      setForm({
        ...form,
        services: [...form.services, service],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Quote request submitted.");
  };

  return (
  <section className="bg-white min-h-screen py-20 px-4 md:px-10">
    <div className="max-w-5xl mx-auto">

      {/* HERO */}

      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          <span className="text-black">Request an</span>{" "}
          <span className="text-blue-600">Audit Quote</span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Tell us about your project and security requirements.
          Our team will review the scope and provide a tailored
          audit proposal, timeline, and pricing estimate.
        </p>
      </div>

      {/* FORM */}

      <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="
    bg-[#F7F7F7]
    border
    border-gray-200
    rounded-[32px]
    p-6
    md:p-10
    shadow-sm
  "
>
  <div className="mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-black">
      Project Information
    </h2>

    <p className="mt-2 text-gray-600">
      Share a few details about your protocol and security requirements.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-5">

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Full Name *
      </label>

      <input
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="John Doe"
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
          placeholder:text-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Company / Project
      </label>

      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="BlocNexus"
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
          placeholder:text-gray-400
        "
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Email Address *
      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@company.com"
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
          placeholder:text-gray-400
        "
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Phone Number
      </label>

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="+91 9876543210"
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
          placeholder:text-gray-400
        "
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Project Type
      </label>

      <select
        name="projectType"
        value={form.projectType}
        onChange={handleChange}
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
        "
      >
        <option value="">Select Project Type</option>

        {projectTypes.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        Blockchain
      </label>

      <select
        name="blockchain"
        value={form.blockchain}
        onChange={handleChange}
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
        "
      >
        <option value="">Select Blockchain</option>

        {blockchains.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>

    <div className="md:col-span-2">
      <label className="block mb-2 text-sm font-medium text-black">
        Project Status
      </label>

      <select
        name="projectStatus"
        value={form.projectStatus}
        onChange={handleChange}
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
        "
      >
        <option value="">Select Status</option>
        <option>Planning</option>
        <option>Development</option>
        <option>Testnet</option>
        <option>Mainnet</option>
      </select>
    </div>

    <div className="md:col-span-2">
      <label className="block mb-2 text-sm font-medium text-black">
        GitHub Repository
      </label>

      <input
        name="repository"
        value={form.repository}
        onChange={handleChange}
        placeholder="https://github.com/project/repository"
        className="
          w-full
          h-14
          px-5
          rounded-xl
          border
          border-gray-300
          bg-white
          text-black
          placeholder:text-gray-400
        "
      />
    </div>

  </div>

  <div className="mt-10">
    <h3 className="text-lg font-semibold text-black mb-4">
      Services Required
    </h3>

    <div className="flex flex-wrap gap-3">
      {serviceOptions.map((service) => (
        <button
          type="button"
          key={service}
          onClick={() => toggleService(service)}
          className={`px-5 py-3 rounded-xl border font-medium transition-all ${
            form.services.includes(service)
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {service}
        </button>
      ))}
    </div>
  </div>

  <div className="mt-10">
    <label className="block mb-3 text-sm font-medium text-black">
      Project Description
    </label>

    <textarea
      rows={7}
      name="notes"
      value={form.notes}
      onChange={handleChange}
      placeholder="Describe your protocol, contracts, architecture, launch timeline, and any security concerns..."
      className="
        w-full
        rounded-2xl
        border
        border-gray-300
        bg-white
        p-5
        text-black
        placeholder:text-gray-400
      "
    />
  </div>

  <button
    type="submit"
    className="
      mt-10
      w-full
      h-14
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      text-white
      font-semibold
      transition-all
    "
  >
    Request Audit Quote
  </button>
</motion.form>
    </div>
  </section>
);
}





