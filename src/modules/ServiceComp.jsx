import star from "../assets/ourServices/star.svg"

export default function ServiceComp({heading = "heading", img, qty = 0, key = 0}) {
    return(
        <div className="servicecomp" key={key}>
            <img className="main-img" src={img} alt="" />
            <div className="panel">
                <p>{heading}</p>
                <div>
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <img className="star" src={star} alt="" />
                    <p>{"(" + qty + ")"}</p>
                </div>
            </div>
        </div>
    )
}