// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SinglePlayer from "./component/SinglePlayer";
import "./App.css";
import React from "react";
import Navbar from "./component/NavBar";
import Players from "./component/players";
import AllPlayers from "./component/AllPlayers";
import Home from "./component/Home";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
          <Route path="/players" element={<Players/>} />
          <Route path="/singlePlayer" element={<SinglePlayer />} />
          {/* <Route path="/AllPlayers" element={<AllPlayers />} /> */}
        
      </Routes>
          </section>
  );
}

export default App;
