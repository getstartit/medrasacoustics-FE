import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
    const navigate = useNavigate();
    const [popupContent, setPopupContent] = useState(null);

    const softwareSections = [
        { title: "AFMG", image: "/images/acoustic-1.jpeg" },
        { title: "SOUND FLOW", image: "/images/acoustic-1.jpeg" },
        { title: "REFLEX", image: "/images/acoustic-1.jpeg" },
        { title: "INSUL", image: "/images/acoustic-1.jpeg" },
        { title: "SYSTUNE", image: "/images/acoustic-1.jpeg" },
    ];

    const serviceSections = [
        { title: "Music Studios", image: "/images/acoustic-1.jpeg", path: "/professional" },
        { title: "Film Mix Stages", image: "/images/acoustic-1.jpeg", path: "/professional" },
        { title: "Home Cinemas", image: "/images/acoustic-1.jpeg", path: "/residential" },
        { title: "Home Entertainment", image: "/images/acoustic-1.jpeg", path: "/residential" }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="home-section">
                <img src="/images/contact.jpg" alt="Contact" className="home-image" />
                <div className="home-content">
                    <h1>Get in Touch</h1>
                    <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
                </div>
            </div>

            {/* About Us Section */}
            <section className="home-about">
                <div className="home-about-image">
                    <img src="/images/acoustic-1.jpeg" alt="About Us" />
                </div>
                <div className="home-about-text">
                    <h2>ABOUT US</h2>
                    <p>We are a passionate team dedicated to delivering high-quality services.</p>
                </div>
            </section>

            {/* Software Section */}
            <section className="home-software">
                <h2>SOFTWARE</h2>
                <div className="home-grid">
                    {softwareSections.map((section, index) => (
                        <div key={index} className="home-card" onClick={() => navigate("/software")}> 
                            <img src={section.image} alt={section.title} className="home-card-image" />
                            <div className="home-card-overlay">
                                <h3>{section.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="home-service-section">
                <h2>SERVICES</h2>
                <div className="home-grid">
                    {serviceSections.map((service, index) => (
                        <div key={index} className="home-card" onClick={() => navigate(service.path)}>
                            <img src={service.image} alt={service.title} className="home-card-image" />
                            <div className="home-card-overlay">
                                <h3>{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};