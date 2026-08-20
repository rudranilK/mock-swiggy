import { useState } from "react";
import { LOGO_URL, LOGIN_TEXTS } from "../constants";

//* Header Component
const Header = () => {
  console.log("Re-render");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          // TODO : serve from assets
          //   src="./public/logo-design-branding-logo-food-chicken-meal-1-5b5b4e837e90c.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <Login />
        </ul>
      </div>
    </div>
  );
};

export default Header;

//* Making a login button to render ONLY the button
//* If this is written inside Header, the Header component will re-render -> No need for that
const Login = () => {
  const [btnText, setBtnText] = useState("login");

  return (
    <button
      className="login"
      onClick={() => {
        const text =
          btnText === LOGIN_TEXTS.LOGIN
            ? LOGIN_TEXTS.LOGOUT
            : LOGIN_TEXTS.LOGIN;

        setBtnText(text);
      }}
    >
      {btnText}
    </button>
  );
};
