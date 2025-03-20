import React from "react";

const softwareSections = [
    {
      title: "AFMG",
      image: "/images/afmg.png",
      content: "AFMG provides cutting-edge acoustic simulation and measurement software, helping engineers design better spaces with soundproofing and clarity.",
      imageLeft: true,
    },
    {
      title: "SOUND FLOW",
      image: "/images/sound-flow.jfif",
      content: "Sound Flow software helps in simulating the behavior of porous materials for acoustics, widely used for noise control and sound absorption research.",
      imageLeft: false,
    },
    {
      title: "REFLEX",
      image: "/images/acoustic-1.jpeg",
      content: "REFLEX specializes in simulating sound reflections in architectural spaces, improving sound distribution and speech intelligibility.",
      imageLeft: true,
    },
    {
      title: "INSUL",
      image: "/images/acoustic-1.jpeg",
      content: "INSUL predicts the transmission loss of walls, floors, and ceilings, helping in designing soundproof and noise-isolated environments.",
      imageLeft: false,
    },
    {
      title: "SYSTUNE",
      image: "/images/acoustic-1.jpeg",
      content: "SYSTUNE is a powerful real-time sound system tuning and measurement software for optimizing performance in large venues and auditoriums.",
      imageLeft: true,
    },
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
                <h1>Madras Acoustics – Crafting Sound, Perfecting Silence</h1>
                </div>
            </div>


        <div className="home-container  mt-10 px-6 md:px-20">

            <div className="about-section">
                <div className="about-image">
                    <img src="/images/home-page-2.jpg" alt="About Us" />
                </div>
                <div className="about-text">
                    <h2>ABOUT US</h2>
                    <p>
                    <h1>Madras Acoustics </h1> 
                    <h3>Music | Space | Design</h3> <br/>

                    At Madras Acoustics, we craft immersive soundscapes and exceptional audiovisual environments. Since 2020, 
                    our expertise has shaped over 100 world-class projects — from professional music studios and concert auditoriums to 
                    luxury hotels, vibrant nightclubs, and elite home cinemas.

                    Our globally experienced team combines creativity and technical precision to deliver customized installations 
                    that meet the highest standards. By embracing emerging technologies and design innovations, we ensure every 
                    project offers an enhanced and memorable experience.<br/>
                    <b> "Exceptional sound design is born from expertise, innovation, and a deep understanding of acoustic principles."</b><br/><br/>
                    <h3>Services by Madras Acoustics</h3> 

                    <h4>Professional</h4> Music Recording Studio / Film Mix Stage

                    <h4>Residential</h4> Home Theatre / Home Cinema / Party Area / Hospital ICU's 

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


