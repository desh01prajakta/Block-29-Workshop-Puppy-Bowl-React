import fetchPlayers from "./ajaxHelpers";
import { useState, useEffect } from "react";



export default function home() {  
  const[players, setPlayers]= useState([]);  
        return (
      <div className="home">
        <h1>To Home</h1>
      </div>
    );
  }
  const fetchDataAndSetPlayers = async () => {
    
    try {
      // Call the fetchPlayers function (assuming it's an asynchronous function)
      const fetchedPlayers = await fetchPlayers();
  
      // Set the fetched players into state using setPlayers
      fetchPlayers(fetchedPlayers);
  
      console.log("Players fetched and set into state:", fetchedPlayers);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };
  
  // Invoke the function
  fetchDataAndSetPlayers();
  