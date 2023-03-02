import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Maycon Mendes
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <div className={isExpanded ? "container change" : "container"}>
          <div class="bar1"/>
          <div class="bar2"/>
          <div class="bar3"/>
        </div>
      </button>
      <div
        className={
          isExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Pagina inicial</a>
          </li>
          <li>
            <a href="/">Sobre mim</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
