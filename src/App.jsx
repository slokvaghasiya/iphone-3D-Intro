import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";


const App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/iphone-3D-Intro' element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
