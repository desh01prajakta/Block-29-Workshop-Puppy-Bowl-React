import puppyBowlImg from '../assets/puppyBowl.jpg'

function Home(){
    return(
        <section>
            <h1>Puppy Bowl</h1>
            <img className='puppy-bowl-home' src={puppyBowlImg}/>
        </section>
    )
}
export default Home;