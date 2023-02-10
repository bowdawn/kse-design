import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AlertPage } from "../pages/AlertPage";
import { ButtonPage } from "../pages/ButtonPage";
import { CollapsePage } from "../pages/CollapsePage";
import { ColorPage } from "../pages/ColorPage";
import { HomePage } from "../pages/HomePage";
import { IconPage } from "../pages/IconPage";
import { InputPage } from "../pages/InputPage";
import { MenuPage } from "../pages/MenuPage";
import { ScreenMobilePage } from "../pages/ScreenMobilePage";
import { ScreenWebPage } from "../pages/ScreenWebPage";
import { SelectPage } from "../pages/SelectPage";
import { TablePage } from "../pages/TablePage";
import { TagPage } from "../pages/TagPage";
import { TypographyPage } from "../pages/TypographyPage";
import {
  buttonPath,
  inputPath,
  menuPath,
  iconPath,
  typographyPath,
  collapsePath,
  colorsPath,
  tagPath,
  screenMobilePath,
  screenWebPath,
  selectPath,
  tablePath,
  alertPath,
} from "./paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: alertPath,
    element: <AlertPage />,
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
    path: colorsPath,
    element: <ColorPage />,
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
    path: screenMobilePath,
    element: <ScreenMobilePage />,
  },
  {
    path: screenWebPath,
    element: <ScreenWebPage />,
  },
  {
    path: selectPath,
    element: <SelectPage />,
  },
  {
    path: menuPath,
    element: <MenuPage />,
  },
  {
    path: tablePath,
    element: <TablePage />,
  },
  {
    path: typographyPath,
    element: <TypographyPage />,
  },
  {
    path: tagPath,
    element: <TagPage />,
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
      <div className="kse-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
export default AppRoutes;
