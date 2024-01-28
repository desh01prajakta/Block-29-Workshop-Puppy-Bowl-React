import { useState } from "react";
import { Routes, Route,Link, NavLink } from "react-router-dom";
import home from "./component/AllPlayers";
import singlePlayer from "./component/SinglePlayer";
import "./App.css";
import React from "react";

function App() {
  return (
    <section>
      <div id="navbar">
        <NavLink to="/"></NavLink>
        <Link to="/home">To Home</Link>
      </div>
      <div id="mainsection">
        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/players/:id" element={<singlePlayer />} />
        </Routes>
      </div>
          </section>
  );
}

export default App;
