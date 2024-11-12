export default function FAQomponent({question="String"}) {
    return(
        <div className="faqomponent">
            <p>{question}</p>
            <p id="faqarrow">v</p>
        </div>
    )
}