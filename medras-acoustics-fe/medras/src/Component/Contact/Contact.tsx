import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendQuery } from "../../API/contactAPI";


export const Contact = () => {
  const userData: any = { name: "", email: "", message: "", mobileNumber: "", subject: "", address: "" }
  const [formData, setFormData] = useState(userData);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    try {
      const send = await sendQuery(formData);
      if (send?.status == 200) {
        toast.success("Review submitted successfully!", { autoClose: 2000 });
      }
    } catch (error: any) {
      toast.error("Failed to submit review. Please try again.", { autoClose: 2000 });
    } finally {
      // setLoader(false);
    }

  };

  return (
    <div className="contact-page">

      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/contact-us-acoustic.jpg`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
        </div>
      </div>


      <div className="contact-container">

        <div className="contact-info">
          <h2>Our Location</h2>

          {/* Contact Details */}
          <div className="contact-details">
            <p><i className="fas fa-envelope contact-icon"></i><strong>Email:</strong> contact@medrasacoustics.com</p>
            <p><i className="fas fa-phone-alt contact-icon"></i><strong>Phone:</strong> +1 234 567 890</p>
            <p><i className="fas fa-map-marker-alt contact-icon"></i><strong>Address:</strong> 123 Main Street, New York, NY 10001</p>
          </div>

          {/* Social Media Icons Row */}
          <div className="contact-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>


        <div className="query-form">
          <h2 className="text-center">Submit Your Query</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
            <input type="subject" id="subject" name="subject" placeholder="Enter Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" id="message" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <input type="mobileNumber" id="mobileNumber" name="mobileNumber" placeholder="Phone Number" value={formData.mobileNumber} onChange={handleChange} required />
            <input type="address" id="address" name="address" placeholder="City & State" value={formData.address} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};


