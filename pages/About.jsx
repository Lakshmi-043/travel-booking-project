function About() {
  const features = [
    {
      id: 1,
      title: "Best Destinations",
      description:
        "Discover beautiful beaches, mountains, historical places, and international destinations at affordable prices.",
      icon: "🌍",
    },
    {
      id: 2,
      title: "Easy Booking",
      description:
        "Book flights, hotels, buses, trains, and holiday packages in just a few clicks.",
      icon: "🧳",
    },
    {
      id: 3,
      title: "Secure Payments",
      description:
        "Multiple payment options with secure and reliable transactions for every booking.",
      icon: "💳",
    },
    {
      id: 4,
      title: "24/7 Support",
      description:
        "Our customer support team is available anytime to help you throughout your journey.",
      icon: "📞",
    },
  ];

  return (
    <div className="section">

      <div className="about-page">

        <h1 className="title text-center">
          About TravelGo
        </h1>

        <p className="about-description">
          TravelGo is a modern travel booking platform that helps travelers
          explore destinations, compare prices, and book flights, hotels,
          buses, trains, and holiday packages from one place. Our goal is
          to make every trip affordable, simple, and memorable.
        </p>

        <div className="about-grid">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="about-card"
            >
              <div className="about-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}

        </div>

        <div className="about-mission">

          <h2>
            Our Mission
          </h2>

          <p>
            We aim to provide travelers with the best booking experience by
            offering trusted services, competitive prices, and excellent
            customer support. Whether you're planning a weekend getaway or an
            international vacation, TravelGo is your reliable travel partner.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;