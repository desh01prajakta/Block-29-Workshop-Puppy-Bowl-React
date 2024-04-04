// Import the React library
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import NewPlayerForm from "./NewPlayerForm";
// import { Dispatch } from "@reduxjs/toolkit";
// Import the generated hook from our RTK Query API slice
import { 
  useGetPlayersQuery,
  useAddPlayersMutation,
  useDeletePlayersMutation,
  useGetSinglePlayerQuery
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
  // const {deletePlayer} = useDeletePlayersMutation();
  // const {addPlayers} = useAddPlayersMutation();
  // const {addPuppyName, setAddPuppyName}= useState("");
  // const {addPuppyBreed, setAddPuppyBreed }= useState("");
  // const {addPuppyStatus, setAddPuppyStatus}= useState("bench");
  // const {addPuppyPic,setAddPuppyPic} = useState("");
  // const {addPuppyTeam, setAddPuppyTeam} = useState("");
  const Navigate = useNavigate();
  const [searchParameter, setSearchParameter] = useState('');
  
  
  // function handleClick(e){
  //   console.log(e.target.id);
  //   Navigate(`/${e.target.id}`);
  // }
  // // handledelete function
  // function handleDelete(e){
  //   console.log(e.target.id);
  //   deletePlayer(`/${e.target.id}`)
  // }
  useEffect(()=>{
    refetch();
  },[])
  // Show a loading message while data is being fetched
  if (isLoading) {
    <p>Loading...</p>    
  }
  // Show an error message if the fetch failed
  if (error) {
    <p>Error</p>
  }
  const playersToDisplay = searchParameter && data?.data?.players ? data?.data?.players.filter(player => player.name.toLowerCase().includes(searchParameter.toLowerCase())) : data?.data?.players
  
  return(
  <div>
    <NewPlayerForm />
        <h2>All Players</h2>
        <SearchBar searchParameter={searchParameter} setSearchParameter={setSearchParameter}/>
        <div className="players">
          
        {playersToDisplay && playersToDisplay.map((player) => (
        // Use the player's ID as the key for this div
            <button className="player-card"  key={player.id} onClick={() => navigate(`/players/${player.id}`)}>
                <PlayerCard  name={player.name} imageUrl={player.imageUrl}/>
            </button>
            ))}
            </div>
      {/* {data?.data?.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img className= "player-image" src = {player.imageUrl}></img>
          
          <div className="player-details">
            
            <h2>  {player.name} </h2> 
            
            <p>  {player.breed} </p> 
            
            <p> {player.status} </p>
            <button name = "playerInfo" onClick={handleClick} id={player.id}>deletePlayer</button>
          </div>
        </div> */}
        {/* )
  )} */}
    </div>
  );
};

export default Players;

// Export the component so it can be imported and used in other files
