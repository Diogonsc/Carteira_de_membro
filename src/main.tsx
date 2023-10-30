import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./style/global.css";

import Cadastro from "./pages/Cadastro/index.tsx";
import CarteiraMembro from "./pages/CarteiraMembro/index.tsx";
import { Login } from "./pages/Login/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "carteiraMembro", element: <CarteiraMembro /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
