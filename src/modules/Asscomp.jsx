export default function assComp({heading = "Heading", desc = "Description", key = 0}) {
    return(
        <div className="asscomp" key={key}>
            <h2>{heading}</h2>
            <p>{desc}</p>
        </div>
    )
}