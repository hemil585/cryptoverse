import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MarketUpdate from "./components/MarketUpdate/MarketUpdate";

const App = () => {
  return (
    <>
      <div className="app-header">
        <Navbar />
        <Hero />
        <MarketUpdate />
      </div>
    </>
  );
};

export default App;
