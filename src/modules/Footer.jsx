import background from "../assets/footer_background.png"
import design from "../assets/footer_design.png"
import HeaderContainer from "./HeaderContainer"
import { useState } from "react"

import './modal.css'

export default function Footer () {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const [email, setEmail] = useState("Email>>")
    
    const saveInfo = (e) => {
        e.preventDefault();
        toggleModal();
        const form = document.querySelector("#subscriptionForm");
        const data = new FormData(form);
        setEmail(data.get("subEmail"));
        console.log("email set");
    }
  
    if(modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal')
    }

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
                    <form id="subscriptionForm" onSubmit={saveInfo}>
                        <input className="emailButton" type="email" name="subEmail" id="subEmail" placeholder="Your email here" required/>
                        <button className="subscribeButton" type="submit">Subscribe</button>
                    </form>
                    <HeaderContainer />
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">
                        <div className="modal-content">
                            <h2>Thank you for subscribing!</h2>
                            <p>{"You will now recieve notifications at " + email + " in your email."}</p>
                            {/* <p>You will now recieve notifications in your email.</p> */}
                            <button onClick={toggleModal}>Go back</button>                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}