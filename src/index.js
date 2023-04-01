import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Started from "./pages/Started";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Forgetpassword from "./componets/Forgetpassword";
import Message from "./pages/Message/Message";
import firebaseConfig from "./firebaseconig";
import store from "./store";
import { Provider } from "react-redux";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Started />,
  },
  {
    path: "registration",
    element: <Ragistration />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/notification",
    element: <Notification/>,
  },
  {
    path: "/settings",
    element: <Settings/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
