import { useContext } from "react";
import TravelContext from "../context/TravelContext";
import DestinationCard from "../components/DestinationCard";
import Empty from "../components/Empty";

function Wishlist() {
  const { wishlist } = useContext(TravelContext);

  return (
    <div className="section">

      <h1 className="title text-center">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <Empty message="Your wishlist is empty." />
      ) : (
        <div
          className="grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
          }}
        >
          {wishlist.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Wishlist;