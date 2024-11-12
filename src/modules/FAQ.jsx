import FAQomponent from "./FAQomponent"

export default function FAQ() {
    return(
        <div className="faq">
            <h1>FAQs</h1>
            <div>
                <FAQomponent question="What services are available on our website?"/>
                <FAQomponent question="How can we guarantee the caliber of the assignments?"/>
                <FAQomponent question="What distinguishes our company from other assignment writing firms?"/>
                <FAQomponent question="Does utilizing our service have any limitations?"/>
                <FAQomponent question="How can consumers access our website's news and updates?"/>
            </div>
        </div>
    )
}