export default function ServiceComp({heading = "heading", img, qty = 0, key = 0}) {
    return(
        <div className="servicecomp" key={key}>
            <img src={img} alt="" />
            <div className="panel">
                <p>{heading}</p>
                <div>
                    {/* <img src={stars} alt="" /> */}
                    <p>{" (" + qty + ")"}</p>
                </div>
            </div>
        </div>
    )
}