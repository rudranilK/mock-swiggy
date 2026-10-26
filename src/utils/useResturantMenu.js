import { useEffect, useState } from "react";
import { fetchResturantMenu } from "../service";

//* Custom Hook

//* Responsible for getting the resturant menu data
//* Expectects a resturantId and returns the API response of resturant Menu
//* Manages the state variables for the ResturantMenu component
const useResturantMenu = (resturantId) => {
  const [resturantInfo, setResInfo] = useState(null);

  useEffect(() => {
    populateMenuData();
  }, [resturantId]);

  //* CB for useEffect Callback
  async function populateMenuData() {
    const data = await fetchResturantMenu(resturantId);
    setResInfo(data);
  }

  return resturantInfo;
};

export default useResturantMenu;
