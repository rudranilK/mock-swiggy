import DB from "../constants/mockData";
export const fetchTopResturants = async () => {
  console.log("Fetching top rated resturants, Rating > 4.5");
  return DB.filter((res) => (Number(res.data.stars) || 0) >= 4.2);
};
