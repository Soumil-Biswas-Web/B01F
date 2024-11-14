import { useState } from "react"

export default function FAQomponent({question="String"}) {

    const [answer, setAnswer] = useState(false);

    const showAnswer = () => setAnswer(!answer);

    return(
        <div className="faqomponent" style={{height : `${(60 * answer) + 60}px`}}>
            <div className="flexpart">
                <p>{question}</p>
                <p id="faqarrow" onClick={showAnswer}>v</p>
            </div>
            <p className="answer" id={"show-answer"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium, dicerem impudens, nisi hoc institut translatum ad philosophos nostros esset.</p>
        </div>
    )
}