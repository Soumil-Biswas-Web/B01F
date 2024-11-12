export default function FeatureComp({heading = "Heading", desc = "Description", img, key = 0}) {
    return(
        <div className="featurecomp" key={key}>
            <img src={img} alt="" />
            <h2>{heading}</h2>
            <p>{desc}</p>
        </div>
    )
}