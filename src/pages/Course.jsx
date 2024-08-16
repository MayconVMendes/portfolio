import html from "../assets/course/html.svg";
import css from "../assets/course/css.svg";
import jquery from "../assets/course/jquery.png";
import alura from "../assets/course/alura.jpg";
import scrumstudy from "../assets/course/scrumstudy.jpg";
import cps from "../assets/course/cps.jpg";
import oracle from "../assets/course/oracle.jpg";
import evolutime from "../assets/course/evolutime.jpg";
import alfahelix from "../assets/course/alfahelix.jpg";
import datascience from "../assets/course/datascience.png";
import ai from "../assets/course/ai.png";
import sql from "../assets/course/sql.png";
import react from "../assets/course/react.png";
import magento from "../assets/course/magento.png";
import comunica from "../assets/course/comunica.png";
import linux from "../assets/course/linux.png";
import scrum from "../assets/course/scrum.png";
import informatica from "../assets/course/informatica.png";
import uml from "../assets/course/uml.png";
import ts from "../assets/course/ts.svg";
import js from "../assets/course/js.svg";
import git from "../assets/course/git.svg";
import github from "../assets/course/github.svg";
import photoshop from "../assets/course/photoshop.svg";
import styledcomponents from "../assets/home/styledcomponents.svg";
import CardCourse from "../components/CardCourse";

