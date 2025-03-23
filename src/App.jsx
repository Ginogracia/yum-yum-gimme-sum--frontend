import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Menu from "./components/Menu.jsx"
import Eta from "./components/Eta.jsx"


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/eta" element={<Eta />} />
      </Routes>
    </Router>
  )
}

export default App
