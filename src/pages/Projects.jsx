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
import shokan from "../assets/components/shokan.png";

function Projects() {
  return (
    <div className="projects">
      <div className="box">
        <h2>Projetos em que trabalhei</h2>
        <div className="pro">
          <CardProject image={nestle} />
          <CardProject image={broto} />
          <CardProject image={veloce} />
          <CardProject image={syma} />
          <CardProject image={tabacaria} />
          <CardProject image={quallita} />
          <CardProject image={zoing} />
          <CardProject image={concorde} />
          <CardProject image={vmjalecos} />
          <CardProject image={lumitec} />
          <CardProject image={equipacenter} />
          <CardProject image={distribuidora} />
          <CardProject image={hsmerch} />
          <CardProject image={tycket} />
          <CardProject image={xua} />
          <CardProject image={shokan} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
