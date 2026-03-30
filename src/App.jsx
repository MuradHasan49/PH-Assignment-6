import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
