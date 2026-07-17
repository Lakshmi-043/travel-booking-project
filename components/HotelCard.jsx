import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function HotelCard({ hotel }) {
  const { addBooking, addToWishlist } = useContext(TravelContext);
const navigate = useNavigate();

  return (
    <div className="hotel-card">

      <img
        src={hotel.image}
        alt={hotel.name}
      />

      <div className="hotel-content">

        <h3>{hotel.name}</h3>

        <p className="hotel-location">
          📍 {hotel.location}
        </p>

        <p className="hotel-description">
          {hotel.description}
        </p>

        <div className="hotel-details">

          <span className="hotel-price">
            ₹ {hotel.price}/Night
          </span>

          <span className="hotel-rating">
            ⭐ {hotel.rating}
          </span>

        </div>

        <div className="hotel-buttons">
          <button
  className="card-btn"
  onClick={() => {
    addBooking(hotel);
    navigate("/booking");
  }}
>
  Book Now
</button>

          <button
            className="wishlist-btn"
            onClick={() => addToWishlist(hotel)}
          >
            Wishlist
          </button>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;