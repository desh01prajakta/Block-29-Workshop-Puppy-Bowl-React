import { useDeletePlayerMutation, useGetSinglePlayerQuery } from "../API/puppyBowlApi";
import { useParams, Link, useNavigate } from "react-router-dom";
//components
import PlayerCard from "./PlayerCard";

const PlayerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deletePlayer] = useDeletePlayerMutation();

  const { data = {}, error, isLoading } = useGetSinglePlayerQuery(id);

 const handleDelete = async (id) => {
  await deletePlayer(id)

  navigate('/players', {preventScrollReset: false})
 }

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <section><p>Player is loading...</p></section>
  }

  // Show an error message if the fetch failed
  if (error) {
    return <section><p>{error.data.error.message}</p></section>
  }

  const player = data?.data?.player;

  return (
    <section>
      {player && (
        <div>
          <h1>Name: {player.name}</h1>
          <img className="player-image" src={player.imageUrl} />
          <div className="player">
            <h3>Breed: {player.breed}</h3>
            <div>
              <p>Status: {player.status}</p>
              <p>Score: {player?.team?.score || 0}</p>
            </div>
          </div>
          <button onClick={()=> handleDelete(player.id)}>Remove Player</button>
          <div>
            <h2>Team: {player?.team?.name || "None"}</h2>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default PlayerDetails;
