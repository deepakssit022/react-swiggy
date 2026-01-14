import ResturantCard from "./ResturantCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";

const Body = () => {
  let [listOfResturants, setListOfRestaurants] = useState([]);
  let [filteredResturantsList, setFilteredRestaurantsList] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurants"
    );

    const json = await data.json();
    setListOfRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurantsList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listOfResturants.length == 0) {
    return <Shimmer />;
  }
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={() => {
            const filteredResturants = listOfResturants.filter((res) =>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurantsList(filteredResturants);
          }}>
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
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
      <div className="res-container">
        {filteredResturantsList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/resturants/" + restaurant.info.id}>
            <ResturantCard resData={restaurant.info} />
            </Link>
          
        ))}
        {/* <ResturantCard resName="Meghana Foods" cuisine="Indian, Biryani, North Indian" rating="4.4 stars" deliveryTime="40 mins"/>
        <ResturantCard resName="KFC" cuisine="Fast Food" rating="4.2 stars" deliveryTime="30 mins"/> */}
      </div>
    </div>
  );
};

export default Body;
