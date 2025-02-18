import '../assets/styles/hero.css'
import tracy from '../assets/images/tracy pic.png'
import Button from './button-me';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate ();
    return (
      <div className="hero">
        <div className="me">
          <h1 className="kahitano">Hello I'm</h1>
          <h2 className="pangalawa">Tracy Anne Ingua</h2>
          <h3 className="pangatlo">
          I craft intuitive and engaging digital experiences that blend aesthetics with functionality. With a keen eye for design and a user-first approach, I create seamless interfaces that enhance usability and elevate brands. Let's bring ideas to life with thoughtful design!
          </h3>
          <button
              title="About Me"
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
        </div>
        <div className="imageContainer">
          <img src={tracy} alt="Tracy Anne Ingua" />
        </div>
      </div>
    );
  };
export default Hero