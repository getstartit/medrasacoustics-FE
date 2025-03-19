export const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Logo & Navigation */}
      <div className="footer-top">
        {/* Left - Logo & Name */}
        <div className="footer-left">
          {/* <img
            src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`}
            alt="Medras Acoustics Logo"
            className="footer-logo"
          /> */}
          <span className="footer-company-name">Madras Acoustics</span>
        </div>

        {/* Center - Navigation Links */}
        <nav aria-label="Footer Navigation">
          <ul className="footer-nav">
            {[
              { path: "/", label: "Home" },
              { path: "/acoustics", label: "Acoustics" },
              { path: "/software", label: "Software" },
              { path: "/team", label: "Team" },
              { path: "/contact-us", label: "Contact Us" },
            ].map(({ path, label }) => (
              <li key={path}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        
      </div>

      {/* Social Media Links - Centered on a New Line */}
      <div className="footer-social">
        {[
          { href: "https://facebook.com", icon: "fab fa-facebook-f", label: "Facebook" },
          { href: "https://jeromedj@madrasacoustics.com", icon: "fab fa-mail", label: "Gmail" },
          { href: "https://instagram.com", icon: "fab fa-instagram", label: "Instagram" },
          { href: "https://twitter.com", icon: "fab fa-twitter", label: "Twitter" },
          { href: "https://wa.me/918248365067", icon: "fab fa-whatsapp", label: "WhatsApp" },
          { href: "tel:+918248365067", icon: "fas fa-phone", label: "Phone" },
          { href: "https://goo.gl/maps/example", icon: "fas fa-map-marker-alt", label: "Location" },
        ].map(({ href, icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <i className={icon}></i>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Madras Acoustics. All rights reserved.
      </div>
    </footer>
  );
};
