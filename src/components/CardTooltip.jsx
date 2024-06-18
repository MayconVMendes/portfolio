import PropTypes from "prop-types";

function CardTooltip({ image, alt, tooltip, classImg }) {
  return (
    <div className="tooltip">
      <img src={image} alt={alt} className={classImg} />
      <div className="tooltiptext">{tooltip}</div>
    </div>
  );
}

CardTooltip.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  classImg: PropTypes.string,
};

export default CardTooltip;
