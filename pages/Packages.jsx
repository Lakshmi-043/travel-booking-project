import { useContext, useMemo, useState } from "react";
import TravelContext from "../context/TravelContext";
import SearchBar from "../components/SearchBar";
import PackageCard from "../components/PackageCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Empty from "../components/Empty";

function Packages() {
  const { search } = useContext(TravelContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const packages = [
    {
      id: 1,
      title: "Goa Family Package",
      location: "Goa",
      category: "Family",
      duration: "4 Days / 3 Nights",
      description: "Beach resort, breakfast, sightseeing and airport pickup.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      price: 14999,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Manali Honeymoon",
      location: "Manali",
      category: "Honeymoon",
      duration: "5 Days / 4 Nights",
      description: "Luxury hotel, candlelight dinner and local sightseeing.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      price: 21999,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Kerala Nature Tour",
      location: "Kerala",
      category: "Nature",
      duration: "6 Days / 5 Nights",
      description: "Backwater cruise, resort stay and cultural shows.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      price: 17999,
      rating: 4.7,
    },
    {
      id: 4,
      title: "Rajasthan Heritage",
      location: "Jaipur",
      category: "Heritage",
      duration: "5 Days / 4 Nights",
      description: "Fort visits, palace stay and traditional food.",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      price: 18999,
      rating: 4.6,
    },
    {
      id: 5,
      title: "Ooty Hill Escape",
      location: "Ooty",
      category: "Nature",
      duration: "3 Days / 2 Nights",
      description: "Tea gardens, boating and mountain views.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      price: 10999,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Andaman Luxury Tour",
      location: "Andaman",
      category: "Beach",
      duration: "6 Days / 5 Nights",
      description: "Private beach stay, scuba diving and island hopping.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
      price: 28999,
      rating: 5,
    },
  ];

  const categories = [
    "Family",
    "Honeymoon",
    "Nature",
    "Heritage",
    "Beach",
  ];

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  const itemsPerPage = 4;

  const totalPages = Math.ceil(
    filteredPackages.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = filteredPackages.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="section">

      <h1 className="title text-center">
        Tour Packages
      </h1>

      <SearchBar />

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {currentItems.length === 0 ? (
        <Empty message="No packages available." />
      ) : (
        <>
          <div
            className="grid"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
            }}
          >
            {currentItems.map((packageItem) => (
              <PackageCard
                key={packageItem.id}
                packageItem={packageItem}
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

export default Packages;