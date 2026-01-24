import ItemList from "./ItemList";
import { useState } from "react";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("ResturantCategory data==>", data);
  const handleClick = () => {
    setShowIndex()
  };

  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
