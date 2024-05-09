import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import Icon from "../assets/student.png";
import PropTypes from "prop-types";

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.func.isRequired,
};

export default function Header({ changeTheme, currentTheme }) {
  return (
    <header>
      <div className="titles">
        <a href="/">
          <img src={Icon} />
          <h2>Maycon Vieira</h2>
        </a>
      </div>
      <div>
        <ul className="links">
          <li>
            <a href="#features">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#launch">Projetos</a>
          </li>
          <li>
            <a href="#signup">Cursos</a>
          </li>

          <li>
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
