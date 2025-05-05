import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/works.css";
import Card from "./re-usableComp/card";

const projects = [
  {
    id: 1,
    title: "Barangay Information System (BIS)",
    image: "brgy.png",
    githubLink: "",
    liveDemoLink: "https://delanajd.pythonanywhere.com/",
    description: "",
  },
  {
    id: 2,
    title: "RNR TAPSILOG",
    image: "tapsilog.png",
    githubLink: "",
    liveDemoLink: "https://rnr.free.nf/",
    description: "",
  },
  {
    id: 3,
    title: "Pokemon Battle",
    image: "poke.png",
    githubLink: "",
    liveDemoLink: "https://subtle-lolly-209300.netlify.app/",
    description: "",
  },
];

function Works() {
  return (
    <motion.section className="works-section"
    initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
      <h1 className="contact-title">My Works</h1>
      
      <div
        className="works-container"
        
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Works;
