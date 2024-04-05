// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import PlayerDetails from "./component/PlayerDetails";
import Navbar from "./component/NavBar";
import Players from "./component/players";

import Home from "./component/Home";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        {/* <Route path="/playerDetails" element={<SinglePlayer />} /> */}
        <Route path="/playerdetails/:id" element={<PlayerDetails />} />
        {/* <Route path="/AllPlayers" element={<AllPlayers />} /> */}
      </Routes>
    </section>
  );
}

export default App;
