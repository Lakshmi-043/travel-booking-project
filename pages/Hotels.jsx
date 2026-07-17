import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import HotelCard from "../components/HotelCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Hotels() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const hotels = [
    {
      id: 1,
      name: "Sea View Resort",
      location: "Goa",
      category: "Luxury",
      description: "5-Star beach resort with swimming pool and spa.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      price: 6500,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Mountain Paradise",
      location: "Manali",
      category: "Luxury",
      description: "Luxury mountain resort with valley view.",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      price: 7200,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Backwater Resort",
      location: "Kerala",
      category: "Resort",
      description: "Peaceful resort surrounded by beautiful backwaters.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      price: 5800,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Royal Palace Hotel",
      location: "Jaipur",
      category: "Heritage",
      description: "Experience royal living in a heritage palace.",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      price: 8100,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Green Valley Resort",
      location: "Ooty",
      category: "Resort",
      description: "Enjoy nature with comfortable premium rooms.",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      price: 5400,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Blue Ocean Resort",
      location: "Andaman",
      category: "Luxury",
      description: "Private beach access with luxury accommodation.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      price: 9600,
      rating: 5,
    },
  ];

  const categories = [
    "Luxury",
    "Resort",
    "Heritage",
  ];

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchSearch =
        hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        hotel.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredHotels.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentHotels = filteredHotels.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Book Hotels
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentHotels.length === 0 ? (
        <Empty message="No hotels found." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
            }}
          >
            {currentHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
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

export default Hotels;