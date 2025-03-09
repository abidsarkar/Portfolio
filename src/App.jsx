import "./App.css";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import PortfolioSEO from "./components/PortfolioSEO ";
import { motion } from "motion/react";
import SkillsTimeline from "./components/skills/SkillsTimeline";

function App() {
  return (
    <main className="font-josefin">
      <PortfolioSEO />
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SkillsTimeline/>
    </main>
  );
}

export default App;
