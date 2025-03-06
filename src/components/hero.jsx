import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../assets/styles/hero.css";
import profile from "../assets/images/tracy.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hi, there!</h3>
        <h1><span>TRACY</span> IS HERE TO BE YOUR UI/UX DESIGNER</h1>
        <p>I am here ready to help you in making creative digital designs</p>
      
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
