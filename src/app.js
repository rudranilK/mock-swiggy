import React from "react";
import ReactDOM from "react-dom/client";

//* Static Resturant Data for now
const DB = [
  {
    type: "returant",
    data: {
      id: 0,
      resName: "Meghna Foods",
      cuisine: "Biriyani, North Inidan",
      stars: "4.4",
      eta: 38,
      icon: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/26/ca9c6c55-ee20-43a0-8d7c-b25777050938_image1adfef81979d54e5b818bf5c813c98bd1.JPG",
    },
  },
  {
    type: "returant",
    data: {
      id: 1,
      resName: "KFC",
      cuisine: "Fried Chicken",
      stars: "3.8",
      eta: 18,
      icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/bcc63cd1-59e0-47f9-bf9f-feffad2c7617_347868.JPG",
    },
  },
];

//* Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://storage.pixteller.com/designs/designs-images/2018-07-27/07/logo-design-branding-logo-food-chicken-meal-1-5b5b4e837e90c.png"
          //   src="./public/logo-design-branding-logo-food-chicken-meal-1-5b5b4e837e90c.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//* Inline CSS ( writting in a JS object)
const styleCard = {
  backgroundColor: "#f0f0f0",
};

//* Body Components - Resturantcard
const ResturantCard = (props) => {
  const { id, resName, cuisine, stars, eta, icon } = props?.data?.data;
  return (
    // using inline css here, injecting similar to react element
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={icon}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars} stars</h4>
      <h4>{eta} mins</h4>
    </div>
  );
};

//* Actual Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search-section">
        <button>Search</button>
      </div>
      <div className="res-card-container">
        {DB.map((el) => (
          <ResturantCard key={el.data.id} data={el} />
        ))}
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

//* Root Component - houses Header, Body, Footer Components
const AppLaylout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLaylout());
