// import { useNavigate } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../API/puppyBowlApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { id } = useParams(); // Change playerInfo to id
  console.log(id);

  const{data, error, isLoading} = useGetSinglePlayerQuery(id);
  
  useEffect(()=>{
    if (data){
      setPlayer(data)
    }
  },[data])
  
  // const navigate = useNavigate();
  if (isLoading) {
    return <section><p>Players are loading...</p></section>
   } 
  // Show an error message if the fetch failed
  if (error) {
    return <section><p>{error.data.error.message}</p></section>
  }
    return (
      <div key={player?.data?.player?.id} className="player-card">
        {console.log(player?.data?.player?.name)}
      <img className= "player-image" src = {`${player?.data?.player?.imageUrl}`} alt = {`${player?.data?.player?.name} Image`}/>
      
      <div className="player-details">
        
        <h2>  {player?.data?.player?.name} </h2> 
        
        <p> Breed: {player?.data?.player?.breed} </p> 
        
        <p> Status: {player?.data?.player?.status} </p>
       
      </div>
    </div>
      );
  }