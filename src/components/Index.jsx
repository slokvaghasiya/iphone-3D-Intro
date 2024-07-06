import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlight from "./Highlight";
import Model from "./Model";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="bg-black" >
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Index