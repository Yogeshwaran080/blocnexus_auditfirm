import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./contact_components/Contact";
import About from "./About_Us/About";

import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";

export default function App() {
  return (
    <BrowserRouter>

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

      <Footer />

    </BrowserRouter>
  );
}