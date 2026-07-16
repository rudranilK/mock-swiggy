import { CDN_URL } from "../constants";

//* Body Components - Resturantcard
const ResturantCard = (props) => {
  const {
    id,
    name: resName,
    cuisines,
    avgRating: stars,
    sla,
    cloudinaryImageId: icon,
    costForTwo,
  } = props?.data;

  const { deliveryTime: eta } = sla;

  const isHttpsIcon = /^https?:\/\//i.test(icon);
  const resturantIcon = isHttpsIcon ? icon : `${CDN_URL}${icon}`;
  return (
    // using inline css here, injecting similar to react element
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={resturantIcon}></img>
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{stars} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{eta} mins</h4>
    </div>
  );
};

//* Inline CSS ( writting in a JS object)
const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default ResturantCard;
