import { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Profile() {
  const { user, bookings, wishlist } = useContext(TravelContext);

  return (
    <div className="section">

      <h1 className="title text-center">
        My Profile
      </h1>

      <div className="profile-container">

        <div className="profile-card">

          <img
            src={
              user?.image ||
              "https://randomuser.me/api/portraits/women/65.jpg"
            }
            alt="Profile"
            className="profile-image"
          />

          <h2>
            {user?.name || "Sai Lakshmi"}
          </h2>

          <p>
            📧 {user?.email || "sailakshmi@gmail.com"}
          </p>

          <p>
            📱 {user?.phone || "+91 9876543210"}
          </p>

          <p>
            📍 {user?.location || "Hyderabad, India"}
          </p>

        </div>

        <div className="profile-stats">

          <div className="profile-box">
            <h2>{bookings.length}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="profile-box">
            <h2>{wishlist.length}</h2>
            <p>Wishlist Items</p>
          </div>

          <div className="profile-box">
            <h2>⭐ 4.9</h2>
            <p>Traveler Rating</p>
          </div>

          <div className="profile-box">
            <h2>Gold</h2>
            <p>Membership</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;