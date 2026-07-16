import DB from "../constants/mockData";

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

export const fetchTopResturants = async () => {
  console.log("Fetching top rated resturants, Rating > 4.5");
  return DB.filter((res) => (Number(res.info.avgRating) || 0) >= 4.2);
};
