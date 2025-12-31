import ResturantCard from "./ResturantCard.js";
import resList from "../utils/mockData.js";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => (
            <ResturantCard key={restaurant.info.id} resData={restaurant.info} />
          )
        )}

        {/* <ResturantCard resName="Meghana Foods" cuisine="Indian, Biryani, North Indian" rating="4.4 stars" deliveryTime="40 mins"/>
        <ResturantCard resName="KFC" cuisine="Fast Food" rating="4.2 stars" deliveryTime="30 mins"/> */}
      </div>
    </div>
  );
};

export default Body;
