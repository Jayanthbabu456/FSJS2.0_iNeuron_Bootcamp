import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="head">
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/About">
          <li>ABOUT</li>
        </Link>
        <Link to="/Contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
