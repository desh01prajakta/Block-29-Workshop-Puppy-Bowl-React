export default async function fetchPlayers(){
    try{
        const resonse = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b/players`)
        const result = await resonse.json();
        return result;
        }
        catch(error)
        {console.error(error)}
    }

