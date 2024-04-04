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
    const [addPuppyTeam, setAddPuppyTeam] = useState('');
    const [addPuppyPic, setAddPuppyPic] = useState('');

    const handleSubmit =async  event => {
        event.preventDefault();

        try {
            const response = await addPlayer({ name, breed, status, imageUrl });
            navigate(`/players/${response.data.data.newPlayer.id}`);
        } catch (error) {
            console.error('Error adding player:', error);
        }   

        setName("")
        setBreed("")
        setImageUrl("")
        setStatus('bench')

        
    }
    return(
        <div>
            <h3>Add a Puppy Player</h3>
            <form onSubmit={handleSubmit}>
        <label>Name:
        <input 
        value = {name} onChange={(e) => setName(e.target.value)} name="name"></input>
        </label>
        <label>Breed:
        <input 
        value = {breed} onChange={(e) => setBreed(e.target.value)} name="breed"></input>
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