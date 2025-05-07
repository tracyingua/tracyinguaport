import { motion } from "framer-motion";
import { useState } from "react";
import "../assets/styles/certificates.css";


const certificatesData = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "April 2025",
    imageUrl: "/certificates/cert 300 hours.png"
  },
  {
    id: 2,
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn",
    date: "April 2025",
    imageUrl: "/certificates/cert 1.png"
  },
  {
    id: 3,
    title: "Advance C++ Course Online",
    issuer: "Simplilearn",
    date: "April 2025",
    imageUrl: "/certificates/cert 2.png"
  },
  {
    id: 4,
    title: "Introduction to Front-end Development",
    issuer: "Simplilearn",
    date: "May 2025",
    imageUrl: "/certificates/cert 3.png"
  },
  // Add more certificates as needed
];

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.div 
      className="certificates-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1>My Certificates</h1>
      </motion.header>

      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="certificate-image">
              <img src={cert.imageUrl} alt={cert.title} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>Issued by: {cert.issuer}</p>
              <span>{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCert && (
        <motion.div 
          className="certificate-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-button"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img src={selectedCert.imageUrl} alt={selectedCert.title} />
            <div className="modal-details">
              <h2>{selectedCert.title}</h2>
              <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
              <p><strong>Date:</strong> {selectedCert.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificate;