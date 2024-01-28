// import { useState } from "react";
import { Routes, Route,Link, NavLink } from "react-router-dom";
import SinglePlayer from "./component/SinglePlayer";
import "./App.css";
import React from "react";
import Navbar from "./component/NavBar";
import Players from "./component/players";

function App() {
  return (
    <section>
      <div id="navbar">
        .<Navbar/>
        {/* <NavLink to="/"></NavLink> */}
        {/* <Link to="/home">To Home</Link> */}
      </div>
      <div id="mainsection">
        <Players />
        <SinglePlayer />
        <Routes>
          <Route path="/" element={<Players/>} />
          <Route path="/:playerInfo" element={<SinglePlayer />} />
        </Routes>
      </div>
          </section>
  );
}

export default App;
