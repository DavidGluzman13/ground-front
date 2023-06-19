import "./Header.scss";
import logo from "../../assets/logo/logo";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <Link to="/">
          <img className="navigation__logo" src={logo} alt="ground-logo" />
        </Link>
        <div className="navigation__buttons">
          <NavLink className="navigation__buttons--navlink" to="/">
            <h3 className="navigation__link">Home</h3>
          </NavLink>
          <NavLink className="navigation__buttons--navlink" to="/features">
            <h3 className="navigation__link">Features</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
