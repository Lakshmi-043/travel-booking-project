function ReviewCard({ review }) {
  return (
    <div className="review-card">

      <div className="review-top">

        <img
          src={review.image}
          alt={review.name}
        />

        <div>

          <h3>{review.name}</h3>

          <span>{review.country}</span>

        </div>

      </div>

      <p className="review-text">
        "{review.review}"
      </p>

      <h4 className="review-rating">
        ⭐ {review.rating}/5
      </h4>

    </div>
  );
}

export default ReviewCard;