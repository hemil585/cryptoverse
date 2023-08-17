import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Coin from "./pages/Coin";

const App = () => {
  return (
    <>
      <div className="app-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinID" element={<Coin />}>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
