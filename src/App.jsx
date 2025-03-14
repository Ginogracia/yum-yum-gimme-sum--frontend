import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Menu from "./components/Menu.jsx"
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {


  return (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/eta" element={<Eta />} /> */}
        {/* <Route path="/receipt" element={<Receipt />} /> */}
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
