import axios from "axios";

const restaurantApi = axios.create({ baseURL: "http://localhost:5000/api" });

export const getAllRestaurants = restaurantApi.get("/restaurant");
