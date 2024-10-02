import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Categories from "./components/Categories";
import Preorder from "./components/Preorder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%]  bg-[white] flex flex-col items-start p-[50px] gap-[40px]">
      {/* <div className="w-[256px] h-[54px] bg-[yellow]  flex justify-flex p-[10px]">Total Categories</div> */}
      <Categories />
      <Grid />
      <Preorder/>
      <Footer />
    </div>
  );
}

export default App;
