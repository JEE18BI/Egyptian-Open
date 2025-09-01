import { useState } from "react";
import "./Help.css";

export default function Help() {
    const contacts = [
        { name: "Tournament Director", phone: "0100000000", icon: "👑" },
        { name: "Head Referee", phone: "0111111111", icon: "⚖️" },
        { name: "Emergency Contact", phone: "0122222222", icon: "🚑" },
    ];

    const faqs = [
        {
            q: "What courts are the tournament played on?",
            a: "The Egyptian Open is played across multiple prestigious clubs: El-Gezira Club, Federation Courts, Heliopolis Club, Shooting Club, and El-Zohor Club.",
            icon: "🎾"
        },
        {
            q: "Is the final match best of 3 or best of 5?",
            a: "The final match is played as best of 3.",
            icon: "🏆"
        },
        {
            q: "Is there an entry fee?",
            a: "Yes, the entry fee is 200 USD or 10,000 EGP.",
            icon: "💰"
        },
        {
            q: "When do buses leave?",
            a: "Buses will depart daily from participating clubs in the morning and return after the last match. Exact times will be announced before the tournament.",
            icon: "🚌"
        },
        {
            q: "What about food options?",
            a: "At El-Gezira and Federation Courts, the main restaurant is highly recommended and located right next to the courts. At Shooting Club, La Poire (just in front of the courts) and Bon Appetit are popular choices. For Heliopolis and El-Zohor Club, details will be shared soon.",
            icon: "🍽️"
        },
        {
            q: "What's the weather like during the tournament?",
            a: "It will be sunny and hot. We recommend wearing light clothing, staying hydrated, and using sunblock. Hats and sunglasses are also a good idea!",
            icon: "☀️"
        },
        {
            q: "Who can I contact for urgent help?",
            a: "Please reach out to the Tournament Director or Head Referee listed above in the contact section.",
            icon: "🆘"
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="help-page">
            <div className="help-header">
                <div className="header-content">
                    <h1>Need Help? <span className="header-emoji">📞</span></h1>
                    <div className="decorative-line"></div>
                    <p>We're here to assist you with any questions or concerns about the Egyptian Open Championship</p>
                </div>
            </div>

            {/* Contacts Section */}
            <div className="contacts-section">
                <div className="section-header">
                    <h2>Important Contacts</h2>
                    <p>Reach out to our team for immediate assistance</p>
                </div>

                <div className="contact-cards">
                    {contacts.map((c, index) => (
                        <div key={index} className="contact-card">
                            <div className="card-decoration"></div>
                            <div className="contact-icon">{c.icon}</div>
                            <div className="contact-info">
                                <h3>{c.name}</h3>
                                <p>{c.phone}</p>
                            </div>
                            <a href={`tel:${c.phone}`} className="call-button">
                                <span>Call Now</span>
                                <span className="phone-icon">📞</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about the tournament</p>
                </div>

                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                            <div className="faq-icon">{item.icon}</div>
                            <div className="faq-content">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span>{item.q}</span>
                                    <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
                                </button>
                                <div className="faq-answer">
                                    <div className="answer-content">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="info-section">
                <div className="info-card">
                    <div className="info-icon">ℹ️</div>
                    <div className="info-content">
                        <h3>Need More Help?</h3>
                        <p>If you can't find what you're looking for, don't hesitate to reach out to any tournament official. We're here to make your experience unforgettable!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}