import { useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import OfferCard from "../components/OfferCard";
import ReviewCard from "../components/ReviewCard";

function Home() {

  const [destinations] = useState([
    {
      id: 1,
      name: "Goa Beach",
      location: "Goa",
      description: "Enjoy beautiful beaches and exciting nightlife.",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800",
      price: 7999,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Manali",
      location: "Himachal Pradesh",
      description: "Snow covered mountains and adventure activities.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      price: 9999,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Kerala",
      location: "Kerala",
      description: "Experience peaceful backwaters and nature.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      price: 8999,
      rating: 4.9,
    },
  ]);

  const [packages] = useState([
    {
      id: 1,
      title: "Goa Family Package",
      location: "Goa",
      duration: "4 Days / 3 Nights",
      description: "Hotel, Breakfast, Sightseeing and Airport Pickup.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      price: 14999,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Manali Honeymoon",
      location: "Manali",
      duration: "5 Days / 4 Nights",
      description: "Luxury stay with sightseeing and meals included.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      price: 19999,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Kerala Tour",
      location: "Kerala",
      duration: "6 Days / 5 Nights",
      description: "Backwater cruise, resort stay and local tours.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      price: 17999,
      rating: 4.7,
    },
  ]);

  const [offers] = useState([
    {
      id: 1,
      title: "Summer Sale",
      description: "Book now and save on selected destinations.",
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    },
    {
      id: 2,
      title: "Weekend Escape",
      description: "Special weekend packages with hotel discounts.",
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    },
  ]);

  const [reviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      country: "India",
      review:
        "Amazing experience. Everything was perfectly organized.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Reddy",
      country: "India",
      review:
        "Affordable packages and excellent customer support.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David",
      country: "USA",
      review:
        "Beautiful destinations and comfortable hotels.",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ]);

  return (
        <>
      <Hero />

      <SearchBar />

      <section className="section">

        <h2 className="title text-center">
          Popular Destinations
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

      </section>

      <section className="section">

        <h2 className="title text-center">
          Best Tour Packages
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          }}
        >
          {packages.map((packageItem) => (
            <PackageCard
              key={packageItem.id}
              packageItem={packageItem}
            />
          ))}
        </div>

      </section>

      <section className="section">

        <h2 className="title text-center">
          Special Offers
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>

      </section>

      <section className="section">

        <h2 className="title text-center">
          What Our Travelers Say
        </h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>

      </section>

    </>
  );
}

export default Home;