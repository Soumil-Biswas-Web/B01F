import linkedIn from "../assets/navBar/img.svg"
import meta from "../assets/navBar/img-1.svg"
import insta from "../assets/navBar/img-2.svg"
import x from "../assets/navBar/img-3.svg"
import whatsapp from "../assets/navBar/img-4.svg"
import telegram from "../assets/navBar/img-5.svg"

export default function HeaderContainer() {
    return(
        <div className="headerContainer">
            <button><img src={linkedIn} alt="" /></button>
            <button><img src={meta} alt="" /></button>
            <button><img src={insta} alt="" /></button>
            <button><img src={x} alt="" /></button>
            <button><img src={whatsapp} alt="" /></button>
            <button><img src={telegram} alt="" /></button>
        </div>
    )
}