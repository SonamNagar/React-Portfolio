import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <section className="contact-container">
        <div className="contact-leftbox">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:sonamnagar115@gmail.com">sonamnagar115@gmail.com</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+917067414199">+91 7067414199</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Indore, Madhya Pradesh, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer class="footer">
  <div class="footer-content">
    <h2 class="footer-name">Sonam Nagar</h2>

       <p class="footer-role">
      Frontend & WordPress Developer focused on building clean and responsive web interfaces.
    </p>

    <ul class="footer-links">
       <li><a href="#asideo">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#Skills">Skills</a></li>
          
    </ul>

    <p class="footer-copy">
      © 2026 Sonam Nagar — Crafted for modern web experiences.
    </p>
  </div>
</footer>
    </>
  );
};

export default Contact;
