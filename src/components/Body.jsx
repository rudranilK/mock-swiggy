import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import DB from "../constants/mockData";
import { fetchTopResturants, fetchAllResturants } from "../service";
import { useState, useEffect } from "react";

//* Body Functional Component
const Body = () => {
  //* STEP 1.0: register the useState hook & state variable for resturant data
  const [resturants, setResturant] = useState([]);

  //* STEP 1.1: register the useState hook & state variable for Search Filter
  const [searchText, setSearchText] = useState("");

  //* Hook - runs after this 'Body' component is rendered
  useEffect(() => {
    populateData();
    //* STEP 3 : once Body component is initially rendered ( returns Shimmer Component ) call useEffect callback
    //* Since, dependency array is empty - this useEffect hook only runs on the initial mount
  }, []);

  async function populateData() {
    //* Fetch all resturant data
    const allRes = await fetchAllResturants();

    //* Update the resturant list after API success
    setResturant(allRes);
  }

  //* STEP 2 : Render Shimmer UI when no data
  //* Shimmer UI - on initial render
  if (resturants.length < 1) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        {
          //* Search Box Section
        }
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} // The state variable's value will show up in the Search box
            onChange={(event) => {
              setSearchText(event.target.value);
              // So, since this state variable is inside Body component,
              // On Every key press inside this input box this onChange's callback will fire
              // updating the value of searchText state variable, which will be shown in the input box
              // So, 2 things happen simultaniously.
            }}
          ></input>
          <button
            onClick={() => {
              // Filtering the resturants based on the search text
              const filteredRes = resturants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText),
              );

              setResturant(filteredRes);
              //! Problem: once you update the resturants state variable, even after clearing the input box,
              // you can't get the old value of all resturants - as the functional component has already being called
              // previous value is lost now as there is no global variable concept.
            }}
          >
            Search
          </button>
        </div>

        {
          //* Top rated resturants Filter Section
        }

        <button
          className="filter-btn"
          onClick={() => {
            const updatedList = fetchTopResturants(resturants); //* sending all res data instead of a 2nd API call

            //*  Re-Render the list of resturants
            setResturant(updatedList);
            console.log(`Resturant List : `, updatedList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      {
        //* Resturant List Section
      }

      <div className="res-card-container">
        {resturants.map((el) => {
          const { info: resturant } = el;
          return <ResturantCard key={resturant?.id ?? 0} data={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
