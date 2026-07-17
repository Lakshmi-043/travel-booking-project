import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import BusCard from "../components/BusCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Buses() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const buses = [
    {
      id: 1,
      operator: "APSRTC",
      from: "Hyderabad",
      to: "Vijayawada",
      location: "Vijayawada",
      category: "AC",
      time: "07:30 AM",
      seats: 18,
      price: 750,
    },
    {
      id: 2,
      operator: "TSRTC",
      from: "Hyderabad",
      to: "Warangal",
      location: "Warangal",
      category: "Non AC",
      time: "09:15 AM",
      seats: 24,
      price: 450,
    },
    {
      id: 3,
      operator: "Orange Travels",
      from: "Hyderabad",
      to: "Bangalore",
      location: "Bangalore",
      category: "Sleeper",
      time: "10:45 PM",
      seats: 12,
      price: 1450,
    },
    {
      id: 4,
      operator: "Kaveri Travels",
      from: "Hyderabad",
      to: "Chennai",
      location: "Chennai",
      category: "Sleeper",
      time: "08:00 PM",
      seats: 15,
      price: 1650,
    },
    {
      id: 5,
      operator: "Morning Star",
      from: "Visakhapatnam",
      to: "Hyderabad",
      location: "Hyderabad",
      category: "AC",
      time: "06:00 PM",
      seats: 20,
      price: 1300,
    },
    {
      id: 6,
      operator: "SRS Travels",
      from: "Bangalore",
      to: "Goa",
      location: "Goa",
      category: "Luxury",
      time: "09:30 PM",
      seats: 10,
      price: 1800,
    },
  ];

  const categories = [
    "AC",
    "Non AC",
    "Sleeper",
    "Luxury",
  ];

  const filteredBuses = useMemo(() => {
    return buses.filter((bus) => {
      const matchSearch =
        bus.operator.toLowerCase().includes(search.toLowerCase()) ||
        bus.from.toLowerCase().includes(search.toLowerCase()) ||
        bus.to.toLowerCase().includes(search.toLowerCase()) ||
        bus.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        bus.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredBuses.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentBuses = filteredBuses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Book Bus Tickets
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentBuses.length === 0 ? (
        <Empty message="No buses found." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(340px,1fr))",
            }}
          >
            {currentBuses.map((bus) => (
              <BusCard
                key={bus.id}
                bus={bus}
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

export default Buses;