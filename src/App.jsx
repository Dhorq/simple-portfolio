import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Barrier from "./components/Barrier";
import About from "./components/About";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Header />
      <Barrier />
      <About />
    </div>
  );
};

export default App;
