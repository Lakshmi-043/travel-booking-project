import { useParams, Link } from "react-router-dom";

function PackageDetails() {
  const { id } = useParams();

  const packages = [
    {
      id: 1,
      title: "Goa Family Package",
      location: "Goa",
      duration: "4 Days / 3 Nights",
      description:
        "Enjoy a wonderful family vacation with beach resorts, sightseeing, breakfast, airport pickup, and exciting water sports.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      price: 14999,
      rating: 4.8,
      hotel: "Sea View Resort",
      meals: "Breakfast Included",
      transport: "Airport Pickup & Drop",
    },
    {
      id: 2,
      title: "Manali Honeymoon",
      location: "Manali",
      duration: "5 Days / 4 Nights",
      description:
        "A romantic honeymoon package with luxury accommodation, candlelight dinner, sightseeing, and snow activities.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
      price: 21999,
      rating: 4.9,
      hotel: "Mountain Paradise Hotel",
      meals: "Breakfast & Dinner",
      transport: "Private Cab",
    },
    {
      id: 3,
      title: "Kerala Nature Tour",
      location: "Kerala",
      duration: "6 Days / 5 Nights",
      description:
        "Explore beautiful backwaters, houseboats, waterfalls, and traditional Kerala culture with premium accommodation.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
      price: 17999,
      rating: 4.7,
      hotel: "Backwater Resort",
      meals: "Breakfast Included",
      transport: "AC Cab",
    },
    {
      id: 4,
      title: "Rajasthan Heritage Tour",
      location: "Jaipur",
      duration: "5 Days / 4 Nights",
      description:
        "Visit majestic forts, palaces, museums, and experience Rajasthan's royal culture.",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
      price: 18999,
      rating: 4.6,
      hotel: "Royal Palace Hotel",
      meals: "Breakfast & Dinner",
      transport: "Luxury Coach",
    },
    {
      id: 5,
      title: "Ooty Hill Escape",
      location: "Ooty",
      duration: "3 Days / 2 Nights",
      description:
        "Relax among tea gardens, lakes, waterfalls, and pleasant weather in Ooty.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
      price: 10999,
      rating: 4.5,
      hotel: "Green Valley Resort",
      meals: "Breakfast Included",
      transport: "Private Cab",
    },
    {
      id: 6,
      title: "Andaman Luxury Tour",
      location: "Andaman",
      duration: "6 Days / 5 Nights",
      description:
        "Luxury island vacation with scuba diving, private beaches, premium resort stay, and water activities.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      price: 28999,
      rating: 5,
      hotel: "Blue Ocean Resort",
      meals: "All Meals Included",
      transport: "Airport Transfer",
    },
  ];

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <div className="section text-center">
        <h2>Package Not Found</h2>

        <Link to="/packages">
          <button>Back to Packages</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="section">

      <div className="package-details">

        <img
          src={packageData.image}
          alt={packageData.title}
        />

        <div className="package-details-content">

          <h1>{packageData.title}</h1>

          <p>
            <strong>📍 Location:</strong> {packageData.location}
          </p>

          <p>
            <strong>🗓 Duration:</strong> {packageData.duration}
          </p>

          <p>
            <strong>🏨 Hotel:</strong> {packageData.hotel}
          </p>

          <p>
            <strong>🍽 Meals:</strong> {packageData.meals}
          </p>

          <p>
            <strong>🚗 Transport:</strong> {packageData.transport}
          </p>

          <p>
            <strong>⭐ Rating:</strong> {packageData.rating}
          </p>

          <h2 className="details-price">
            ₹ {packageData.price}
          </h2>

          <p className="details-description">
            {packageData.description}
          </p>

          <div className="details-buttons">

            <button>
              Book Now
            </button>

            <Link to="/packages">
              <button className="secondary-btn">
                Back
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PackageDetails;