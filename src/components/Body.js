import RestaurantCard from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import useFetchFilterRestaurants from "../utils/useFetchFilterRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {user, setUser} = useContext(UserContext);
  
  const {allRestaurants, filteredRestaurants, setFilteredRestaurants} = useFetchFilterRestaurants();

  // const isOnline = useOnline();
  // if(!isOnline) {
  //   return <h1>🔴 ... You are not connected to the internet! ...</h1>
  // }  

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in it
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={e => setUser({
          ...user,
          name: e.target.value,
        })}/>
        <input value={user.email} onChange={e => setUser({
          ...user,
          email: e.target.value,
        })}/>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
