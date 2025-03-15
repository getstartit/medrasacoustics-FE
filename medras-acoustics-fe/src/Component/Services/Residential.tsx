import { useState } from "react";

const faqs = [
    { question: "What residential services do you offer?", answer: "We offer home acoustics, soundproofing, and AV installations." },
    { question: "Do you provide home theater setup?", answer: "Yes, we specialize in custom home theater designs and installations." },
    { question: "Can I get a consultation?", answer: "Absolutely! We provide in-home consultations to assess your needs." },
];

export const Residential = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [popupContent, setPopupContent] = useState<{ title: string; image: string; description: string } | null>(null);

    const sections = [
        { title: "Home Cinemas", image: "/images/acoustic-1.jpeg", description: "Detailed information about Home Cinemas." },
        { title: "Home Entertainment", image: "/images/acoustic-1.jpeg", description: "Detailed information about Home Entertainment." }
    ];

    return (
        <>
          <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/contact.jpg`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>
        <div className="residential-container">
            {/* Residential Services Section */}
            <div className="service-section">
                <div className="service-content">
                    <h2>Residential Services</h2>
                    <div className="underline"></div>
                    <p>We offer top-quality residential acoustic solutions, soundproofing, and home theater installations to enhance your home experience.</p>
                </div>
                <div className="service-image">
                    <img src="/images/acoustic-1.jpeg" alt="Residential Service" />
                </div>
            </div>


            <div className="we-are-in-container">
                <h2>We Are In</h2>
                <div className="underline"></div>
                <div className="we-are-in-grid">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="we-are-in-item"
                            onClick={() => setPopupContent(section)}
                        >
                            <img src={section.image} alt={section.title} />
                            <div className="overlay">
                                <h3>{section.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {popupContent && (
                    <div className="popup-overlay" onClick={() => setPopupContent(null)}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-btn" onClick={() => setPopupContent(null)}>&times;</span>
                            <div className="popup-inner">
                                <img src={popupContent.image} alt={popupContent.title} className="popup-image" />
                                <div className="popup-text">
                                    <h3>{popupContent.title}</h3>
                                    <p>{popupContent.description}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <h2>FAQ's</h2>
                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion-item">
                            <button className={`accordion-title ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span>{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && <div className="accordion-content">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};
