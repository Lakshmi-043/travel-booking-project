import { useContext } from "react";
import TravelContext from "../context/TravelContext";
function BookingCard({ booking }) {
  const { removeWishlist } = useContext(TravelContext);
return (
    <div className="booking-card">
<div className="booking-image">
        <img
          src={booking.image}
          alt={booking.title}
        />
      </div>

      <div className="booking-content">

        <h2>{booking.title}</h2>

        <p>
          📍 <strong>Location:</strong> {booking.location}
        </p>

        <p>
          📅 <strong>Duration:</strong> {booking.duration}
        </p>

        <p>
          👥 <strong>Guests:</strong> {booking.guests}
        </p>

        <p>
          ⭐ <strong>Rating:</strong> {booking.rating}
        </p>

        <h3 className="booking-price">
          ₹ {booking.price}
        </h3>

        <button
          className="cancel-btn"
          onClick={() => removeWishlist(booking.id)}
        >
          Cancel Booking
        </button>

      </div>

    </div>
  );
}

export default BookingCard;