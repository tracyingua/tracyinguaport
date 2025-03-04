import "../assets/styles/about.css"
import img from "./../assets/images/type type.jpg"

export default function navigation() {
    return (
        <div className="container">
            <div className="upperContainer">
                <h1>About Me</h1>
            </div>
            <div className="lowerContainer">
                <div className="imageContent">
                    <img src= {img} alt="" />
                </div>
                <p className="aboutMe">Hi there! I’m Tracy Anne, a passionate Graphic Designer, UI/UX Designer, and Photographer dedicated to crafting intuitive and engaging digital experiences. With a keen eye for aesthetics and a deep understanding of user needs, I specialize in creating seamless interfaces that not only enhance usability but also bring brands to life through thoughtful design.

My journey in the world of design is fueled by creativity, attention to detail, and a constant drive to explore new ideas. Whether it’s designing user-centric digital solutions, developing unique branding, or capturing life’s special moments through photography, I strive to deliver work that resonates and inspires.

I believe that great design goes beyond visuals—it tells a story, evokes emotions, and solves problems. Let’s work together to transform your vision into captivating designs and unforgettable experiences!</p>

            </div>
        </div>

    );
  }