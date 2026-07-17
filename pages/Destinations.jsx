import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Destinations() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const destinations = [
    {
      id: 1,
      name: "Goa Beach",
      location: "Goa",
      category: "Beach",
      description: "Golden beaches, nightlife and water sports.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      price: 7999,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Manali",
      location: "Himachal Pradesh",
      category: "Hill Station",
      description: "Snow mountains and adventure activities.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      price: 9999,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Kerala",
      location: "Kerala",
      category: "Nature",
      description: "Backwaters, greenery and houseboats.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      price: 8999,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Jaipur",
      location: "Rajasthan",
      category: "Heritage",
      description: "Historic forts and royal palaces.",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      price: 11999,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Ooty",
      location: "Tamil Nadu",
      category: "Hill Station",
      description: "Tea gardens and pleasant climate.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      price: 8499,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Andaman",
      location: "Andaman Islands",
      category: "Beach",
      description: "Crystal clear water and coral reefs.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
      price: 18999,
      rating: 4.9,
    },
  ];

  const categories = [
    "Beach",
    "Hill Station",
    "Nature",
    "Heritage",
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredDestinations.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Explore Destinations
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentItems.length === 0 ? (
        <Empty message="No destinations found." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
            }}
          >
            {currentItems.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}

    </div>
  );
}

export default Destinations;