import { useState } from "react";
import "./Help.css";

export default function Help() {
    const contacts = [
        { name: "Tournament Director", phone: "0100000000" },
        { name: "Head Referee", phone: "0111111111" },
        { name: "Emergency Contact", phone: "0122222222" },
    ];

    const faqs = [
        {
            q: "What courts are the tournament played on?",
            a: "The Egyptian Open is played across multiple prestigious clubs: El-Gezira Club, Federation Courts, Heliopolis Club, Shooting Club, and El-Zohor Club."
        },
        {
            q: "Is the final match best of 3 or best of 5?",
            a: "The final match is played as best of 3."
        },
        {
            q: "Is there an entry fee?",
            a: "Yes, the entry fee is 200 USD or 10,000 EGP."
        },
        {
            q: "When do buses leave?",
            a: "Buses will depart daily from participating clubs in the morning and return after the last match. Exact times will be announced before the tournament."
        },
        {
            q: "What about food options?",
            a: "At El-Gezira and Federation Courts, the main restaurant is highly recommended and located right next to the courts. At Shooting Club, La Poire (just in front of the courts) and Bon Appetit are popular choices. For Heliopolis and El-Zohor Club, details will be shared soon."
        },
        {
            q: "What’s the weather like during the tournament?",
            a: "It will be sunny and hot. We recommend wearing light clothing, staying hydrated, and using sunblock. Hats and sunglasses are also a good idea!"
        },
        {
            q: "Who can I contact for urgent help?",
            a: "Please reach out to the Tournament Director or Head Referee listed above in the contact section."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="help-page">
            <h1>Need Help? 📞</h1>

            {/* Contacts Section */}
            <div className="contacts">
                <h2>Important Contacts</h2>
                <div className="contact-list">
                    {contacts.map((c, index) => (
                        <div key={index} className="contact-card">
                            <span>{c.name}</span>
                            <a href={`tel:${c.phone}`} className="call-btn">
                                Call?
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faqs">
                <h2>Frequently Asked Questions</h2>
                {faqs.map((item, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {item.q}
                        </button>
                        {openIndex === index && (
                            <div className="faq-answer">{item.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
