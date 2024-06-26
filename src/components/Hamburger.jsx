import { GiHamburgerMenu } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function Hamburger({ currentTheme, changeTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Menu
        right
        width="300px"
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={<GiHamburgerMenu />}
        customCrossIcon={<IoClose />}
      >
        <Link to="/" onClick={closeMenu}>
          Inicio
        </Link>
        <Link to="/" onClick={closeMenu}>
          Sobre
        </Link>
        <Link to="/projetos" onClick={closeMenu}>
          Projetos
        </Link>
        <Link to="/curso" onClick={closeMenu}>
          Cursos
        </Link>
        <Link to="/contato" onClick={closeMenu}>
          Contato
        </Link>
        <div
          className="mode"
          onClick={() => {
            changeTheme();
            closeMenu();
          }}
        >
          {currentTheme === "dark" ? (
            <ImSun className="light" />
          ) : (
            <BsFillMoonFill className="dark" />
          )}
        </div>
      </Menu>
    </>
  );
}

Hamburger.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Hamburger;
