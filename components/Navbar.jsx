import { NavLink } from "react-router-dom";
import { useContext } from "react";
import TravelContext from "../context/TravelContext";
function Navbar() {
    const { wishlist } = useContext(TravelContext);
  return (
    <nav className="navbar">

      <div className="logo">
         TravelWorld
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/destinations">Destinations</NavLink>
        </li>

        <li>
          <NavLink to="/packages">Packages</NavLink>
        </li>

        <li>
          <NavLink to="/hotels">Hotels</NavLink>
        </li>

        <li>
          <NavLink to="/flights">Flights</NavLink>
        </li>

        <li>
          <NavLink to="/buses">Buses</NavLink>
        </li>

        <li>
          <NavLink to="/trains">Trains</NavLink>
        </li>

        <li>
          <NavLink to="/booking">Booking</NavLink>
        </li>
        <li>
  <NavLink to="/wishlist">
    Wishlist ({wishlist.length})
  </NavLink>
</li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;