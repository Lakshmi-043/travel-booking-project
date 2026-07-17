import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function TrainCard({ train }) {
  const { addBooking } = useContext(TravelContext);
  const navigate = useNavigate();
  return (
    <div className="train-card">

      <div className="train-header">

        <h3>{train.name}</h3>

        <span className="train-price">
          ₹ {train.price}
        </span>

      </div>

      <div className="train-route">

        <div>
          <h4>{train.from}</h4>
          <p>Departure</p>
        </div>

        <div className="train-arrow">
          🚆
        </div>

        <div>
          <h4>{train.to}</h4>
          <p>Arrival</p>
        </div>

      </div>

      <div className="train-info">

        <span>🕒 {train.time}</span>

        <span>🚉 Platform {train.platform}</span>

      </div>
      <button
  className="card-btn"
  onClick={() => {
    addBooking(train);
    navigate("/booking");
  }}
>
  Book Train
</button>

    </div>
  );
}

export default TrainCard;