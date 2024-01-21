import { useState } from "react";
import { link } from "react-router-dom";
import home from "./component/AllPlayers";
import player from "./component/SinglePlayer";
import "./App.css";

function App() {
  return (
    <section>
      <div id="navbar">
        <NavLink to="/"></NavLink>
        <link to="/home">To Home</link>
      </div>
      <div id="mainsection">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
