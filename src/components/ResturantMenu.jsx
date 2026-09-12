import { useEffect, useState } from "react";
import { fetchResturantMenu } from "../service";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const [resturantInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    populateMenuData();
  }, []);

  //* CB for hook Callback
  async function populateMenuData() {
    const data = await fetchResturantMenu(resId);
    setResInfo(data);
  }

  if (!resturantInfo) return <Shimmer />;

  const { resturantDetails, menuItems } = resturantInfo;

  //* Get just resturant details
  const {
    name: resturantName,
    cuisines = [],
    costForTwoMessage,
  } = resturantDetails;

  return (
    <div className="menu">
      <h1> {resturantName} </h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2> Menu </h2>
      <ul>
        {/* //* display resturant menu*/}
        {menuItems.map((item) => {
          const { id, name, category, price } = item.card.info;
          return (
            <li className="menu-item" key={id}>
              {name} - INR {parseFloat(price / 100)} - {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
