import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App.jsx";
import Login from "./poc/Login";
import Cart from "./poc/Cart";
import ProductScreen from "./screens/ProductScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "product/:productId",
    element: <ProductScreen />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
