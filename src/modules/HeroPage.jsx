import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import heroImage from "../assets/image1.png"

const imgArray = [heroImage, heroImage, heroImage, heroImage]

export default function HeroPage() {
    const [imgIndex, setImgIndex] = useState(0);

    const prevImage = () =>  {
        setImgIndex(index => {
            if (index === 0) return imgArray.length - 1;
            return index - 1;
        })
    }

    const nextImage = () =>  {
        setImgIndex(index => {
            if (index === imgArray.length - 1) return 0;
            return index + 1;
        })
    }


    return(
        <div className="heropage">
            <div className="imgdiv">
                {imgArray.map((url, index) => (
                    <img key={index} src={url} alt="" className="heroImage" style={{translate: `${-100 * imgIndex}%`}}/>
                ))}
                {/* <img className="heroImage" src={heroImage} alt="" /> */}
            </div>            
            <div className="infopage">
                <button id="imgArrowLeft" onClick={prevImage}>
                    <ArrowBigLeft />
                </button>
                <button id="imgArrowRight" onClick={nextImage}>
                    <ArrowBigRight />
                </button>
                <div className="heading">
                    <h1>Navigate Your</h1>
                    <h1>Academic Journey</h1>
                    <h1>with Confidence</h1>
                </div>
                <h2>Providing high-quality and comprehensive assistance with assignments and thesis writing for students at all academic levels.</h2>
            </div>

        </div>
    )
}
