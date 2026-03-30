import { useState } from "react";
import "./App.css";
import DigitalToolsCard from "./Components/DigitalToolsCard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StatsBanner from "./Components/StatsBanner";

function App() {
    const [selected, setSelected] = useState([]);
  // console.log(selected);
  return (
    <>
      <main className="">
        {/* <Navbar
        selected ={selected}
        />
        <Hero />
        <StatsBanner /> */}
        <DigitalToolsCard 
        selected ={selected}
        setSelected ={setSelected}
        />
      </main>
    </>
  );
}

export default App;
