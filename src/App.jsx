import "./App.css";
import { useState, useEffect } from "react";


import Education from "./components/education/Education";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";


import ProjectCards from "./components/projects/ProjectCards";
import SkillsTimeline from "./components/skills/SkillsTimeline";
import ContactMeMain from "./components/contact/ContactMeMain";
import Footer from "./components/footer/Footer";

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/image/perallex/hero.jpg";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <main className="font-josefin overflow-hidden">
      <h1 className="sr-only">Md Abid Sarkar - Full Stack Web Developer</h1>

      <p className="sr-only">Web development, portfolio, abid sarkar, md abid sarkar, abid sarkar cse, abid sarkar ewu, abid portfolio</p>
      {/* SEO Optimization */}
      {/* <PortfolioSEO /> */}

      {/* Hero Section with Lazy Background */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed transition-opacity overflow-hidden"
        style={{
          backgroundImage: bgLoaded
            ? "url('/image/perallex/hero.jpg')" // Load high-res when available
            : "url('/image/perallex/heroSmall.jpg')", // Low-res first
          opacity: bgLoaded ? 1 : 0.5, // Smooth transition
        }}
      >
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
      </div>

      <SkillsTimeline />
      <ProjectCards />
      <Education />
      <ContactMeMain />
      <Footer />
    </main>
  );
}

export default App;
