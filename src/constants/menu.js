import menuItems from "./mockMenu";

const decideMenu = (resturantId) => {
  let cuisines = [];
  let costForTwoMessage = "";
  let name = "";

  switch (resturantId) {
    case "123":
      cuisines = ["North indian", "kashmiri"];
      costForTwoMessage = "₹800 for two";
      name = "Delhi Da Dhaba";
      break;

    case "456":
      cuisines = ["Bengali", "Continental"];
      costForTwoMessage = "₹1500 for two";
      name = "Khoshe kosha";
      break;
  }

  return override(resturantId, name, cuisines, costForTwoMessage);
};

export default decideMenu;

const override = (id, name = null, cuisines = [], costForTwoMessage = null) => {
  const data = Object.assign({}, menuItems);

  const resDetails = data?.data.cards[2].card.card.info;

  resDetails.id = id;
  resDetails.name = name ? name : resDetails.name;
  resDetails.cuisines = cuisines.length ? cuisines : resDetails.cuisines;
  resDetails.costForTwoMessage = costForTwoMessage
    ? costForTwoMessage
    : resDetails.costForTwoMessage;

  return data;
};
