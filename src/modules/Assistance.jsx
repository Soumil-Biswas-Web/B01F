import noPage from "../assets/awesomeFeatures/noPage.png"
import books from "../assets/awesomeFeatures/books.png"
import pdf from "../assets/awesomeFeatures/pdf.png"
import formPage from "../assets/awesomeFeatures/form.png"

import triangles from "../assets/OBJECTS.png"
import cross from "../assets/OBJECTS_CROSS.png"

import AssComp from "./Asscomp"

export default function Assistance() {
    return(
        <div className="assistance">
            <h1>Our Assistance's advantages</h1>
            <h2>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</h2>
            <div className="components">
                <AssComp 
                    heading="No Plagiarism" 
                    desc="100% original answers that lessen the possibility of receiving a bad grade."
                />
                <AssComp 
                    heading="On-time Submission" 
                    desc="We promise to turn in the job ahead of schedule, no matter how difficult it is."
                />
                <AssComp 
                    heading="24/7 support" 
                    desc="Help for homework is available 24/7; we are always here to assist students with their assignments."
                />
                <AssComp 
                    heading="Rewrites that satisfy" 
                    desc="Get your schoolwork redone as many times as you like till you are happy."
                />
            </div>
            <img id="vert-triangles" src={triangles} alt="" />
            <img id="vert-cross" src={cross} alt="" />
        </div>
    )
}