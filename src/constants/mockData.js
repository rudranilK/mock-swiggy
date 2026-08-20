//* Static Resturant Data for now
const DB = [
  {
    type: "resturant",
    info: {
      id: 1,
      name: "KFC",
      cuisines: ["Fried Chicken"],
      avgRating: "3.8",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
      },
      costForTwo: "",
      cloudinaryImageId:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/bcc63cd1-59e0-47f9-bf9f-feffad2c7617_347868.JPG",
    },
  },
  {
    type: "resturant",
    info: {
      id: 2,
      name: "Meghna Foods",
      cuisines: ["Biriyani", "North Inidan"],
      avgRating: "4.4",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3.5,
      },
      costForTwo: "",
      cloudinaryImageId:
        "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/26/ca9c6c55-ee20-43a0-8d7c-b25777050938_image1adfef81979d54e5b818bf5c813c98bd1.JPG",
    },
  },
  {
    type: "resturant",
    info: {
      id: 3,
      name: "Brik Oven",
      cuisines: ["Pizza", "Italian"],
      avgRating: "4.8",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 3.5,
      },
      costForTwo: "",
      cloudinaryImageId:
        "https://b.zmtcdn.com/data/pictures/chains/0/18224650/b8c95b18840cbde462c9aa7f6a6ba71b_featured_v2.jpg?fit=around|960:500&crop=960:500;*,*",
    },
  },
];

export default DB;
