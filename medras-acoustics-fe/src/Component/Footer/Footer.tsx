export const Footer = () => {
    return (
      <footer className="footer">
        {/* Left - Logo & Name */}
        <div className="footer-left">
          <img src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`} alt="Logo" className="footer-logo" />
          <span className="footer-company-name">Medras Acoustics</span>
        </div>
  
        {/* Center - Navigation Links */}
        <ul className="footer-nav">
          {[
            { path: "/", label: "Home" },
            { path: "/acoustics", label: "Acoustics" },
            { path: "/services", label: "Services" },
            { path: "/software", label: "Software" },
            { path: "/team", label: "Team" },
            { path: "/contact-us", label: "Contact Us" },
          ].map(({ path, label }) => (
            <li key={path}>
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>
  
        {/* Right - Social Media Links */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+1234567890">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-map-marker-alt"></i>
          </a>
        </div>
      </footer>
    );
  };
  