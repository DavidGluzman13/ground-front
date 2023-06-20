import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.scss";
import nav from "../../assets/icons/global-navigation-bar.svg";
import cactus from "../../assets/icons/cactus.png";

function Menu() {
  const [isNav, setIsNav] = useState(false);
  const [selectedNav, setSelectedNav] = useState("");
  // Navigation link handlers
  const handleToggle = () => {
    setIsNav(!isNav);
  };

  const handleNavClick = (option) => {
    setSelectedNav(option);
    setIsNav(false);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={handleToggle}>
        <img src={nav} />
        <h3>Menu</h3>
      </button>
      {isNav && (
        <ul className="dropdown-options">
          <li onClick={() => handleNavClick("Option 1")}>
            <img src={cactus} alt="small-cactus" />
            <Link className="dropdown-options__link" to="/features/:id/log">
              Emotion Log
            </Link>
          </li>
          <li onClick={() => handleNavClick("Option 2")}>
            <img src={cactus} alt="small-cactus" />
            <Link className="dropdown-options__link" to="/features/:id/insight">
              Insight
            </Link>
          </li>
          <li onClick={() => handleNavClick("Option 3")}>
            <img src={cactus} alt="small-cactus" />
            <Link className="dropdown-options__link" to="/">
              Explore More
            </Link>
          </li>
        </ul>
      )}
      {selectedNav && (
        <p className="selected-option">Selected option: {selectedNav}</p>
      )}
    </div>
  );
}

export default Menu;
