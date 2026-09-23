import { User } from "./user";
import UserClassComponent from "./User.class";

export default () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Namaste React learning path </h2>
      <User name={"Rudranil"} />
      <UserClassComponent name={"RudraK"} />
    </div>
  );
};
