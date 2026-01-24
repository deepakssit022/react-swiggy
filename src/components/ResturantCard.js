import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturantCard = ({ resData }) => {
  let { name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[300px] h-[600px] rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-bold py-2 text lg">{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withVegetarianTag = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white p-1 m-2 rounded-lg">Vegetarian</label>
        <ResturantCard {...props}/>
      </div>
    );
  };
};

export default ResturantCard;
