import { createContext, useState } from "react";

const TravelContext = createContext();

export function TravelProvider({ children }) {

  const [search, setSearch] = useState("");

  const [user, setUser] = useState({
    name: "Sai Lakshmi",
    email: "sailakshmi@gmail.com",
    phone: "+91 9876543210",
    location: "Hyderabad, India",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  });


  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Goa Beach",
      location: "Goa",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      price: 7999,
      rating: 4.8,
    },
  ]);


  const [bookings, setBookings] = useState([
    {
      id: 1,
      title: "Manali Honeymoon",
      location: "Manali",
      date: "25 July 2026",
      price: 21999,
      status: "Confirmed",
      image:   "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"

    },
    {
  id: 2,
  title: "Goa Beach Vacation",
  location: "Goa",
  date: "10 August 2026",
  price: 15999,
  status: "Confirmed",
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800"
},
  ]);


  const addToWishlist = (item) => {

    const alreadyExists = wishlist.find(
      (wishlistItem) =>
        wishlistItem.id === item.id
    );

    if (!alreadyExists) {
      setWishlist([
        ...wishlist,
        item,
      ]);
    }

  };


  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );

  };


  const addBooking = (booking) => {

    setBookings([
      ...bookings,
      {
        ...booking,
        id: Date.now(),
        status: "Confirmed",
      },
    ]);

  };


  const cancelBooking = (id) => {

    setBookings(
      bookings.filter(
        (booking) =>
          booking.id !== id
      )
    );

  };


  return (

    <TravelContext.Provider
      value={{
        search,
        setSearch,

        user,
        setUser,

        wishlist,
        addToWishlist,
        removeFromWishlist,

        bookings,
        addBooking,
        cancelBooking,
      }}
    >

      {children}

    </TravelContext.Provider>

  );

}


export default TravelContext;