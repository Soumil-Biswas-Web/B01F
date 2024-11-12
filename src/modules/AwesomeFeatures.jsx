import noPage from "../assets/awesomeFeatures/noPage.png"
import books from "../assets/awesomeFeatures/books.png"
import pdf from "../assets/awesomeFeatures/pdf.png"
import formPage from "../assets/awesomeFeatures/form.png"

import FeatureComp from "./FeatureComp"

export default function AwesomeFeatures() {
    return(
        <div className="awesomeFeatures">
            <h1>Awesome Features</h1>
            <h2>Get ready to unlock the next level of features</h2>
            <div className="components">
                <FeatureComp 
                    heading="Plagiarism Checker" 
                    desc="We will provide access to assignments free of plagiarism"
                    img={noPage}
                />
                <FeatureComp 
                    heading="Free Publications" 
                    desc="We will provide access to publication"
                    img={books}
                />
                <FeatureComp 
                    heading="Provides Free Books and PDF" 
                    desc="Free Books and PDF will be provided"
                    img={pdf}
                />
                <FeatureComp 
                    heading="Paraphraser" 
                    desc="A paraphraser will be provided"
                    img={formPage}
                />
            </div>

        </div>
    )
}