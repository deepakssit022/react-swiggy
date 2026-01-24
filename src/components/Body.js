import ResturantCard, { withVegetarianTag } from "./ResturantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  let [listOfResturants, setListOfRestaurants] = useState([]);
  let [filteredResturantsList, setFilteredRestaurantsList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const VegetarianResturantCard = withVegetarianTag(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    setListOfRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurantsList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (useOnlineStatus() == false) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border-solid border-2 border-black p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-3 bg-gray-300 m-4 rounded-lg hover:bg-gray-400"
            onClick={() => {
              const filteredResturants = listOfResturants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantsList(filteredResturants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-3 bg-gray-300 m-4 rounded-lg hover:bg-gray-400"
            onClick={() => {
              setFilteredRestaurantsList(
                filteredResturantsList.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-left">
        {filteredResturantsList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <VegetarianResturantCard resData={restaurant.info} />
            ) : (
              <ResturantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
        {/* <ResturantCard resName="Meghana Foods" cuisine="Indian, Biryani, North Indian" rating="4.4 stars" deliveryTime="40 mins"/>
        <ResturantCard resName="KFC" cuisine="Fast Food" rating="4.2 stars" deliveryTime="30 mins"/> */}
      </div>
    </div>
  );
};

export default Body;
