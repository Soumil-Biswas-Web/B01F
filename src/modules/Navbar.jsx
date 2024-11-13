import HeaderContainer from "./HeaderContainer"
import navWindow from "../assets/navBar/navWindow.svg"

import theASSignerlogo from "../assets/theASSignerlogo_2.svg"

function Navbar(){
    return(
        <>
            <header>
                <HeaderContainer />
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
                <img id="navWindow" src={navWindow} alt="" />
            </div>
        </>
    )
}

export default Navbar;