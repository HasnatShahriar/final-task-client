
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester/Regester";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:([
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/regester",
          element:<Regester></Regester>
        }
      ])
    },
  ]);