import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TravelContext from "../context/TravelContext";
import BookingCard from "../components/BookingCard";
import Empty from "../components/Empty";

function Booking() {
  const { bookings } = useContext(TravelContext);
const navigate = useNavigate();
  return (
    <div className="section">

      <h1 className="title text-center">
        My Bookings
      </h1>
<button
  className="back-btn"
  onClick={() => navigate(-1)}
>
  ← Back
</button>
      {bookings.length === 0 ? (
        <Empty message="You have not booked any trips yet." />
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Booking;