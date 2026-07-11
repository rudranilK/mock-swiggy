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

//* Inline CSS ( writting in a JS object)
const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default ResturantCard;
