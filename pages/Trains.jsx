import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import TrainCard from "../components/TrainCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Trains() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const trains = [
    {
      id: 1,
      name: "Vande Bharat Express",
      from: "Hyderabad",
      to: "Vijayawada",
      location: "Vijayawada",
      category: "Express",
      time: "06:00 AM",
      platform: 2,
      price: 1250,
    },
    {
      id: 2,
      name: "Rajdhani Express",
      from: "Hyderabad",
      to: "Delhi",
      location: "Delhi",
      category: "Superfast",
      time: "04:20 PM",
      platform: 5,
      price: 2650,
    },
    {
      id: 3,
      name: "Shatabdi Express",
      from: "Chennai",
      to: "Bengaluru",
      location: "Bengaluru",
      category: "Express",
      time: "07:30 AM",
      platform: 3,
      price: 1450,
    },
    {
      id: 4,
      name: "Duronto Express",
      from: "Mumbai",
      to: "Kolkata",
      location: "Kolkata",
      category: "Superfast",
      time: "09:45 PM",
      platform: 7,
      price: 3200,
    },
    {
      id: 5,
      name: "Godavari Express",
      from: "Visakhapatnam",
      to: "Hyderabad",
      location: "Hyderabad",
      category: "Express",
      time: "05:30 PM",
      platform: 1,
      price: 980,
    },
    {
      id: 6,
      name: "Konark Express",
      from: "Bhubaneswar",
      to: "Mumbai",
      location: "Mumbai",
      category: "Mail",
      time: "11:10 AM",
      platform: 4,
      price: 1850,
    },
  ];

  const categories = [
    "Express",
    "Superfast",
    "Mail",
  ];

  const filteredTrains = useMemo(() => {
    return trains.filter((train) => {
      const matchSearch =
        train.name.toLowerCase().includes(search.toLowerCase()) ||
        train.from.toLowerCase().includes(search.toLowerCase()) ||
        train.to.toLowerCase().includes(search.toLowerCase()) ||
        train.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        train.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredTrains.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentTrains = filteredTrains.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Book Train Tickets
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentTrains.length === 0 ? (
        <Empty message="No trains found." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(340px,1fr))",
            }}
          >
            {currentTrains.map((train) => (
              <TrainCard
                key={train.id}
                train={train}
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

export default Trains;