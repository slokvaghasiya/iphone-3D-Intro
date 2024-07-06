import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {

  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/iphone-3D-Intro/' element={<Index />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
