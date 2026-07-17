import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Explore The World With Confidence
        </h1>

        <p>
          Book Flights, Hotels, Buses, Trains and Amazing Holiday Packages at
          the Best Prices.
        </p>

        <div className="hero-buttons">

          <Link to="/packages">
            <button>Explore Packages</button>
          </Link>

          <Link to="/destinations">
            <button className="secondary-btn">
              Top Destinations
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;