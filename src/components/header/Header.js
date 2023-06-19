import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <Link className="navigation__homebutton" to="/">
          <img className="navigation__homebutton-img" src={logo} alt="ground-logo" />
        </Link>
        <div className="navigation__buttons">
          <NavLink className="navlink" to="/">
            <h3 className="link">Home</h3>
          </NavLink>
          <NavLink className="navlink" to="/features">
            <h3 className="link">Features</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
