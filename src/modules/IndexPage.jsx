import Navbar from "./navbar";
import HeroPage from "./HeroPage";
import DataPanel from "./dataPanel";
import TheWorld from "./TheWorld";
import AwesomeFeatures from "./AwesomeFeatures";
import OurServices from "./OurServices";
import Assistance from "./Assistance";
import FAQ from "./FAQ";
import Footer from "./Footer";

function IndexPage() {
    return(
        <div className="indexPage">
            <Navbar />
            <HeroPage />
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