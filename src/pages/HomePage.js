// import { Link } from "react-router-dom";
import "./HomePage.scss";
import { useState } from "react";
import cactus from "../assets/images/download.jpeg";

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTextBox = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="intro-box">
          <div className="hero">
            <h1 className="hero__header">Ground yourself, find balance within</h1>
            <img className="hero__image" src={cactus} alt="desert-cactus"/>
          </div>
          <button
            id="expandButton"
            className={isExpanded ? "expanded" : ""}
            onClick={toggleTextBox}
          >
            {isExpanded ? "Close back" : "What is it about"}
          </button>
          <div>
            {isExpanded && (
              <div>
                <p className="intro-box__text">
                  Discover a sanctuary amidst the chaos with Ground, your
                  personal haven for tranquility and self-reflection. In a world
                  brimming with constant stimulation, we understand the
                  importance of grounding oneself when overwhelmed. Our
                  elegantly designed platform empowers you to log your innermost
                  thoughts, emotions, and daily experiences, providing a mindful
                  journey towards inner peace. Seamlessly blending technology
                  with mindfulness, Ground invites you to unlock the power of
                  self-awareness and find solace in the beauty of simplicity.
                  Immerse yourself in a serene digital oasis and embark on a
                  transformative path of emotional well-being.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="home__slogan">
        <h1>Reflect Resonate and Thrive</h1>
      </div>
    </div>
  );
}

export default HomePage;
