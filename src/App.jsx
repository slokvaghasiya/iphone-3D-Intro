import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";


const App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route  path='/iphone-3D/' element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
