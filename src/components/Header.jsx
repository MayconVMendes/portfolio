import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Icon from "../assets/student.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

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
        <Menu
          right
          width="300px"
          customBurgerIcon={<GiHamburgerMenu />}
          customCrossIcon={<IoClose />}
        >
          <Link to="/">Inicio</Link>
          <Link to="/">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
