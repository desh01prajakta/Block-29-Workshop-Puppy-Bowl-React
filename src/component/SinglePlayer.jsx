import { useNavigate } from "react-router-dom";
import {useSinglePlayerQuery} from "../API/puppyBowlApi"
import { useEffect } from "react";


export default function singlePlayer() {
  const navigate = useNavigate();
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