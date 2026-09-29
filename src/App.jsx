import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";

// Lazy-load non-critical routes (code-split)
const Contact = lazy(() => import("./contact_components/Contact"));
const About = lazy(() => import("./About_Us/About"));
const Careers = lazy(() => import("./pages/Careers"));
const JobApplication = lazy(() => import("./pages/JobApplication"));
const Blog = lazy(() => import("./Blog/Blog"));
const BlogPost = lazy(() => import("./Blog/BlogPost"));
const TransactionProduct = lazy(() => import("./pages/TransactionProduct"));
const WalletDetection = lazy(() => import("./pages/WalletDetection"));
const NFTDetection = lazy(() => import("./pages/NFTDetection"));
const GasOptimization = lazy(() => import("./pages/GasOptimization"));
const FindFlaws = lazy(() => import("./pages/FindFlaws"));
const SmartContractAuditing = lazy(() => import("./pages/SmartContractAuditing"));
const PenetrationTesting = lazy(() => import("./pages/PenetrationTesting"));
const ConsultationArchitecture = lazy(() => import("./pages/ConsultationArchitecture"));
const StaticAnalysis = lazy(() => import("./pages/StaticAnalysis"));
const SecurityPolicy = lazy(() => import("./pages/SecurityPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppContent() {
  const location = useLocation();
  const is404Page = location.pathname === "/404";

  return (
    <>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Hide Navbar on 404 page */}
      {!is404Page && <Navbar />}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-a-quote" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<JobApplication />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Products Routes */}
          <Route path="/transaction" element={<TransactionProduct />} />
          <Route path="/transaction-product" element={<TransactionProduct />} />
          <Route path="/wallet-detection" element={<WalletDetection />} />
          <Route path="/nft-detection" element={<NFTDetection />} />
          <Route path="/gas-optimization" element={<GasOptimization />} />
          <Route path="/find-flaws" element={<FindFlaws />} />

          {/* Services Routes */}
          <Route path="/smart-contract-auditing" element={<SmartContractAuditing />} />
          <Route path="/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/consultation-architecture" element={<ConsultationArchitecture />} />
          <Route path="/static-analysis" element={<StaticAnalysis />} />

          {/* Legal & Policy Routes */}
          <Route path="/security-policy" element={<SecurityPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* 404 Routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>

      {/* Hide Footer on 404 page */}
      {!is404Page && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}