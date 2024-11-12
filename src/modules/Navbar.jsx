import linkedIn from "../assets/navBar/img.svg"
import meta from "../assets/navBar/img-1.svg"
import insta from "../assets/navBar/img-2.svg"
import x from "../assets/navBar/img-3.svg"
import whatsapp from "../assets/navBar/img-4.svg"
import telegram from "../assets/navBar/img-5.svg"

import theASSignerlogo from "../assets/theASSignerlogo_2.svg"

function Navbar(){
    return(
        <>
            <header>
                <div className="headerContainer">
                    <button><img src={linkedIn} alt="" /></button>
                    <button><img src={meta} alt="" /></button>
                    <button><img src={insta} alt="" /></button>
                    <button><img src={x} alt="" /></button>
                    <button><img src={whatsapp} alt="" /></button>
                    <button><img src={telegram} alt="" /></button>
                </div>
            </header>
            <div className="navbar">
                <img src={theASSignerlogo} alt="" />
                <div className="pageFrame">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Our Services</a>
                    <a href="">IELTS & PTE</a>
                    <a href="">Contact Us</a>
                </div>
                <button className="loginButton">Login</button>
            </div>
        </>
    )
}

export default Navbar;