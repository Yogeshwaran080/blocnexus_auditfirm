import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useLenis } from "lenis/react";
import { submitLead } from "./api/leadsApi";

export default function Contact() {
  const lenis = useLenis();

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

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

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

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status === "success") {
      scrollToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName.trim() || !form.email.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your full name and email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitLead({
        fullName: form.fullName,
        companyOrProject: form.company,
        email: form.email,
        phoneNumber: form.phone,
        projectType: form.projectType,
        blockchain: form.blockchain,
        projectStatus: form.projectStatus,
        githubRepository: form.repository,
        servicesRequired: form.services,
        projectDescription: form.notes,
      });

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    }
  };

  const resetForm = () => {
    setForm({
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
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <section
        id="quote"
        className="bg-black min-h-screen pt-0 pb-20 px-4 md:px-10 flex items-center"
      >
        <div className="max-w-xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              bg-black
              border
              border-neutral-800
              rounded-2xl
              p-10
              md:p-14
              text-center
            "
          >
            {/* <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <CheckCircle2 size={30} className="text-white" />
            </div> */}

            <h1 className="text-3xl font-medium tracking-tight text-white">
              Thank you.
            </h1>

            <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-sm mx-auto">
              Your audit request has been received. We will be in touch shortly.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetForm}
                className="
                  h-12
                  px-6
                  rounded-xl
                  border
                  border-neutral-700
                  text-white
                  font-semibold
                  hover:bg-neutral-900
                  transition-all
                "
              >
                Submit Another
              </button>

              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="
                  h-12
                  px-6
                  rounded-xl
                  bg-white
                  text-black
                  font-semibold
                  hover:bg-neutral-200
                  transition-all
                "
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-white min-h-screen py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="text-black">Request an</span>{" "}
            <span className="text-blue-600">Audit Quote</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and security requirements. Our team will
            review the scope and provide a tailored audit proposal, timeline,
            and pricing estimate.
          </p>
        </div>

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

          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="
                  mb-8
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-5
                  py-4
                  text-red-700
                "
              >
                <AlertCircle size={20} className="shrink-0" />
                <span className="text-sm font-medium">{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

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
            disabled={status === "submitting"}
            className="
              mt-10
              w-full
              h-14
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              disabled:bg-blue-400
              disabled:cursor-not-allowed
              text-white
              font-semibold
              transition-all
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Audit Quote"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}