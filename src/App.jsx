import { useState } from "react";
import "./App.css";
import DigitalToolsCard from "./Components/DigitalToolsCard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StatsBanner from "./Components/StatsBanner";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import WorkFlowSection from "./Components/WorkflowSection";
import GetStarts from "./Components/GetStarts";

function App() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ToastContainer />
      <Navbar selected={selected} />
      <Hero />
      <StatsBanner />
      <DigitalToolsCard selected={selected} setSelected={setSelected} />
      <GetStarts/>
      <WorkFlowSection/>
      <Footer />
    </>
  );
}

export default App;
