import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./card.css";

function Card({ image, githubLink, liveDemoLink, title }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        {/* Front Side (Image and Title) */}
        <div className="card-front">
          <img src={image} alt="Project" className="card-image" />
          <p className="card-title">{title}</p>
        </div>

        {/* Back Side (Icons) - Animated Overlay */}
        <motion.div
          className="card-back"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="icon-group">
            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                <span>Repository</span>
              </a>
            ) : (
              <div className="icon-button disabled">
                <FaGithub />
                <span>No Repo</span>
              </div>
            )}

            {liveDemoLink ? (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            ) : (
              <div className="icon-button disabled">
                <FaExternalLinkAlt />
                <span>No Demo</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;