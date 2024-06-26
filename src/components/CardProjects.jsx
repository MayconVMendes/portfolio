import PropTypes from "prop-types";

function CardProject({ image, description, link }) {
  return (
    <div className="cardProject">
      <div className="first-content">
        <img src={image} alt="Icone da loja" />
      </div>
      <div className="second-content">
        <div className="control">
          <h2>Clique para visitar</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="description">{description}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardProject;
