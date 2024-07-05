import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";


const App = () => {

  return (
    <main className="bg-black" >
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
    </main>
  )
}

export default App
