import fetchPlayer from "./ajaxHelpers";
import { useState, useEffect } from "react";

export default function home() {
    const[players, setPlayers]= useState([]);
    useEffect(()=>{},[])
    return (
      <div className="home">
        <h1>To Home</h1>
      </div>
    );
  }