import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="foo">
        <div className="info">
          <p>Maycon Viera Mendes © Copyright {year}.</p>
          <div className="boxBottom">
            <p>
              Desenvolvido por <Link to="/">Maycon Vieira</Link>
            </p>
          </div>
        </div>
        <div className="icons">
          <FaLinkedinIn />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
