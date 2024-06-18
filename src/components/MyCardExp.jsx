import PropTypes from "prop-types";

function MyCardExp({
  link,
  image,
  title,
  office,
  period,
  modality,
  office2,
  period2,
  modality2,
  classImg,
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="imgs">
          <img className={classImg} src={image} alt={"Icone " + title} />
          <h2>{title}</h2>
        </div>

        <div className="box">
          <p>
            <strong>Cargo: </strong>
            {office}
          </p>
          <p>
            <strong>Período: </strong>
            {period}
          </p>
          <p>
            <strong>Modalidade: </strong>
            {modality}
          </p>
          {office2 ? (
            <>
              <p className="divider" />
              <p>
                <strong>Cargo: </strong>
                {office2}
              </p>
              <p>
                <strong>Período: </strong>
                {period2}
              </p>
              <p>
                <strong>Modalidade: </strong>
                {modality2}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </a>
  );
}

MyCardExp.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  modality: PropTypes.string.isRequired,
  office2: PropTypes.string.isRequired,
  period2: PropTypes.string.isRequired,
  modality2: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
};

export default MyCardExp;
