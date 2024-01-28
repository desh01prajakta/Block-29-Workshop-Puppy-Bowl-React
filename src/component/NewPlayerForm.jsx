import { useState } from "react";
import { useAddPlayersMutation } from "../redux"

function AddPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [teamId, setTeamId] = useState("");
    const [cohortId, setCohortId] = useState("")
    const [ addPlayer ] = useAddPlayersMutation()
  
    function handleSubmit(e) {
      e.preventDefault();
      addPlayer({
        name,
        breed,
        status,
        teamId,
        cohortId,
        })
    }
      return (
      <>
      <div className="column">
        <h2>Add Player form</h2>
        <form className="column">
          <label>Name:</label>
          <input onChange={(e) => setName(e.target.value)} name="name"></input>
          <label>Breed:</label>
          <input onChange={(e) => setBreed(e.target.value)} name="breed"></input>
          <label>Status:</label>
          <input onChange={(e) => setStatus(e.target.value)} name="status"></input>
          <label>TeamId:</label>
          <input onChange={(e) => setTeamId(e.target.value)} name="teamId" type=""></input>
          <label>CohortId:</label>
          <input onChange={(e) => setCohortId(e.target.value)} name="cohortId" type=""></input>
          <button onClick={handleSubmit} type="submit">Add Player</button>
        </form>
      </div>
      </>
    )
  }
  
  export default AddPlayerForm