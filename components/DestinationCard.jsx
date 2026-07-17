import { Link } from "react-router-dom";
import { useContext } from "react";
import TravelContext from "../context/TravelContext";

function DestinationCard({ destination }) {

  const { addToWishlist } = useContext(TravelContext);

  return (
    <div className="destination-card">

      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="destination-content">

        <h3>{destination.name}</h3>

        <p className="location">
          📍 {destination.location}
        </p>

        <p className="description">
          {destination.description}
        </p>
<button
  className="wishlist-btn"
  onClick={() => addToWishlist(destination)}
>
  ❤️ Wishlist
</button>
        <div className="destination-footer">

          <span className="price">
            ₹ {destination.price}
          </span>

          <span className="rating">
            ⭐ {destination.rating}
          </span>

        </div>

        <div className="destination-buttons">


          <Link to={`/packages/${destination.id}`}>
            <button className="details-btn">
              View Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;