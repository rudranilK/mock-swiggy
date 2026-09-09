import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";

//* Root Component - houses Header, Body, Footer Components
const AppLaylout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//* routing configurations
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLaylout />,
    errorElement: <Error />, //* Custom Error handling components for random routes
    //* Have to be added on the default path and not on other paths
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    Component: Contact, //* another way of registering the component
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//* Passing routing configurations to render appropiately
root.render(<RouterProvider router={appRouter} />);
