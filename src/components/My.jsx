import MyPhoto from "../assets/my.jpg";

export default function My() {
  return (
    <div className="myPerson">
      <div className="myPhoto">
        <img src={MyPhoto} />
      </div>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Maycon Vieira
          </text>
        </svg>
      </div>
    </div>
  );
}
