import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import PortfolioSEO from "./components/PortfolioSEO ";
import { motion } from "motion/react";

function App() {
  return (
    <main className="font-josefin">
      <PortfolioSEO />
      <NavbarMain/>
    </main>
  );
}

export default App;
