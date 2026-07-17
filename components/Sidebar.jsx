import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">
        TravelGo
      </h2>

      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/destinations">
        Destinations
      </NavLink>

      <NavLink to="/packages">
        Packages
      </NavLink>

      <NavLink to="/hotels">
        Hotels
      </NavLink>

      <NavLink to="/flights">
        Flights
      </NavLink>

      <NavLink to="/buses">
        Buses
      </NavLink>

      <NavLink to="/trains">
        Trains
      </NavLink>

      <NavLink to="/booking">
        Booking
      </NavLink>

      <NavLink to="/wishlist">
        Wishlist
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

    </aside>
  );
}

export default Sidebar;