import DataBloc from "./DataBloc";

import triangles from "../assets/OBJECTS.png"
import cross from "../assets/OBJECTS_CROSS.png"

import studyIcon from "../assets/DataPanel/Img.svg"
import instiIcon from "../assets/DataPanel/Img-1.svg"
import userIcon from "../assets/DataPanel/Img-2.svg"

function DataPanel() {
    return(
        <div className="dataPanel">
            <div className="span">
                <img id="triangles" src={triangles} alt="" />
                <h1>700+ students saved, and counting</h1>
                <h2>50K new study notes added every day, from the world’s most active student communities</h2>
                <div className="data">
                    <DataBloc number={350} type="Study Resources" icon={studyIcon}/>
                    <DataBloc number={115} type="Institutions" icon={instiIcon}/>
                    <DataBloc number={700} type="Users" icon={userIcon}/>
                </div>
                <img id="cross" src={cross} alt="" />
            </div>
        </div>   
    )
}

export default DataPanel;