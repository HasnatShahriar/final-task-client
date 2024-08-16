import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
 
} from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello mama</div>,
    },
  ]);