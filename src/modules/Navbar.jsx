import HeaderContainer from "./HeaderContainer"
import navWindow from "../assets/navBar/navWindow.svg"

import theASSignerlogo from "../assets/theASSignerlogo_2.svg"
import { useState } from "react"

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const ShowSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <header>
                <HeaderContainer />
            </header>
            <div className="navbar">
                <img src={theASSignerlogo} alt=""/>
                <div className="pageFrame">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Our Services</a>
                    <a href="">IELTS & PTE</a>
                    <a href="">Contact Us</a>
                </div>
                <button className="loginButton">Login</button>
                <img id="navWindow" src={navWindow} alt="" onClick={ShowSidebar}/>
                <div className={sidebar ? "alt-pageFrame active" : "alt-pageFrame"}>
                    <a href="" onClick={ShowSidebar}>[Close]</a>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Our Services</a>
                    <a href="">IELTS & PTE</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;