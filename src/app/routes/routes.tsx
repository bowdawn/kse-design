import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ButtonPage } from "../pages/ButtonPage";
import { HomePage } from "../pages/HomePage";
import { InputPage } from "../pages/InputPage";
import { MenuPage } from "../pages/MenuPage";
import { buttonPath, inputPath, menuPath } from "./paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: buttonPath,
    element: <ButtonPage />,
  },

  {
    path: inputPath,
    element: <InputPage />,
  },
  {
    path: menuPath,
    element: <MenuPage />,
  },

  {
    path: "/*",
    element: <HomePage />,
  },
]);

export const AppRoutes: React.FC = () => {
  return (
    <div>
      <div>
        <a href="/">Home</a>
        <div style={{ height: "16px" }}></div>
      </div>
      <RouterProvider router={router} />
    </div>
  );
};
export default AppRoutes;
