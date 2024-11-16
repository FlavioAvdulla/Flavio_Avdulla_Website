import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Icons
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Pages/Contacts/Contacts";

// Projects
import Polaris_Online_Store from "./Pages/Polaris_Online_Store/Polaris_Online_Store";
import Mens_SkinCare from "./Pages/Mens_SkinCare/Mens_SkinCare";
import Logo_Designs from "./Pages/Logo_Designs/Logo_Designs";
import Fruit_mix from "./Pages/Fruit_mix/Fruit_mix.JSX";

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
          <Route path="/Logo_Designs" element={<Logo_Designs />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Fruit_mix" element={<Fruit_mix />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
