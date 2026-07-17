import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import FlightCard from "../components/FlightCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Flights() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const flights = [
    {
      id: 1,
      airline: "IndiGo",
      from: "Hyderabad",
      to: "Goa",
      location: "Goa",
      category: "Domestic",
      time: "08:30 AM",
      seats: 25,
      price: 4999,
    },
    {
      id: 2,
      airline: "Air India",
      from: "Delhi",
      to: "Manali",
      location: "Manali",
      category: "Domestic",
      time: "11:45 AM",
      seats: 18,
      price: 6299,
    },
    {
      id: 3,
      airline: "Vistara",
      from: "Mumbai",
      to: "Kerala",
      location: "Kerala",
      category: "Domestic",
      time: "02:15 PM",
      seats: 30,
      price: 5899,
    },
    {
      id: 4,
      airline: "Emirates",
      from: "Hyderabad",
      to: "Dubai",
      location: "Dubai",
      category: "International",
      time: "09:10 PM",
      seats: 15,
      price: 35999,
    },
    {
      id: 5,
      airline: "Singapore Airlines",
      from: "Chennai",
      to: "Singapore",
      location: "Singapore",
      category: "International",
      time: "06:20 PM",
      seats: 22,
      price: 42999,
    },
    {
      id: 6,
      airline: "Qatar Airways",
      from: "Bengaluru",
      to: "Doha",
      location: "Doha",
      category: "International",
      time: "10:45 PM",
      seats: 20,
      price: 38999,
    },
  ];

  const categories = [
    "Domestic",
    "International",
  ];

  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const matchSearch =
        flight.airline.toLowerCase().includes(search.toLowerCase()) ||
        flight.location.toLowerCase().includes(search.toLowerCase()) ||
        flight.from.toLowerCase().includes(search.toLowerCase()) ||
        flight.to.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        flight.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredFlights.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentFlights = filteredFlights.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Book Flights
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentFlights.length === 0 ? (
        <Empty message="No flights available." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(350px,1fr))",
            }}
          >
            {currentFlights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
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

export default Flights;