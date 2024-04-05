import puppyBowlImg from '../assets/puppyBowl.jpg'
import "../style/PlayerCard.css"

function Home(){
    return(
        <section>
            <h1>Puppy Bowl</h1>
            <img className='puppy-bowl-home' src={puppyBowlImg} width="500px"/>
        </section>
    )
}
export default Home;