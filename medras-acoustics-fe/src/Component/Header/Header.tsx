import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleLinkClick :any= (path:any) => {
      navigate(path);
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <div className="logo-container" onClick={() => navigate("/")}> 
            {/* <img src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`} alt="logo" /> */}
            <div className="logo-text-wrapper">
              <span className="logo-text">Medras Acoustics</span>
            </div>
          </div>
        </div>
  
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
  
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {[  
            { path: "/", label: "Home" },
            { path: "/acoustics", label: "Acoustics" },
            { path: "/services", label: "Services" },
            { path: "/software", label: "Software" },
            { path: "/team", label: "Team" },
            { path: "/contact-us", label: "Contact Us" },
          ].map(({ path, label }) => (
            <li key={path}>
              <a
                className={location.pathname === path ? "active" : ""}
                onClick={() => handleLinkClick(path)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };