import { useState } from "react";
import {useAddPlayersMutation} from "../API/puppyBowlApi"
import { useNavigate } from 'react-router-dom';

function NewPlayerForm(){
    const navigate = useNavigate();
    const [addPlayer] = useAddPlayersMutation()

    const [name, setName] = useState("")
    const [breed, setBreed] = useState('')
    const [status, setStatus] = useState('bench')
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit =async  event => {
        event.preventDefault();

        const response = await postPlayer({name, breed, status, imageUrl})

        setName("")
        setBreed("")
        setImageUrl("")
        setStatus('bench')

        navigate(`/players/${response.data.data.newPlayer.id}`)
    }
    return(
        <div>
            <h3>Add a Puppy Player</h3>
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
        <select value={status} onChange={(event)=>setStatus(event.target.value)}>
                    <option value='field'>Field</option>
                    <option value='bench'>Bench</option>
                </select>
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
      </div>
    )
}

export default NewPlayerForm;