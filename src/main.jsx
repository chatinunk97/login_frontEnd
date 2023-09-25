import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//Component
import HeaderComponent from "../components/HeaderComponent";
import Register from "../components/Register";
import Login from "../components/Login";
//Context
import LoginContext from "../context/login-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent />,
    children: [
      {
        path: "/login",
        element: (
          <LoginContext>
            <Login />
          </LoginContext>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
