import PropTypes from "prop-types";

function MyCard({ link, title, name, data, institutes }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <h2>{title}</h2>
        <div className="box">
          <p className="name">
            <strong>Curso:</strong> {name}
          </p>
          <p className="data">
            <strong>Período:</strong> {data}
          </p>
          <p className="inst">
            <strong>Instituição:</strong> {institutes}
          </p>
        </div>
      </div>
    </a>
  );
}

MyCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  institutes: PropTypes.string.isRequired,
};

export default MyCard;
