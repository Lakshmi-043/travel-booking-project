function OfferCard({ offer }) {
  return (
    <div className="offer-card">

      <img
        src={offer.image}
        alt={offer.title}
      />

      <div className="offer-content">

        <span className="offer-badge">
          {offer.discount}% OFF
        </span>

        <h3>{offer.title}</h3>

        <p>{offer.description}</p>

         <button
  className="card-btn"
  onClick={() => {
    addBooking(offer);
    navigate("/booking");
  }}
>
  Grab Offer
</button>

      </div>

    </div>
  );
}

export default OfferCard;