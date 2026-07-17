import { useContext } from "react";
import TravelContext from "../context/TravelContext";

function SearchBar() {
  const { search, setSearch } = useContext(TravelContext);

  return (
    <div className="search-container">
      <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search..."
/>

      <button>Search</button>

    </div>
  );
}

export default SearchBar;