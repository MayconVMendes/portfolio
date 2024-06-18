import MyPhoto from "../assets/my.jpg";
import { Link } from "react-router-dom";
import JS from "../assets/home/js.png";
import TS from "../assets/home/ts.png";
import React from "../assets/home/react.png";
import MG from "../assets/home/magento.png";
import ND from "../assets/home/node.png";
import Vue from "../assets/home/vue.png";
import Php from "../assets/home/php.png";
import Bis2Bis from "../assets/home/bis2bis.png";
import Webjump from "../assets/home/webjump.svg";
import Edubrahub from "../assets/home/edubrahub.jpg";
import Sass from "../assets/home/sass.svg";
import Less from "../assets/home/less.svg";
import Tailwindcss from "../assets/home/tailwindcss.svg";
import Styledcomponents from "../assets/home/styledcomponents.svg";
import Java from "../assets/home/java.svg";
import Kotlin from "../assets/home/kotlin.svg";
import Graph from "../assets/home/graph.svg";
import VSC from "../assets/home/vsc.svg";
import Postman from "../assets/home/postman.svg";
import Mysqlwork from "../assets/home/mysqlwork.svg";
import Androidstudio from "../assets/home/androidstudio.svg";
import Expo from "../assets/home/expo.svg";
import Figma from "../assets/home/figma.svg";
import Canva from "../assets/home/canva.svg";
import Netbeans from "../assets/home/netbeans.svg";
import CorelDRAW from "../assets/home/coreldraw.svg";
import MyCard from "../components/MyCard";
import CardTooltip from "../components/CardTooltip";
import MyCardExp from "../components/MyCardExp";

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
      <div className="tools">
        <h2 className="who">Algumas ferramentas que eu utlizo</h2>
        <div className="imgs">
          <CardTooltip
            image={VSC}
            alt="Icone do Visual Studio Code"
            tooltip="Visual Studio Code"
          />
          <CardTooltip
            image={Postman}
            alt="Icone do Postman"
            tooltip="Postman"
          />
          <CardTooltip
            image={Mysqlwork}
            alt="Icone do MySQL Workbench"
            tooltip="MySQL Workbench"
          />
          <CardTooltip
            image={Androidstudio}
            alt="Icone do Android Studio"
            tooltip="Android Studio"
          />
          <CardTooltip image={Expo} alt="Icone do Expo" tooltip="Expo" />
          <CardTooltip image={Figma} alt="Icone do Figma" tooltip="Figma" />
          <CardTooltip image={Canva} alt="Icone do Canva" tooltip="Canva" />
          <CardTooltip
            image={Netbeans}
            alt="Icone do Netbeans"
            tooltip="Netbeans"
          />
          <CardTooltip
            image={CorelDRAW}
            alt="Icone do CorelDRAW"
            classImg="corel"
            tooltip="CorelDRAW"
          />
        </div>
      </div>
      <div className="technology">
        <h2 className="who">Algumas técnologias que eu trabalho</h2>
        <div className="imgs">
          <CardTooltip
            image={JS}
            alt="Icone do JavaScript"
            tooltip="JavaScript"
          />
          <CardTooltip
            image={TS}
            alt="Icone do TypeScript"
            tooltip="TypeScript"
          />
          <CardTooltip
            image={React}
            alt="Icone do React"
            classImg="react"
            tooltip="React, React Native"
          />
          <CardTooltip
            image={MG}
            alt="Icone do Magento"
            classImg="magento"
            tooltip="Magento 1.x, 2.x"
          />
          <CardTooltip image={Vue} alt="Icone do Vue" tooltip="Vue" />
          <CardTooltip image={ND} alt="Icone do Node" tooltip="Node" />
          <CardTooltip image={Php} alt="Icone do PHP" tooltip="PHP" />
          <CardTooltip image={Sass} alt="Icone do Sass" tooltip="Sass" />
          <CardTooltip image={Less} alt="Icone do Less" tooltip="Less" />
          <CardTooltip
            image={Tailwindcss}
            alt="Icone do Tailwind CSS"
            tooltip="Tailwind CSS"
          />
          <CardTooltip
            image={Styledcomponents}
            alt="Icone do Styled components"
            tooltip="Styled components"
          />
          <CardTooltip image={Java} alt="Icone do Java" tooltip="Java" />
          <CardTooltip image={Kotlin} alt="Icone do Kotlin" tooltip="Kotlin" />
          <CardTooltip image={Graph} alt="Icone do GraphQL" tooltip="GraphQL" />
        </div>
      </div>
      <div className="formation">
        <h2>Minhas formações</h2>
        <div className="infos">
          <MyCard
            link="https://www.fatecpg.edu.br/"
            title="Ensino Superior"
            name="Análise e Desenvolvimento de Sistemas"
            data="2020 - 2023 (3 anos)"
            institutes="Fatec de Praia Grande"
          />

          <MyCard
            link="https://www.etecpg.com.br/"
            title="Ensino Técnico"
            name="Análise e Desenvolvimento de Sistemas"
            data="2019 - 2020 (1 ano e 6 meses)"
            institutes="Etec de Praia Grande"
          />
        </div>
      </div>
      <div className="experience">
        <h2>Minhas experiências </h2>

        <div className="infos">
          <MyCardExp
            link="https://www.bis2bis.com.br/"
            image={Bis2Bis}
            title="Bis2Bis"
            office="Desenvolvedor web front end"
            period="abr de 2023 - abr de 2024"
            modality="Remota"
            classImg="bis2bis"
          />
          <MyCardExp
            link="https://webjump.ai/"
            title="Webjump"
            image={Webjump}
            office="Desenvolvedor web front end"
            period="ago de 2022 - fev de 2023"
            modality="Remota"
            office2="Estágio Desenvolvedor web front end"
            period2="mar de 2022 - ago de 2022"
            modality2="Remota"
            classImg="wbj"
          />
          <MyCardExp
            link="https://www.linkedin.com/company/edubrahub/"
            title="Edubrahub"
            image={Edubrahub}
            office="Estágio Desenvolvedor full stack"
            period="out de 2021 - jan de 2022"
            modality="Remota"
            classImg="edu"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
