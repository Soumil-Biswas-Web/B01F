import Navbar from "./navbar";
import DataPanel from "./dataPanel";
import TheWorld from "./TheWorld";
import AwesomeFeatures from "./AwesomeFeatures";
import OurServices from "./OurServices";
import Assistance from "./Assistance";
import FAQ from "./FAQ";
import Footer from "./Footer";

import heroImage from "../assets/image1.png"

function IndexPage() {
    return(
        <div className="indexPage">
            <Navbar />
            <div className="heropage">
                <img className="heroImage" src={heroImage} alt="" />
            </div>
            <DataPanel />
            <TheWorld />
            <AwesomeFeatures />
            <OurServices />
            <Assistance />
            <FAQ />
            <Footer />
        </div>   
    )
}

export default IndexPage;