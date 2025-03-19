import React from "react";
const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
  { name: "Jane Smith", role: "CTO", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
  { name: "Michael Brown", role: "Designer", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
  { name: "Emily Davis", role: "Developer", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company."},
  { name: "David Wilson", role: "Marketing", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company."},
  { name: "Sophia Lee", role: "HR Manager", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
  { name: "Chris Taylor", role: "Sales", image:"/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
  { name: "Anna Johnson", role: "Support", image: "/images/acoustic-1.jpeg",about: "John is the CEO and visionary leader of our company." },
];

export const Teams: React.FC = () => {

  return (
    <>
    <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/contact.jpg`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>
    <div className="teams-container">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-image">
          <img src="/images/acoustic-1.jpeg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <div className="underline"></div>
          <p>
           Madras Acoustics - craft immersive soundscapes and exceptional audiovisual environments. Since 2020, 
                    our expertise has shaped over 100 world-class projects — from professional music studios and concert auditoriums to 
                    luxury hotels, vibrant nightclubs, and elite home cinemas.

                    Our globally experienced team combines creativity and technical precision to deliver customized installations 
                    that meet the highest standards. By embracing emerging technologies and design innovations, we ensure every 
                    project offers an enhanced and memorable experience.<br/><br/>
                    <b> "Exceptional sound design is born from expertise, innovation, and a deep understanding of acoustic principles."</b><br/><br/>
            
          </p>
        </div>
      </div>

     {/* Our Team Section */}
     <div className="team-section">
        <h2>OUR TEAM</h2>
        <div className="underline"></div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <img src={member.image} alt={member.name} className="team-img" />
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back">
                  <h5>{member.name}</h5>
                  <p className="flip-role">{member.role}</p>
                  <p className="flip-about">{member.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};





