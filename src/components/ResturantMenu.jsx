import { useEffect, useState } from "react";
import { fetchResturantMenu } from "../service";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { Link } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";

//* 1. Displays empty menu (Shimmer UI) when data is empty
//* 2. calls fetchResturantMenu func to populate the state variable after 1st render
//* 3. Displays the actual Resturant Menu document with actual API data

//* 4. Step 2 is now exported to 'useResturantMenu' custom hook

const ResturantMenu = () => {
  const { resId } = useParams();

  //* using our custom hook
  const resturantInfo = useResturantMenu(resId);

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
