import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Header from "./Components/ReUseComponents/Header";
import StatsBanner from "./Components/StatsBanner";

function App() {
  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <StatsBanner />
        <Header />
      </main>
    </>
  );
}

export default App;
