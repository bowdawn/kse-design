import { Button } from "antd";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { ButtonPage } from "../pages/ButtonPage";
import { HomePage } from "../pages/HomePage";
import { InputPage } from "../pages/InputPage";
import { buttonPath, inputPath } from "./paths";

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
