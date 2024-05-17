import MyPhoto from "../assets/my.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="welcome">
      <div className="myPerson">
        <div className="animation">
          <div className="myPhoto">
            <img src={MyPhoto} alt="Maycon Vieira Mendes" />
          </div>
          <div className="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                M. V.
              </text>
            </svg>
          </div>
        </div>
        <div className="informations">
          <p className="hellou">Bem vindo</p>
          <p className="name">
            Eu sou o <strong>Maycon Vieira Mendes</strong>
          </p>
          <p className="area">Desenvolvedor, design, analista e engenheiro</p>
          <div className="links">
            <Link to="/contato">Entrar em contato</Link>
            <Link>Portifolio</Link>
          </div>
        </div>
      </div>
      <div className="iAm">
        <div className="boxInfo">
          <p className="who">Quem eu sou?</p>
          <p className="mv">
            Meu nome é <strong>Maycon Vieira Mendes</strong>, sou desenvolvedor,
            design, analista e engenheiro
          </p>
          <p className="text">
            Muito prazer! Sou formado em Análise e Desenvolvimento de Sistemas
            (ADS), amo aquilo que escolhi fazer, transformar sonhos em realidade
            através da técnologia e do desenvolvimento. <br />
            Já atuei como Dev front-end, back-end e full stack.
          </p>
        </div>
        <div className="boxImg"></div>
      </div>
      <div className="qualifications">
        <div className="boxImg"></div>
        <div className="boxInfo">
          <p className="who">Minhas formações acadêmicas</p>
          <p className="mv">
            Meu nome é <strong>Maycon Vieira Mendes</strong>, sou desenvolvedor,
            design, analista e engenheiro
          </p>
          <p className="text">test</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
