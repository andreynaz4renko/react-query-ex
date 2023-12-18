import "./CardMars.css";

const CardMars = ({ name, total, date, camera, image }) => {
  return (
    <div className="all">
      <div className="card">
        <img src={image} alt="foto" />
        <div className="list">
          <div className="name">{name}</div>
          <div className="total">{total}</div>
          <div className="date">{date}</div>
          <div className="camera">{camera}</div>
        </div>
      </div>
    </div>
  );
};

export default CardMars;
