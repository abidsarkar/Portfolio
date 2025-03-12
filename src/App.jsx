import "./App.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import PortfolioSEO from "./components/PortfolioSEO ";

import ProjectCards from "./components/projects/ProjectCards";

import SkillsTimeline from "./components/skills/SkillsTimeline";

function App() {
  return (
    <main className="font-josefin ">
      {/* <PortfolioSEO /> */}
      <div className="bg-[url('/image/perallex/hero.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
      </div>

      <SkillsTimeline />
      <ProjectCards />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