function Course() {
  return (
    <div className="course">
      <div className="box">
        <h2 className="title">Meus cursos</h2>

        <p>
          Se preferir você pode verificar meu perfil da Alura{" "}
          <a
            href="https://cursos.alura.com.br/user/maycon-mendes1"
            target="_blank"
            rel="noopener noreferrer"
          >
            cliando aqui{" "}
          </a>
          ou se preferir, meu{" "}
          <a
            href="https://cursos.alura.com.br/user/maycon-mendes1/fullCertificate/30b65485099e048ac86c5c14af8b927e"
            target="_blank"
            rel="noopener noreferrer"
          >
            certificado completo da alura.
          </a>{" "}
        </p>
        <div className="cou">
          <CardCourse
            image={datascience}
            title="Fundamentos de Inteligência Artificial"
            icon1={ai}
            institute="Data Science Academy"
            verification="nov. de 2023"
            code="641298f6cff0a382770f3155"
            certificate="/pdfs/certificate-fundamentos-de-inteligencia-artificial-641298f6cff0a382770f3155.pdf"
          />
          <CardCourse
            image={oracle}
            title="Database Programming with SQL"
            icon1={sql}
            institute="Oracle"
            verification="mar. de 2023"
            certificate="/pdfs/clmsCertificate.pdf"
          />
          <CardCourse
            image={alfahelix}
            title="Introdução ao jQuery"
            icon1={jquery}
            institute="Alfahelix"
            verification="out. de 2022"
            code="V 9 S X J 1"
            certificate="/pdfs/jquery.pdf"
          />
          <CardCourse
            image={oracle}
            title="Database Design"
            icon1={sql}
            institute="Oracle"
            verification="set. de 2022"
          />
          <CardCourse
            image={alura}
            title="CSS: dispondo elementos com Flexbox e Grid"
            icon1={css}
            institute="Alura"
            verification="jul. de 2022"
            code="9e502ac6-10e1-4da6-86ff-8923fd7429f3"
            certificate="https://cursos.alura.com.br/certificate/9e502ac6-10e1-4da6-86ff-8923fd7429f3"
          />
          <CardCourse
            image={alura}
            title="Formação HTML e CSS"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="jul. de 2022"
            code="9e502ac6-10e1-4da6-86ff-8923fd7429f3"
            certificate="https://cursos.alura.com.br/degree/certificate/5d3715a1-cfbd-47de-8ebd-c12366d650e8"
          />
          <CardCourse
            image={alura}
            title="HTML e CSS: praticando HTML/CSS"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="jul. de 2022"
            code="53af6656-796d-4eb0-8b90-3e4bee7fd5f0"
            certificate="https://cursos.alura.com.br/certificate/53af6656-796d-4eb0-8b90-3e4bee7fd5f0"
          />
          <CardCourse
            image={alura}
            title="HTML e CSS: responsividade com mobile-first"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="jul. de 2022"
            code="6cb12923-8f6a-4827-a568-788037eed7a4"
            certificate="https://cursos.alura.com.br/certificate/6cb12923-8f6a-4827-a568-788037eed7a4"
          />
          <CardCourse
            image={alura}
            title="React Router: navegação em uma SPA"
            icon1={react}
            institute="Alura"
            verification="jul. de 2022"
            code="ad73f22d-bd37-455d-b3c4-6166f0fd3c5b"
            certificate="https://cursos.alura.com.br/certificate/ad73f22d-bd37-455d-b3c4-6166f0fd3c5b"
          />
          <CardCourse
            image={alura}
            title="React: abstraindo seu CSS com Styled Components"
            icon1={react}
            icon2={styledcomponents}
            institute="Alura"
            verification="jul. de 2022"
            code="5dbfca98-1b87-46f5-a22b-f86b3a97ad1e"
            certificate="https://cursos.alura.com.br/certificate/5dbfca98-1b87-46f5-a22b-f86b3a97ad1e"
          />
          <CardCourse
            image={alura}
            title="Formação TypeScript"
            icon1={ts}
            institute="Alura"
            verification="jun. de 2022"
            code="3708a6f1-e242-46ad-84e3-adc3914b0178"
            certificate="https://cursos.alura.com.br/degree/certificate/3708a6f1-e242-46ad-84e3-adc3914b0178"
          />
          <CardCourse
            image={alura}
            title="JavaScript na Web: armazenando dados no navegador"
            icon1={js}
            institute="Alura"
            verification="jun. de 2022"
            code="ff65452d-4ca2-47ca-a6fe-840d8a88939b"
            certificate="https://cursos.alura.com.br/certificate/ff65452d-4ca2-47ca-a6fe-840d8a88939b"
          />
          <CardCourse
            image={alura}
            title="JavaScript na Web: validação de Formulários e HTML5"
            icon2={js}
            icon1={html}
            institute="Alura"
            verification="jun. de 2022"
            code="1a053458-a981-4e49-9b6b-a62ff8abc884"
            certificate="https://cursos.alura.com.br/certificate/1a053458-a981-4e49-9b6b-a62ff8abc884"
          />
          <CardCourse
            image={alura}
            title="JavaScript para Web: Crie páginas dinâmicas"
            icon1={js}
            institute="Alura"
            verification="jun. de 2022"
            code="f6d11688-314d-4d27-8cba-d1aa45ba456e"
            certificate="https://cursos.alura.com.br/certificate/f6d11688-314d-4d27-8cba-d1aa45ba456e"
          />
          <CardCourse
            image={alura}
            title="JavaScript: de padrões a uma abordagem funcional"
            icon1={js}
            institute="Alura"
            verification="jun. de 2022"
            code="38b9b15d-a0cd-4ccc-8b87-8b12f77a5a1b"
            certificate="https://cursos.alura.com.br/certificate/38b9b15d-a0cd-4ccc-8b87-8b12f77a5a1b"
          />
          <CardCourse
            image={alura}
            title="JavaScript: explorando a linguagem"
            icon1={js}
            institute="Alura"
            verification="jun. de 2022"
            code="b8b7df91-5709-4dda-82f9-8504baa3a90a"
            certificate="https://cursos.alura.com.br/certificate/b8b7df91-5709-4dda-82f9-8504baa3a90a"
          />
          <CardCourse
            image={alura}
            title="JavaScript: manipulando o DOM"
            icon1={js}
            institute="Alura"
            verification="jun. de 2022"
            code="134e22d2-65a0-4c92-86ab-3cd8b0ebc43b"
            certificate="https://cursos.alura.com.br/certificate/134e22d2-65a0-4c92-86ab-3cd8b0ebc43b"
          />
          <CardCourse
            image={alura}
            title="TypeScript parte 1: evoluindo seu JavaScript"
            icon1={js}
            icon2={ts}
            institute="Alura"
            verification="jun. de 2022"
            code="43728ef7-2a01-4ffc-89ec-19647a87bb3f"
            certificate="https://cursos.alura.com.br/certificate/43728ef7-2a01-4ffc-89ec-19647a87bb3f"
          />
          <CardCourse
            image={alura}
            title="TypeScript parte 2: avançando na linguagem"
            icon1={js}
            icon2={ts}
            institute="Alura"
            verification="jun. de 2022"
            code="7f628734-438c-42a0-a0ec-0ccc17d89dfe"
            certificate="https://cursos.alura.com.br/certificate/7f628734-438c-42a0-a0ec-0ccc17d89dfe"
          />
          <CardCourse
            image={alura}
            title="Typescript parte 3: mais técnicas e boas práticas"
            icon1={js}
            icon2={ts}
            institute="Alura"
            verification="jun. de 2022"
            code="210ebf3b-fa35-4543-992b-188b6746421d"
            certificate="https://cursos.alura.com.br/certificate/210ebf3b-fa35-4543-992b-188b6746421d"
          />
          <CardCourse
            image={alura}
            title="HTML5 e CSS3 parte 1: crie uma página da Web"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="abr. de 2022"
            code="748ecb9e-8e2b-4d2a-8065-efba1fd85469"
            certificate="https://cursos.alura.com.br/certificate/748ecb9e-8e2b-4d2a-8065-efba1fd85469"
          />
          <CardCourse
            image={alura}
            title="HTML5 e CSS3 parte 2: posicionamento, listas e navegação"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="abr. de 2022"
            code="b9c38910-00eb-4f88-8da2-d448463e88fd"
            certificate="https://cursos.alura.com.br/certificate/b9c38910-00eb-4f88-8da2-d448463e88fd"
          />
          <CardCourse
            image={alura}
            title="HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="abr. de 2022"
            code="493c821c-6552-4de9-a77c-ffd053800337"
            certificate="https://cursos.alura.com.br/certificate/493c821c-6552-4de9-a77c-ffd053800337"
          />
          <CardCourse
            image={alura}
            title="HTML5 e CSS3 parte 4: avançando no CSS"
            icon1={css}
            icon2={html}
            institute="Alura"
            verification="abr. de 2022"
            code="41387833-790e-4276-b86c-cb474e3a826a"
            certificate="https://cursos.alura.com.br/certificate/41387833-790e-4276-b86c-cb474e3a826a"
          />
          <CardCourse
            image={alura}
            title="JavaScript: programando na linguagem da web"
            icon1={js}
            institute="Alura"
            verification="abr. de 2022"
            code="d0e3d0d8-58e2-4e45-a4e7-fdbe811b4b7e"
            certificate="https://cursos.alura.com.br/certificate/d0e3d0d8-58e2-4e45-a4e7-fdbe811b4b7e"
          />
          <CardCourse
            image={alura}
            title="Magento: customização de um tema"
            icon1={magento}
            institute="Alura"
            verification="abr. de 2022"
            code="31f0d98c-642a-4d3b-a5a3-c4f313a26f08"
            certificate="https://cursos.alura.com.br/certificate/31f0d98c-642a-4d3b-a5a3-c4f313a26f08"
          />
          <CardCourse
            image={alura}
            title="Magento: primeiros passos no gerenciamento de uma loja"
            icon1={magento}
            institute="Alura"
            verification="abr. de 2022"
            code="dddbbb22-25fc-4aca-883a-c7df213b82b6"
            certificate="https://cursos.alura.com.br/certificate/dddbbb22-25fc-4aca-883a-c7df213b82b6"
          />
          <CardCourse
            image={alura}
            title="Comunicação: como se expressar bem e ser compreendido"
            icon1={comunica}
            institute="Alura"
            verification="mar. de 2022"
            code="261f0c4e-9b1c-452d-bd6f-e0464eb0fb88"
            certificate="https://cursos.alura.com.br/certificate/261f0c4e-9b1c-452d-bd6f-e0464eb0fb88"
          />
          <CardCourse
            image={alura}
            title="Consultas SQL: avançando no SQL com MySQL"
            icon1={sql}
            institute="Alura"
            verification="mar. de 2022"
            code="83a71f5c-5991-4306-bf4d-e601c3650c0b"
            certificate="https://cursos.alura.com.br/certificate/83a71f5c-5991-4306-bf4d-e601c3650c0b"
          />
          <CardCourse
            image={alura}
            title="Git e Github: controle e compartilhe seu código"
            icon1={git}
            icon2={github}
            institute="Alura"
            verification="mar. de 2022"
            code="ae51a734-085a-4634-9c91-893cfafc03b9"
            certificate="https://cursos.alura.com.br/certificate/ae51a734-085a-4634-9c91-893cfafc03b9"
          />
          <CardCourse
            image={alura}
            title="SQL com MySQL: manipule e consulte dados"
            icon1={sql}
            institute="Alura"
            verification="mar. de 2022"
            code="0b6b37fa-1692-4744-833f-12f9f742d7b4"
            certificate="https://cursos.alura.com.br/certificate/0b6b37fa-1692-4744-833f-12f9f742d7b4"
          />
          <CardCourse
            image={alura}
            title="Linux I: conhecendo e utilizando o terminal"
            icon1={linux}
            institute="Alura"
            verification="mar. de 2022"
            code="d22ecc68-3224-4be8-9e2b-f1a9c0e8ba04"
            certificate="https://cursos.alura.com.br/certificate/d22ecc68-3224-4be8-9e2b-f1a9c0e8ba04"
          />
          <CardCourse
            image={alura}
            title="Linux II: programas, processos e pacotes"
            icon1={linux}
            institute="Alura"
            verification="mar. de 2022"
            code="43908b64-8a25-419f-aaa3-3b2a0eba5c99"
            certificate="https://cursos.alura.com.br/certificate/43908b64-8a25-419f-aaa3-3b2a0eba5c99"
          />
          <CardCourse
            image={alura}
            title="Oratória parte 2: apresentações em público"
            icon1={comunica}
            institute="Alura"
            verification="mar. de 2022"
            code="4af4f34e-540c-489f-91d1-ecac8a287009"
            certificate="https://cursos.alura.com.br/certificate/4af4f34e-540c-489f-91d1-ecac8a287009"
          />
          <CardCourse
            image={alura}
            title="UML: modelagem de soluções"
            icon1={uml}
            institute="Alura"
            verification="mar. de 2022"
            code="bbbc1bad-44a6-49c7-b9fe-09ff0d9f03e3"
            certificate="https://cursos.alura.com.br/certificate/bbbc1bad-44a6-49c7-b9fe-09ff0d9f03e3"
          />
          <CardCourse
            image={scrumstudy}
            title="Scrum fundamentals certified"
            icon1={scrum}
            institute="SCRUMstudy"
            verification="nov. de 2021"
            code="882954"
            certificate="https://www.scrumstudy.com/certification/verify?type=SFC&number=882954"
          />
          <CardCourse
            image={cps}
            title="Design e Photoshop"
            icon1={photoshop}
            institute="Centro Paula Souza"
            verification="jun. de 2020"
            code="Fmi9rkrrhp"
            certificate="/pdfs/designephotoshop.pdf"
          />
          <CardCourse
            image={evolutime}
            title="Informática"
            icon1={photoshop}
            icon2={informatica}
            institute="Evolutime"
            verification="fev. de 2016"
            code="Fmi9rkrrhp"
            certificate="/pdfs/evolutime.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
