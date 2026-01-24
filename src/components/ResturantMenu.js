import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const handleToggle = (index) => {
    setShowIndex((prev) => (prev === index ? null : index));
  };


  console.log("resId:", resId);

  // if (resInfo === null) return <Shimmer />

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2].card.card.info || {};
  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card || {};
  console.log(
    "itemCards==>",
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  );
  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => {
      return (
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log("categories==>", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-xl my-10">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <ResturantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={()=> handleToggle(index)}
        />
      ))}

      {/* <h2>Menu</h2> */}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))} */}
      {/* <li>Paneer Butter Masala</li>
        <li>Dal Makhani</li>
        <li>Jeera Rice</li>
        <li>Naan</li>
        <li>Gulab Jamun</li> */}
      {/* </ul> */}
    </div>
  );
};
export default RestaurantMenu;
