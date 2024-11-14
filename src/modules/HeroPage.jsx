import heroImage from "../assets/image1.png"

export default function HeroPage() {
    return(
        <div className="heropage">
            <img className="heroImage" src={heroImage} alt="" />
            <div className="infopage">
                {/* <button></button>
                <button></button> */}
                <div className="heading">
                    <h1>Navigate Your</h1>
                    <h1>Academic Journey</h1>
                    <h1>with Confidence</h1>
                </div>
                <h2>Providing high-quality and comprehensive assistance with assignments and thesis writing for students at all academic levels.</h2>
            </div>

        </div>
    )
}
