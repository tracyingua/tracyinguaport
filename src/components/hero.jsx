import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../assets/styles/hero.css";
import profile from "../assets/images/tracy.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hi, there!</h3>
        <h1><span>TRACY</span> IS HERE TO BE YOUR UI/UX DESIGNER AND PHOTOGRAPHER</h1>
        <p>Let’s bring your ideas to life with custom digital designs and high-quality visuals that blend creativity with functionality.</p>
      
      </div>
      
      <div className="hero-image">
    
        <div className="social-icons">
          <a href="https://www.facebook.com/tracyanne.ello" className="icon facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/tracy_ingua/" className="icon instagram"><FaInstagram /></a>
          <a href="https://x.com/anne_ingua?t=czEabIXLSo5-IjjV8TVLTQ&s=09" className="icon twitter"><FaTwitter /></a>
        </div>
        
        <img src={profile} alt="Profile" />
      </div>
      
    </section>
  );
};

export default Hero;
