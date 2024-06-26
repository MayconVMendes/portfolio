import PropTypes from "prop-types";

function CardCourse({
  image,
  title,
  institute,
  verification,
  code,
  certificate,
  icon1,
  icon2,
}) {
  return (
    <div className="cardCourse">
      <div className="first-content">
        <img src={image} alt={"Icone " + institute} />
      </div>
      <div className="second-content">
        <div className="titleIcon">
          <h2>{title}</h2>
          <div className="icons">
            {icon1 ? (
              <img className="img1" src={icon1} alt="Logo do estudo" />
            ) : (
              ""
            )}
            {icon2 ? (
              <img className="img2" src={icon2} alt="Logo do estudo" />
            ) : (
              ""
            )}
          </div>
        </div>
        <p className="ints">{institute}</p>
        <p>Verificação emitida em {verification}</p>
        <p>Código da credencial {code}</p>
        {certificate ? (
          <button className="btn">
            <a href={certificate} target="_blank" rel="noopener noreferrer">
              Exibir certificado
            </a>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

CardCourse.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  verification: PropTypes.string.isRequired,
  code: PropTypes.string,
  certificate: PropTypes.string,
  icon1: PropTypes.string,
  icon2: PropTypes.string,
};

export default CardCourse;
