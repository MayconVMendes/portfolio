import PropTypes from "prop-types";

function CardProject({ image, description, link }) {
  return (
    <div className="cardProject">
      <div className="first-content">
        <img src={image} />
      </div>
      <div className="second-content">
        <span>Clique para visitar</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="description">{description}</span>
        </a>
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
