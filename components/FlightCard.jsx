import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function FlightCard({ flight }) {
  const { addBooking } = useContext(TravelContext);
  const navigate = useNavigate();
  return (
    <div className="flight-card">

      <div className="flight-header">

        <h3>{flight.airline}</h3>

        <span className="flight-price">
          ₹ {flight.price}
        </span>

      </div>

      <div className="flight-route">

        <div>
          <h4>{flight.from}</h4>
          <p>Departure</p>
        </div>

        <div className="flight-arrow">
          ✈️
        </div>

        <div>
          <h4>{flight.to}</h4>
          <p>Arrival</p>
        </div>

      </div>

      <div className="flight-info">

        <span>🕒 {flight.time}</span>

        <span>💺 {flight.seats} Seats</span>

      </div>
      <button
  className="card-btn"
  onClick={() => {
    addBooking(flight);
    navigate("/booking");
  }}
>
  Book Flight
</button>

    </div>
  );
}

export default FlightCard;