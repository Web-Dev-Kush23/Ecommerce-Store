import React from "react";
import "./Hero.css";
// import handicon from "../../Assets/hand-icon.png";
import arrowicon from "../../Assets/arrow.png";
import hero from "../../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS TODAY</h2>

        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrowicon} width="30px" height="30px" alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} height="500px" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
