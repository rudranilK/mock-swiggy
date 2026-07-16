import ResturantCard from "./ResturantCard";
import DB from "../constants/mockData";
import { fetchTopResturants, fetchAllResturants } from "../service";
import { useState, useEffect } from "react";

//* Actual Body Component
const Body = () => {
  //* React Hooks - useState
  const [resturants, setResturant] = useState(DB);
  //* STEP 1 : Render UI with default data in DB file with useState

  //* Hook - runs after this 'Body' component is rendered
  useEffect(() => {
    populateData();
    //* STEP 2 : once Body component is rendered call useEffect callback
  }, []);

  async function populateData() {
    //* Fetch all resturant data
    const allRes = await fetchAllResturants();

    //* Update the resturant list after API success
    setResturant(allRes);
  }

  return (
    <div className="body">
      {/* // TODO : Implement Search functionality later */}
      {/* <div className="search-section">
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={async () => {
            const updatedList = await fetchTopResturants();

            //*  Now, re-render the list of resturants
            setResturant(updatedList);
            console.log(`Resturant List : `, updatedList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-card-container">
        {resturants.map((el) => {
          const { info: resturant } = el;
          return <ResturantCard key={resturant?.id ?? 0} data={resturant} />;
        })}
        {
          //* previous way of sending data
          /* <ResturantCard
          resName="Meghna Foods"
          cuisine="Biriyani, North Inidan"
          stars="4.4"
          eta="38 mins"
          icon="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/26/ca9c6c55-ee20-43a0-8d7c-b25777050938_image1adfef81979d54e5b818bf5c813c98bd1.JPG"
        />
        <ResturantCard
          resName="KFC"
          cuisine="Fried Chicken"
          stars="3.8"
          eta="18 mins"
          icon="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/bcc63cd1-59e0-47f9-bf9f-feffad2c7617_347868.JPG"
        /> */
        }
      </div>
    </div>
  );
};

export default Body;
