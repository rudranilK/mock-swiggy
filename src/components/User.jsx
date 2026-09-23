import { useState } from "react";

export const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="about-user-card">
      <h1>count: {count} </h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: @rudranilK</h4>
    </div>
  );
};
