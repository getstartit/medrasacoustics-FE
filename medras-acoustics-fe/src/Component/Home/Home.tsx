import React from "react";

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
    { title: "Home Entertainment", image: "/images/acoustic-1.jpeg", path: "/residential" },
];
export const Home = () => {
    return (
        <>
         {/* Hero Section */}
         <div className="home-section">
                <div className="home-overlay">
                    <h1>Madras Acoustics - Experts in Soundproofing</h1>
                </div>
            </div>


        <div className="home-container  mt-10 px-6 md:px-20">

            <div className="about-section">
                <div className="about-image">
                    <img src="/images/acoustic-1.jpeg" alt="About Us" />
                </div>
                <div className="about-text">
                    <h2>ABOUT US</h2>
                    <p>
                        We are a passionate team dedicated to delivering high-quality services.
                        Our goal is to innovate and inspire through technology.
                    </p>
                </div>
            </div>

            <div className="home-software-section">
                <h2 className="home-software-title">Software</h2>
                <div className="home-grid-container">
                    {softwareSections.map((service, index) => (
                        <div key={index} className="home-card">
                            <img src={service.image} alt={service.title} />
                            <div className="home-card-overlay">{service.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className="home-services-section">
                <h2 className="home-section-title">Services</h2>
                <div className="home-grid-container">
                    {serviceSections.map((service, index) => (
                        <div key={index} className="home-card">
                            <img src={service.image} alt={service.title} />
                            <div className="home-card-overlay">{service.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};


