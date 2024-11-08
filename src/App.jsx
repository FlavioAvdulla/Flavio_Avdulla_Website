import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./Pages/Projects/Projects";
import Home from "./Pages/Home/Home";
import Polaris_Online_Store from "./Pages/Polaris_Online_Store/Polaris_Online_Store";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Polaris_Online_Store" element={<Polaris_Online_Store />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
