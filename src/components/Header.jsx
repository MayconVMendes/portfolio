import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import PropTypes from "prop-types";

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.func.isRequired,
};

export default function Header({ changeTheme, currentTheme }) {
  return (
    <nav>
      <div className="brand-container">
        <div className="toggle-container">
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div>
        <ul className="links">
          <li>
            <a href="#features">Opções</a>
          </li>
          <li>
            <a href="#about">Opções</a>
          </li>
          <li>
            <a href="#launch">Opções</a>
          </li>
          <li>
            <a href="#signup">Opções</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
