import PropTypes from "prop-types";

function CardProject({ image, title }) {
  return (
    <div className="cardProject">
      <div className="first-content">
        <img src={image} />
        <h2>{title}</h2>
      </div>
      <div className="second-content">
        <span>Second</span>
      </div>
    </div>
  );
}

CardProject.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardProject;
