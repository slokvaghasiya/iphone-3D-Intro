import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";


const App = () => {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/iphone-3D-Intro' element={<Index />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
