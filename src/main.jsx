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
import Authentication from "./Authentication";
import { Toaster } from 'react-hot-toast';
import HouseDetails from "./component/HouseDetails";
import Error from "./component/Error";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
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
      },
      {
        path: "/house/:id",
        loader: async ({params}) => {
          const response = await fetch('/data.json')
          const data = await response.json();
          const clickedHouse = parseInt(params.id)
          return data.find(singleData => singleData.id === clickedHouse) || null
        },
        element: <PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
      },
    ],
    errorElement: <Error></Error>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
      <Toaster />
    </Authentication>
  </React.StrictMode>
);
