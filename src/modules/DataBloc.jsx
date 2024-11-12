export default function DataBloc({number = 0, type = "Thing", icon, key = 0}){
    return(
        <div className="dataitem" key={key}>
            <h1>{number + "+"}</h1>
            <div>
                <img src={icon} alt="" />
                <p>{type}</p>
            </div>
        </div>
    )
}