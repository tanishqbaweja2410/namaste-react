import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  // console.log("render()");

  // useEffect with an empty dependency array will get rendered only once after the initial render
  // [] => empty dep list
  // No dep list => after every rerender of the component
  // [searchText] => once after the initial render + only when searchText changes

  // when does our component rerenders ? state changes + prop changes
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6389315&lng=77.08668109999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  // Conditional Rendering
  // if restraunt is empty -› shimmer Ui
  // if restraunt has data =› actual data UI

  // Early Return 
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in it
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state -> restaurants variable
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {/* map in jsx : - */}
        {(filteredRestaurants?.length === 0) ? <h1>No Restaurant Found!</h1> : filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
