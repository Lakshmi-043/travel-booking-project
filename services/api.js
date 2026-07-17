// Base API URL

const BASE_URL = "https://jsonplaceholder.typicode.com";


// Fetch users
export const getUsers = async () => {

  const response = await fetch(
    `${BASE_URL}/users`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch users"
    );
  }

  return response.json();

};


// Fetch single user

export const getUserById = async (id) => {

  const response = await fetch(
    `${BASE_URL}/users/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch user details"
    );
  }

  return response.json();

};


// Example travel packages API function

export const getPackages = async () => {

  const response = await fetch(
    "https://fakestoreapi.com/products"
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch packages"
    );
  }

  return response.json();

};


// Example hotels API function

export const getHotels = async () => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch hotels"
    );
  }

  return response.json();

};


export default {
  getUsers,
  getUserById,
  getPackages,
  getHotels,
};