import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./Pages/Projects/Projects";
import Home from "./Pages/Home/Home";
import Polaris_Online_Store from "./Pages/Polaris_Online_Store/Polaris_Online_Store";
import Mens_SkinCare from "./Pages/Mens_SkinCare/Mens_SkinCare";
import Contacts from "./Pages/Contacts/Contacts";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Polaris_Online_Store" element={<Polaris_Online_Store />} />
          <Route path="/Mens_SkinCare" element={<Mens_SkinCare />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
