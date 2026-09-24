import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";

// Lazy-load non-critical routes (code-split)
const Contact = lazy(() => import("./contact_components/Contact"));
const About = lazy(() => import("./About_Us/About"));
const Blog = lazy(() => import("./Blog/Blog"));
const BlogPost = lazy(() => import("./Blog/BlogPost"));

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Sticky floating navigation overlay layer */}
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-a-quote" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Suspense>

      {/* Global base footer link panel tracking framework */}
      <Footer />
    </BrowserRouter>
  );
}