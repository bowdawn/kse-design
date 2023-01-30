import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ButtonPage } from "../pages/ButtonPage";
import { CollapsePage } from "../pages/CollapsePage";
import { HomePage } from "../pages/HomePage";
import { IconPage } from "../pages/IconPage";
import { InputPage } from "../pages/InputPage";
import { MenuPage } from "../pages/MenuPage";
import { TypographyPage } from "../pages/TypographyPage";
import {
  buttonPath,
  inputPath,
  menuPath,
  iconPath,
  typographyPath,
  collapsePath,
} from "./paths";

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
    path: collapsePath,
    element: <CollapsePage />,
  },
  {
    path: iconPath,
    element: <IconPage />,
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
    path: typographyPath,
    element: <TypographyPage />,
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
