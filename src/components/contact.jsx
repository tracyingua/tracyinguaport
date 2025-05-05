import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../assets/styles/contact.css';

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/tracy-ingua-b87ba7360/',
      color: '#0A66C2'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/tracyanne.ello',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: '"https://www.instagram.com/tracy_ingua/',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tracyingua@gmail.com',
      color: '#D44638'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="contact-content"
      >
        <h1 className="contact-title">Contact</h1>
        
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Barangay Guiwan, Zamboanga City, Philippines</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>tracyingua@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>(+63)960 668 1281</p>
          </div>
        </div>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              style={{ backgroundColor: social.color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
            </motion.a>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default ContactPage;