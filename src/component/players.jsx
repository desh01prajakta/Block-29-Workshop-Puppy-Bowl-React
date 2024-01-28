// Import the React library
import React, { useEffect, useState } from "react";
// import { Dispatch } from "@reduxjs/toolkit";
// Import the generated hook from our RTK Query API slice
import { 
  useGetPlayersQuery,
  useAddPlayersMutation,
  useDeletePlayersMutation,
  useGetSinglePlayerQuery,
 } from "../API/puppyBowlApi";
//  import { puppyBowlApi } from "../API/puppyBowlApi";
 import { useNavigate } from "react-router-dom";
// import "../../index.css"

// new function that renders the players on the screen
function Players () {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data, error, isLoading } = useGetPlayersQuery();
  const {deletePlayer} = useDeletePlayersMutation();
  const {addPlayers} = useAddPlayersMutation();
  const {addPuppyName, setAddPuppyName}= useState("");
  const {addPuppyBreed, setAddPuppyBreed }= useState("");
  const {addPuppyStatus, setAddPuppyStatus}= useState("bench");
  const {addPuppyPic,setAddPuppyPic} = useState("");
  const {addPuppyTeam, setAddPuppyTeam} = useState("");
  const Navigate = useNavigate();
  
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    console.log("hello", e);
    console.log(addPuppyStatus);
    addPlayers({
      name: addPuppyName,
      breed: addPuppyBreed,
      status: addPuppyStatus,
      imageUrl:addPuppyPic,
    })
  }
  function handleClick(e){
    console.log(e.target.id);
    Navigate(`/${e.target.id}`);
  }
  // handledelete function
  function handleDelete(e){
    console.log(e.target.id);
    deletePlayer(`/${e.target.id}`)
  }

  // Show a loading message while data is being fetched
  if (isLoading) {
    <p>Loading...</p>    
  }
  // Show an error message if the fetch failed
  if (error) {
    <p>Error</p>
  }
  return(
  <div className="players">
        <h2>Add Player form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:
          <input 
          value = {addPuppyName} onChange={(e) => setAddPuppyName(e.target.value)} name="name"></input>
          </label>
          <label>Breed:
          <input 
          value = {addPuppyBreed} onChange={(e) => setAddPuppyBreed(e.target.value)} name="breed"></input>
          </label>
          <label>Status:
          <input 
          value = {addPuppyStatus} onChange={(e) => setAddPuppyStatus(e.target.value)} name="status"></input>
          </label>
          <label>TeamId:
          <input 
          value = {addPuppyTeam} onChange={(e) => setAddPuppyTeam(e.target.value)} name="teamId" type="submit"></input>
          </label>
          <label>Image URL
          <input value={addPuppyPic} onChange = {(e) => setAddPuppyPic(e.target.value)}></input>
          </label>
          <button onClick={handleSubmit} type="submit">Add Player</button>
        </form>
      {data?.data?.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img className= "player-image" src = {player.imageUrl}></img>
          
          <div className="player-details">
            
            <h2>  {player.name} </h2> 
            
            <p>  {player.breed} </p> 
            
            <p> {player.status} </p>
            <button name = "playerInfo" onClick={handleClick} id={player.id}>deletePlayer</button>
          </div>
        </div>
        )
  )}
    </div>
  );
};

export default Players;

// Export the component so it can be imported and used in other files
