import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionsSection from "../components/Solutions";
import Audit from "../components/Audit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SolutionsSection/>
        <Audit/>
        <Footer/>
      </main>
    </>
  );
}