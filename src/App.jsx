import { useState } from "react";
import "./App.css";
import DigitalToolsCard from "./Components/DigitalToolsCard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StatsBanner from "./Components/StatsBanner";
import { ToastContainer } from "react-toastify";


function App() {
    const [selected, setSelected] = useState([]);
  return (
    <>
      <main className="">
        <ToastContainer/>
        <Navbar
        selected ={selected}
        />
        <Hero />
        <StatsBanner />
        <DigitalToolsCard 
        selected ={selected}
        setSelected ={setSelected}
        />
        
      </main>
    </>
  );
}

export default App;
