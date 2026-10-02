import menuItems from "./mockMenu";

const decideMenu = (resturantId) => {
  let cuisines = [];
  let costForTwoMessage = "";
  let name = "";

  const resId = resturantId.slice(0, 3);

  switch (resId) {
    case "123":
      cuisines = ["Italian", "Mexican"];
      costForTwoMessage = "₹1800 for two";
      name = "Pizza Paradise";
      break;

    case "234":
      cuisines = ["American", "Fast-Food"];
      costForTwoMessage = "₹800 for two";
      name = "Burger Hub";
      break;

    case "345":
      cuisines = ["Bengali", "Continental"];
      costForTwoMessage = "₹1500 for two";
      name = "Khoshe kosha";
      break;

    case "456":
      cuisines = ["Indian", "North Indian"];
      costForTwoMessage = "₹1200 for two";
      name = "Spice Kingdom";
      break;
  }

  return override(resturantId, name, cuisines, costForTwoMessage);
};

export default decideMenu;

const override = (id, name = null, cuisines = [], costForTwoMessage = null) => {
  const data = structuredClone(menuItems); //* deep copy - BUG fixed.

  //* Just overriding the resturant details
  const resDetails = data?.data.cards[2].card.card.info;

  resDetails.id = id;
  resDetails.name = name ? name : resDetails.name;
  resDetails.cuisines = cuisines.length ? cuisines : resDetails.cuisines;
  resDetails.costForTwoMessage = costForTwoMessage
    ? costForTwoMessage
    : resDetails.costForTwoMessage;

  //* No override for actual menu - too much work for no reason at all

  return data;
};
