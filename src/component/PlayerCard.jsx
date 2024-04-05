import { Link } from "react-router-dom";
import Players from "./players";
import "../style/PlayerCard.css"


const PlayerCard = ({ name, imageUrl }) => {


    return (
      <div className="player-details" style={{'backgroundImage': `url(${imageUrl})`}} >
        <div className="overlay">
        <h2>Name: {name} </h2>
        <Link className="prod" to={`/PlayerDetails/${Players.id}`}>
                  Player Details
                </Link>
          {/* <h2>Name: {name} </h2> */}
          {/* <p>See Details</p> */}
        </div>
      </div>
    );
  };
  
  export default PlayerCard;