import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Squad from "./Components/Squad";
import History from "./Components/History";
import Titles from "./Components/Titles";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="squad" element={<Squad />} />
          <Route path="history" element={<History />} />
          <Route path="titles" element={<Titles/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
