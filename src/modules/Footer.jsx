import background from "../assets/footer_background.png"
import design from "../assets/footer_design.png"
import HeaderContainer from "./HeaderContainer"

export default function Footer () {
    return(
        <div className="footer">
            <img src={background} alt="" />
            <img id="footerPattern" src={design} alt="" />
            <div className="part">                
                <div className="lists">                
                    <ul>
                        <h2>Quick Links</h2>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>FAQ</p>
                        <p>Contect Us</p>
                        <p>How we help?</p>
                        <p>Community</p>
                    </ul>
                    <ul>
                        <h2>Features</h2>
                        <p>Plagiarism Checker</p>
                        <p>Free Publications</p>
                        <p>Provides Books</p>
                        <p>Provides PDF</p>
                        <p>Paraphraser</p>
                    </ul>
                    <ul>
                        <h2>Our Offering</h2>
                        <p>Free IELTS Masterclass</p>
                        <p>Talk to Conusellor</p>
                        <p>IELTS Exam Overview</p>
                        <p>Important IELTS Articles</p>
                    </ul>
                </div>
                <div className="news">
                    <h2>Newsletter</h2>
                    <p>You can trust us. We only send promo offers,</p>
                    <input className="emailButton" type="text" name="subEmail" id="subEmail" placeholder="Your email here"/>
                    {/* <button className="emailButton">Your email here</button> */}
                    <button className="subscribeButton">Subscribe</button>
                    <HeaderContainer />
                </div>
            </div>
        </div>
    )
}