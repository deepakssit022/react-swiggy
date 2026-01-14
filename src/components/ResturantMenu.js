import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  console.log("resId:", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  // if (resInfo === null) return <Shimmer />

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2].card.card.info || {};
  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card || {};
  console.log("itemCards==>", itemCards);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
        {/* <li>Paneer Butter Masala</li>
        <li>Dal Makhani</li>
        <li>Jeera Rice</li>
        <li>Naan</li>
        <li>Gulab Jamun</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
