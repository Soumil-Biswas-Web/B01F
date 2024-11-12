import planes from "../assets/theWorld/planes_around_the_world.png"
import people from "../assets/theWorld/women_working_with_computer.png"

export default function TheWorld () {
    return(
        <div className="theWorld">
            <div className="heading">
                <h1>IELTS Preparation  </h1>
                <h1>Online Best Learning</h1>
                <h1>opportunities in The World</h1>
            </div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Audax negotium, dicerem impudens, nisi hoc institut <br/>translatum ad philosophos nostros esset.</h2>
            <button>Enroll Now</button>
            <img id="planes" src={planes} alt="" />
            <img id="people" src={people} alt="" />
        </div>
    )
}