import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Started from "./pages/Started";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import firebaseConfig from "./firebaseconig";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Started/>,
  },
  {
    path: "registration",
    element:<Ragistration/>,
  },
  {
    path: "login",
    element:<Login/>,
  },
  {
    path: "home",
    element:<Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);
