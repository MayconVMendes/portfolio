import CardProject from "../components/CardProjects";
import nestle from "../assets/components/nestle.webp";
import veloce from "../assets/components/veloce.webp";
import concorde from "../assets/components/concorde.webp";
import equipacenter from "../assets/components/equipacenter.webp";
import tycket from "../assets/components/tycket.webp";
import syma from "../assets/components/syma.webp";
import tabacaria from "../assets/components/tabacaria.webp";
import broto from "../assets/components/broto.svg";
import quallita from "../assets/components/quallita.png";
import zoing from "../assets/components/zoing.png";
import vmjalecos from "../assets/components/vmjalecos.png";
import lumitec from "../assets/components/lumitec.png";
import distribuidora from "../assets/components/distribuidora.png";
import hsmerch from "../assets/components/hsmerch.png";
import xua from "../assets/components/xua.png";
import shokan from "../assets/components/shokan.svg";

function Projects() {
  return (
    <div className="projects">
      <div className="box">
        <h2>Projetos em que trabalhei</h2>
        <div className="pro">
          <CardProject
            image={nestle}
            link="https://www.nestleatevoce.com.br/"
            description="Atuei como desenvolvedor front-end com foco em React + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={broto}
            link="https://broto.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 2 + Less, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={veloce}
            link="https://www.velocepneus.com/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1, Sass e Vue, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={syma}
            link="https://www.syma.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={tabacaria}
            link="https://www.tabacariadamata.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={quallita}
            link="https://www.farmaciaquallita.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={zoing}
            link="https://zoing.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={concorde}
            link="http://www.concordepr.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={vmjalecos}
            link="https://vmjalecos.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={lumitec}
            link="https://www.lumitecfoto.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 2 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={equipacenter}
            link="https://www.equipacenter.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 2 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={distribuidora}
            link="https://distribuidoramegamix.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={hsmerch}
            link="https://www.hsmerch.com/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={tycket}
            link="https://www.tycket.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={xua}
            link="https://xuaxua.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
          <CardProject
            image={shokan}
            link="https://shokan.com.br/"
            description="Atuei como desenvolvedor front-end com foco em Magento 1 + Sass, onde fui responsável pela manutenção, criação de novas funcionalidades e melhorias nos Web Core Vitals, entre outras atividades."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
