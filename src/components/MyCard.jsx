import PropTypes from "prop-types";

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  institutes: PropTypes.string.isRequired,
};

function MyCard({ title, name, data, institutes }) {
  return (
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
  );
}

export default MyCard;
