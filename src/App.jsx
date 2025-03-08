import "./App.css";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import PortfolioSEO from "./components/PortfolioSEO ";
import { motion } from "motion/react";

function App() {
  return (
    <main className="font-josefin">
      <PortfolioSEO />
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
    </main>
  );
}

export default App;
