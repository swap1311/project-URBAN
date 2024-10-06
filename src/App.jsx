import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Categories from "./components/Categories";
import Preorder from "./components/Preorder";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%] bg-[white] flex flex-col  justify-between  p-[50px] gap-[40px]">
      <Navbar />
      <HeroSection />
      <Categories />
      <Grid />
      <Preorder />
      <Footer />
    </div>
  );
}

export default App;
