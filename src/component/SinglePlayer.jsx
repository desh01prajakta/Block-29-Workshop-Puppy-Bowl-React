// import { useNavigate } from "react-router-dom";
import {useGetSinglePlayerQuery} from "../API/puppyBowlApi"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function singlePlayer() {
  const [player, setPlayer] = useState({});
  const {playerInfo} = useParams();
  console.log(playerInfo);
  const{data, error, isLoading} = useGetSinglePlayerQuery(id);
  useEffect(()=>{
    if (data){
      setPlayer(data)
    }
  },[data])
  console.log(player?.data?.player?.id)
  // const navigate = useNavigate();

    return (
      <div>
      {
          player.map((player)=>{
              return (
                  <div>
                      <h4>{player.name}</h4>
                      ...whatever you want to display
                  </div>
              )
          })
      }
    <button onClick={() => navigate(`/player/${player.id}`)}></button>;

      <div className="player">
        <h1>Player</h1>
              
      </div>
      </div>
    );
  }