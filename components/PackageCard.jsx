import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function PackageCard({ packageItem }) {
  const { addBooking, addToWishlist } = useContext(TravelContext);
  const navigate = useNavigate();
  return (
    <div className="package-card">

      <img
        src={packageItem.image}
        alt={packageItem.title}
      />

      <div className="package-content">

        <h3>{packageItem.title}</h3>

        <p className="package-location">
          📍 {packageItem.location}
        </p>

        <p className="package-duration">
          🗓 {packageItem.duration}
        </p>

        <p className="package-description">
          {packageItem.description}
        </p>

        <div className="package-info">

          <span className="package-price">
            ₹ {packageItem.price}
          </span>

          <span className="package-rating">
            ⭐ {packageItem.rating}
          </span>

        </div>

        <div className="package-buttons">

          <button
           onClick={() => {
           addBooking(packageItem);
            navigate("/booking");
      }}
       >
          Book Now
         </button>

          <button
            className="wishlist-btn"
            onClick={() => addToWishlist(packageItem)}
          >
            Wishlist
          </button>

          <Link to={`/packages/${packageItem.id}`}>
            <button className="details-btn">
              Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;