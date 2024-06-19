import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="about" Component={About} />
        <Route exact path="services" Component={Services} />
        <Route exact path="contact" Component={Contact} />        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
