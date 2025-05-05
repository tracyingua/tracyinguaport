import { useEffect, useState } from "react";
import "../assets/styles/about.css";

import profile1 from "../assets/images/5.png";
import profile2 from "../assets/images/7.png";
import profile3 from "../assets/images/8.png";

const AboutMe = () => {
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const images = document.querySelectorAll(".about-img");

    const toggleActive = (event) => {
      const clickedImg = event.target;

      if (activeImg === clickedImg) {
       
        clickedImg.classList.remove("active");
        setActiveImg(null);
      } else {
       
        images.forEach((img) => img.classList.remove("active"));
        clickedImg.classList.add("active");
        setActiveImg(clickedImg);
      }
    };

    images.forEach((img) => img.addEventListener("click", toggleActive));

    return () => {
      images.forEach((img) => img.removeEventListener("click", toggleActive));
    };
  }, [activeImg]);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images">
          <img src={profile1} alt="Tracy 1" className="about-img img1" />
          <img src={profile2} alt="Tracy 2" className="about-img img2" />
          <img src={profile3} alt="Tracy 3" className="about-img img3" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Your Graphic Designer and Photographer passionate about crafting
            compelling visuals and seamless digital experiences. I turn ideas into
            striking designs, stunning photos, and intuitive interfaces. Let’s
            create something amazing together! <br /> <br />I specialize in transforming ideas into striking designs, captivating photography, and user-friendly interfaces that tell a story and leave a lasting impression. With a keen eye for detail and a love for creativity, I bring concepts to life through branding, digital design, and authentic visual storytelling. Whether it’s designing for web or capturing moments behind the lens, I’m driven by the belief that great design is both beautiful and functional. <br /> Let’s create something amazing together — something that connects, inspires, and stands out.
          </p>
          <a href="#portfolio" className="about-buttons">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
