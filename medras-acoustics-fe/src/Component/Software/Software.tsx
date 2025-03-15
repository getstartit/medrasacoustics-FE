import React from "react";

const softwareSections = [
  {
    title: "AFMG",
    image: "/images/acoustic-1.jpeg",
    content: "AFMG provides cutting-edge acoustic simulation and measurement software, helping engineers design better spaces with soundproofing and clarity.",
    imageLeft: true,
  },
  {
    title: "SOUND FLOW",
    image: "/images/acoustic-1.jpeg",
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

export const Software: React.FC = () => {
  return (
    <div className="software-container">
      {softwareSections.map((section, index) => (
        <div key={index} className={`software-section ${section.imageLeft ? "left" : "right"}`}>
          <div className="software-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="software-text">
            <h2>{section.title}</h2>
            <div className="underline"></div>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

