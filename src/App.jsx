import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Barrier from "./components/Barrier";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Header />
      <Barrier />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
