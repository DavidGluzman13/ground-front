// import { Link } from "react-router-dom";
import "./HomePage.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../../components/AnimatedTextCharacter/AnimatedTextCharacter";

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
          <motion.div
            className="hero"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.25 }}
          >
            {/* <h1 className="hero__header">
              Ground yourself, find balance within
            </h1> */}
            <AnimatedTextCharacter text="Ground yourself, find balance within" />
            {/* <img className="hero__image" src={desert} alt="desert"/> */}
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="expandButton"
            className={isExpanded ? "expanded" : ""}
            onClick={toggleTextBox}
          >
            {isExpanded ? "Close back" : "What is it about"}
          </motion.button>
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


// Get to do list:
// 1. Restart the entire process only with typescript
// 2. Add a new page for the user to see their entries
// 3. Add a new page for the user to see their profile
// 4. Add a new page for the user to see their settings
  // 4.1 Set up a functionality where the user is able to give permission to the therpist as a viewer to see their entries
// 5. Add a new page for the user to see their stats
// 6. Add a new page for the user to see their calendar
// 7. Add a new page for the user to see their journal
// 8. Add a new page for the user to see their mood
// 9. Add a new page for the user to see their goals
// 10. Add a new page for the user to see their achievements
// 11. Add a new oage for the user to communitcate with thier therpist