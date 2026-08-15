import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from 'lenis/react'; // Clean modern React 19 package layer

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./contact_components/Contact";
import About from "./About_Us/About";

import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";

export default function App() {
  // Global velocity damping configurations for heavy, high-end momentum physics
  const lenisOptions = {
    duration: 1.2,       // Duration of the scroll animation glide loop (seconds)
    lerp: 0.08,          // Lower value = heavier dampening, resists quick jerky scroll actions
    smoothWheel: true,   // Controls native desktop mouse wheels
    syncTouch: true,     // Smooths mobile browsers and trackpad scrolling acceleration profiles
    wheelMultiplier: 0.95 // Lowers momentum step size slightly for a highly polished feel
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <BrowserRouter>
        {/* Sticky floating navigation overlay layer */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/request-a-quote"
            element={<Contact />}
          />

          <Route
            path="/about-us"
            element={<About/>}
          />

          <Route
            path="/blogs"
            element={<Blog />}
          />

          <Route
            path="/blog/:id"
            element={<BlogPost />}
          />
        </Routes>

        {/* Global base footer link panel tracking framework */}
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  );
}