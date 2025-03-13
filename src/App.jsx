import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Education from "./components/education/Education";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import PortfolioSEO from "./components/PortfolioSEO ";

import ProjectCards from "./components/projects/ProjectCards";

import SkillsTimeline from "./components/skills/SkillsTimeline";
import ContactMeMain from "./components/contact/ContactMeMain";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main className="font-josefin ">
      {/* <PortfolioSEO /> */}
      <div className="bg-[url('/image/perallex/hero.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
      loading="lazy"
      >
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
      </div>

      <SkillsTimeline />
      <ProjectCards />
      <Education />
      <ContactMeMain/>
      <Footer/>
    </main>
  );
}

export default App;
