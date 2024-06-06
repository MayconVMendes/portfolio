import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import Icon from "../assets/student.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Header({ changeTheme, currentTheme }) {
  return (
    <header>
      <div className="container">
        <div className="titles">
          <Link to="/">
            <img src={Icon} alt="Icone página principal" />
            <h2>Maycon Vieira</h2>
          </Link>
        </div>
        <div>
          <ul className="links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/">Cursos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
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
      </div>
      <div className="menu">
        <Hamburger currentTheme={currentTheme} changeTheme={changeTheme} />
      </div>
    </header>
  );
}

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default Header;
