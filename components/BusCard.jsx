import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function BusCard({ bus }) {
  const { addBooking } = useContext(TravelContext);
  const navigate = useNavigate();
  return (
    <div className="bus-card">

      <div className="bus-header">

        <h3>{bus.operator}</h3>

        <span className="bus-price">
          ₹ {bus.price}
        </span>

      </div>

      <div className="bus-route">

        <div>
          <h4>{bus.from}</h4>
          <p>Departure</p>
        </div>

        <div className="bus-arrow">
          🚌
        </div>

        <div>
          <h4>{bus.to}</h4>
          <p>Arrival</p>
        </div>

      </div>

      <div className="bus-info">

        <span>🕒 {bus.time}</span>

        <span>💺 {bus.seats} Seats</span>

      </div>
      <button
  className="card-btn"
  onClick={() => {
    addBooking(bus);
    navigate("/booking");
  }}
>
  Book Now
</button>

    </div>
  );
}

export default BusCard;