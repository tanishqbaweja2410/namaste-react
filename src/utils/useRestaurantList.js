import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../config";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
};

export default useRestaurantList;
