import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StatsBanner from "./Components/StatsBanner";

function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <StatsBanner />
      </main>
    </>
  );
}

export default App;
