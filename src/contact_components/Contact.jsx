import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  Shield,
  Lock,
  ArrowRight,
  X,
  ChevronDown,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { useNavigate } from "react-router-dom";
import { submitLead } from "./api/leadsApi";
import { ChainLogo } from "../components/megamenu/ChainLogos";

export default function Contact() {
  const lenis = useLenis();
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    telegram: "",
    projectType: "DeFi",
    blockchain: "Ethereum",
    projectStatus: "Development",
    contractSize: "",
    deadline: "",
    repository: "",
    documentation: "",
    notes: "",
    services: ["Smart Contract Audit"],
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "DeFi",
    "DEX / AMM",
    "Lending Protocol",
    "Staking / Yield",
    "NFT / Gaming",
    "Token / ERC20",
    "DAO Governance",
    "Cross-Chain Bridge",
    "RWA (Real World Assets)",
    "Layer 1 / Layer 2",
    "Infrastructure",
    "Other",
  ];

  const blockchains = [
    { name: "Ethereum" },
    { name: "Solana" },
    { name: "Base" },
    { name: "Arbitrum" },
    { name: "Optimism" },
    { name: "Polygon" },
    { name: "BSC" },
    { name: "Avalanche" },
  ];

  const projectStatuses = [
    { id: "Planning", label: "Architecture / Planning" },
    { id: "Development", label: "Under Active Development" },
    { id: "Testnet", label: "Deployed on Testnet" },
    { id: "Mainnet", label: "Live on Mainnet" },
  ];

  const serviceOptions = [
    "Smart Contract Audit",
    "Penetration Testing",
    "Architecture & Security Consultation",
    "Static Analysis & 24/7 Monitoring",
    "Gas Optimization Review",
    "Rapid Vulnerability Assessment",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    if (status === "success") scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (service) => {
    if (form.services.includes(service)) {
      if (form.services.length > 1) {
        setForm({ ...form, services: form.services.filter((s) => s !== service) });
      }
    } else {
      setForm({ ...form, services: [...form.services, service] });
    }
  };

  const removeService = (service) => {
    if (form.services.length > 1) {
      setForm({ ...form, services: form.services.filter((s) => s !== service) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your full name and work email address.");
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
        telegramHandle: form.telegram,
        projectType: form.projectType,
        blockchain: form.blockchain,
        projectStatus: form.projectStatus,
        githubRepository: form.repository,
        servicesRequired: form.services,
        projectDescription: form.notes
          ? `${form.notes} [Timeline: ${form.deadline || "Flexible"}] [Contracts: ${form.contractSize || "Not specified"}] [Telegram: ${form.telegram || "N/A"}]`
          : `[Timeline: ${form.deadline || "Flexible"}] [Telegram: ${form.telegram || "N/A"}]`,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err?.message || "Something went wrong while submitting. Please try again or reach out directly on Telegram."
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
      projectType: "DeFi",
      blockchain: "Ethereum",
      projectStatus: "Development",
      contractSize: "",
      deadline: "",
      repository: "",
      documentation: "",
      notes: "",
      services: ["Smart Contract Audit"],
    });
    setStatus("idle");
  };

  /* ---- shared inline styles ---- */
  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 400,
    color: "#374151",
    marginBottom: 6,
    fontFamily: "'Inter', sans-serif",
  };

  const inputStyle = {
    width: "100%",
    height: 42,
    padding: "0 14px",
    borderRadius: 8,
    background: "#ffffff",
    border: "1px solid #d1d5db",
    color: "#111827",
    fontSize: 13,
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  };

  const focusHandler = (e) => { e.target.style.borderColor = "#111827"; };
  const blurHandler = (e) => { e.target.style.borderColor = "#d1d5db"; };

  // ──────── SUCCESS VIEW ────────
  if (status === "success") {
    return (
      <section
        id="quote"
        className="relative min-h-screen pt-32 pb-24 px-4 md:px-8 flex items-center justify-center"
        style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}
      >
        <div style={{ maxWidth: 520, width: "100%", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              padding: "44px 36px",
              textAlign: "center",
            }}
          >
            <CheckCircle2 size={36} color="#111827" style={{ margin: "0 auto 20px" }} />

            <h1 style={{ fontSize: 24, fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", margin: 0 }}>
              Audit Request Confirmed
            </h1>

            <p style={{ marginTop: 12, fontSize: 13, color: "#6b7280", fontWeight: 300, lineHeight: 1.7 }}>
              Our security researchers are reviewing your scope. You will receive a customized proposal with timeline and pricing within 24 hours.
            </p>

            <div style={{ marginTop: 28, textAlign: "left", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginTop: 0, marginBottom: 14 }}>
                What happens next
              </p>
              {[
                { n: "1", t: "Scoping & feasibility review within 12-24 hours" },
                { n: "2", t: "Private channel setup with your assigned lead auditor" },
                { n: "3", t: "Formal proposal with milestone roadmap" },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 400, color: "#9ca3af", flexShrink: 0 }}>{s.n}.</span>
                  <span style={{ fontSize: 12, color: "#374151", fontWeight: 300 }}>{s.t}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={resetForm}
                style={{
                  height: 40, padding: "0 20px", borderRadius: 8,
                  border: "1px solid #d1d5db", background: "#fff",
                  color: "#111827", fontSize: 12, fontWeight: 400,
                  cursor: "pointer", fontFamily: "'Inter', sans-serif",
                }}
              >
                Submit another
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                style={{
                  height: 40, padding: "0 22px", borderRadius: 8,
                  border: "none", background: "#111827",
                  color: "#fff", fontSize: 12, fontWeight: 400,
                  cursor: "pointer", fontFamily: "'Inter', sans-serif",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                Return home <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ──────── MAIN FORM VIEW ────────
  return (
    <div
      id="quote"
      className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6"
      style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "#111827", letterSpacing: "-0.03em", margin: 0, lineHeight: 1.2 }}>
            Request a Smart Contract Audit
          </h1>
          <p style={{ marginTop: 10, fontSize: 14, color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>
            Fill in the details below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: "32px 28px",
          }}
        >

          {/* ── Section: Contact ── */}
          <p style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginTop: 0, marginBottom: 18 }}>
            Contact Information
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Full Name <span style={{ color: "#111827" }}>*</span></label>
              <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Satoshi Nakamoto"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div>
              <label style={labelStyle}>Work Email <span style={{ color: "#111827" }}>*</span></label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="founder@protocol.xyz"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div>
              <label style={labelStyle}>Protocol / Company</label>
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nexus Protocol"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div>
              <label style={labelStyle}>Telegram Handle</label>
              <input type="text" name="telegram" value={form.telegram} onChange={handleChange} placeholder="@lead_dev"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
          </div>

          <div style={{ height: 1, background: "#f3f4f6", margin: "24px 0" }} />

          {/* ── Section: Services (Dropdown + Tags) ── */}
          <p style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginTop: 0, marginBottom: 18 }}>
            Services Required
          </p>

          <div ref={dropdownRef} style={{ position: "relative", marginBottom: 20 }}>
            {/* Selected tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: form.services.length > 0 ? 10 : 0,
              }}
            >
              {form.services.map((s) => (
                <span
                  key={s}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 10px",
                    borderRadius: 6,
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                    fontSize: 11,
                    fontWeight: 400,
                    color: "#111827",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s}
                  {form.services.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeService(s)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        color: "#9ca3af",
                      }}
                    >
                      <X size={12} />
                    </button>
                  )}
                </span>
              ))}
            </div>

            {/* Dropdown trigger */}
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              style={{
                width: "100%",
                height: 42,
                padding: "0 14px",
                borderRadius: 8,
                background: "#ffffff",
                border: "1px solid #d1d5db",
                color: "#6b7280",
                fontSize: 13,
                fontWeight: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                textAlign: "left",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#111827"; }}
              onMouseLeave={(e) => { if (!servicesOpen) e.currentTarget.style.borderColor = "#d1d5db"; }}
            >
              <span>Add a service...</span>
              <ChevronDown size={14} color="#9ca3af" style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
            </button>

            {/* Dropdown list */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    marginTop: 4,
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    zIndex: 50,
                    overflow: "hidden",
                  }}
                >
                  {serviceOptions.map((service) => {
                    const isSelected = form.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          background: isSelected ? "#f9fafb" : "#ffffff",
                          border: "none",
                          borderBottom: "1px solid #f3f4f6",
                          color: "#111827",
                          fontSize: 12,
                          fontWeight: isSelected ? 400 : 300,
                          textAlign: "left",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontFamily: "'Inter', sans-serif",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#f9fafb"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = isSelected ? "#f9fafb" : "#ffffff"; }}
                      >
                        <span>{service}</span>
                        {isSelected && (
                          <span style={{ fontSize: 10, color: "#9ca3af", fontWeight: 400 }}>Added</span>
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div style={{ height: 1, background: "#f3f4f6", margin: "24px 0" }} />

          {/* ── Section: Protocol Scope ── */}
          <p style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginTop: 0, marginBottom: 18 }}>
            Protocol Details
          </p>

          {/* Blockchain */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Blockchain</label>
            <select
              name="blockchain"
              value={form.blockchain}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}
              onFocus={focusHandler}
              onBlur={blurHandler}
            >
              {blockchains.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Protocol Category</label>
              <select name="projectType" value={form.projectType} onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}
                onFocus={focusHandler} onBlur={blurHandler}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Development Stage</label>
              <select name="projectStatus" value={form.projectStatus} onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}
                onFocus={focusHandler} onBlur={blurHandler}
              >
                {projectStatuses.map((st) => (
                  <option key={st.id} value={st.id}>{st.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Repository URL</label>
            <input type="url" name="repository" value={form.repository} onChange={handleChange}
              placeholder="https://github.com/your-org/contracts"
              style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Estimated SLOC / Contracts</label>
              <input type="text" name="contractSize" value={form.contractSize} onChange={handleChange}
                placeholder="e.g. ~1,500 lines / 8 contracts"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div>
              <label style={labelStyle}>Target Timeline</label>
              <input type="text" name="deadline" value={form.deadline} onChange={handleChange}
                placeholder="e.g. Within 2 weeks"
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
          </div>

          <div style={{ height: 1, background: "#f3f4f6", margin: "24px 0" }} />

          {/* ── Section: Notes ── */}
          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>Additional Notes</label>
            <textarea
              rows={3}
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any specific areas of concern, attack vectors to scrutinize, or additional context..."
              style={{
                ...inputStyle,
                height: "auto",
                padding: 14,
                resize: "vertical",
                lineHeight: 1.7,
              }}
              onFocus={focusHandler}
              onBlur={blurHandler}
            />
          </div>

          {/* Error */}
          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  background: "#f9fafb",
                  padding: "10px 14px",
                  color: "#374151",
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0, color: "#6b7280" }} />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              width: "100%",
              height: 48,
              borderRadius: 10,
              border: "none",
              background: "#111827",
              color: "#ffffff",
              fontWeight: 400,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              opacity: status === "submitting" ? 0.6 : 1,
              transition: "all 0.2s",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => { if (status !== "submitting") e.currentTarget.style.background = "#1f2937"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#111827"; }}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Audit Request</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>

          <p style={{ marginTop: 14, fontSize: 11, color: "#9ca3af", textAlign: "center", fontWeight: 300 }}>
            <Lock size={10} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
            NDA protected. Your code remains strictly confidential.
          </p>

        </motion.form>
      </div>
    </div>
  );
}