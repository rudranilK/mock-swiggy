import React from "react";
import { User } from "./user";
import UserClassComponent from "./User.class";

// export default () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React learning path </h2>
//       <User name={"Rudranil"} />
//       <UserClassComponent name={"RudraK"} />
//     </div>
//   );
// };

export default class About extends React.Component {
  constructor() {
    super();

    console.log(`About.constructor called`);
  }

  render() {
    console.log(`About.render called`);

    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React learning path </h2>
        {/* <UserClassComponent name={"rudranilK"} /> */}
        <User name={"rudranilK"} />
        {/* <UserClassComponent name={"Rudranil"} /> */}
      </div>
    );
  }

  componentDidMount() {
    console.log(`About.componentDidMount called`);
  }
}
