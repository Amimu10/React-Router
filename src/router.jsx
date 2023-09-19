import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./About/Contact/Contact";
import Users from "./Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
        animate: true, // Add this line to enable animations for this route
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        animate: true, // Add this line to enable animations for this route
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
        animate: true, // Add this line to enable animations for this route
      },
    ],
  },
]);
