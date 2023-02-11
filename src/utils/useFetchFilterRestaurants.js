import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../config";

const useFetchFilterRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return {filteredRestaurants, allRestaurants, setFilteredRestaurants};
}

export default useFetchFilterRestaurants;