import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import UserProfile from "./component/UserProfile";
import UpdateProfile from "./component/UpdateProfile";
import Register from "./component/Register";
import Login from "./component/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: ([
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
