import getMenu from "../constants/menu";

export const fetchAllResturants = async () => {
  try {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { data } = await response.json();
    const list =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    return list?.length ? list : [];
  } catch (err) {
    console.error(
      `Error while fetching resturant data : ${err.message ?? "UNKNOWN"}`,
    );
    return [];
  }
};

//* To Demonstrate useEffect rendering once API call succeds
//* returns a promise, that resolves after 5 seconds.
// export const fetchAllResturants = () => {
//   return new Promise(async (resolve) => {
//     setTimeout(async () => {
//       try {
//         const response = await fetch(
//           "https://namastedev.com/api/v1/listRestaurants",
//           { method: "GET" },
//         );

//         const json = await response.json();
//         const list =
//           json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants ?? [];

//         resolve(list);
//       } catch (err) {
//         console.error(err);
//         resolve([]);
//       }
//     }, 5000);
//   });
// };

export const fetchTopResturants = (resturants) => {
  return resturants.filter((res) => (Number(res.info.avgRating) || 0) >= 4.5);
};

export const fetchResturantMenu = async (resturantId) => {
  //! TODO: Getting CORS from swiggy API
  //   const res = await fetch(
  //* Query strings are hard-coded here - Picked from swiggy live website
  //* ResturantId has to be passed in Query Params
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=502957&catalog_qa=undefined&submitAction=ENTER",
  //     {
  //       method: "GET",
  //     },
  //   );

  //   if (!res.ok) {
  //     throw new Error(`HTTP error! Status: ${res.status}`);
  //   }

  //   const { data } = await res.json();
  const { data } = await resturantMenu(resturantId);

  const menuObj = data?.cards[
    data?.cards?.length - 1
  ]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards.find((el) =>
    el?.card?.card?.["@type"]?.toLowerCase().includes("itemcategory"),
  );

  const menuItems = menuObj?.card?.card?.itemCards;

  return {
    resturantDetails: data?.cards[2]?.card?.card?.info || {},
    menuItems,
  };
};

async function resturantMenu(resturantId) {
  return new Promise((resolve, reject) => resolve(getMenu(resturantId)));
}
