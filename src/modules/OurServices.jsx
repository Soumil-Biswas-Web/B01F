import ServiceComp from "./ServiceComp"
import image2 from "../assets/ourServices/image2.png"
import image3 from "../assets/ourServices/image3.png"
import image5 from "../assets/ourServices/image5.png"
import image6 from "../assets/ourServices/image6.png"
import image7 from "../assets/ourServices/image7.png"
import image8 from "../assets/ourServices/image8.png"
import image9 from "../assets/ourServices/image9.png"
import image10 from "../assets/ourServices/image10.png"
import image11 from "../assets/ourServices/image11.png"
import image12 from "../assets/ourServices/image12.png"
import image13 from "../assets/ourServices/image13.png"
import image14 from "../assets/ourServices/image14.png"
import image15 from "../assets/ourServices/image15.png"
import image16 from "../assets/ourServices/image16.png"

export default function OurServices() {
    return(
        <div className="ourServices">
            <h1>Our Services</h1>
            <h2>We offer some fantastic services</h2>
            <div className="components">
                <ServiceComp 
                    heading="Assignment"
                    img={image2}
                    qty={178}
                />
                <ServiceComp 
                    heading="Dissertation"
                    img={image3}
                    qty={150}
                />
                <ServiceComp 
                    heading="Course Work"
                    img={image7}
                    qty={120}
                />
                <ServiceComp 
                    heading="Thesis"
                    img={image5}
                    qty={129}
                />
                <ServiceComp 
                    heading="Essay"
                    img={image6}
                    qty={47}
                />
                <ServiceComp 
                    heading="Research Paper"
                    img={image8}
                    qty={57}
                />
                <ServiceComp 
                    heading="Power Point Presentation"
                    img={image9}
                    qty={89}
                />
                <ServiceComp 
                    heading="Programming"
                    img={image10}
                    qty={134}
                />
                <ServiceComp 
                    heading="Paper Writing"
                    img={image11}
                    qty={193}
                />
                <ServiceComp 
                    heading="Case Study"
                    img={image12}
                    qty={125}
                />
                <ServiceComp 
                    heading="Speech Writing"
                    img={image13}
                    qty={100}
                />
                <ServiceComp 
                    heading="Term Paper Writing"
                    img={image14}
                    qty={135}
                />
                <ServiceComp 
                    heading="Cover Letter Writing"
                    img={image15}
                    qty={120}
                />
                <ServiceComp 
                    heading="Resume Maker"
                    img={image16}
                    qty={132}
                />
            </div>            
        </div>
    )
}