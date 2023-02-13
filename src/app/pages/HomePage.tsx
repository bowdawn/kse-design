import React from "react";
import { NavLink } from "react-router-dom";
import {
  alertPath,
  buttonPath,
  collapsePath,
  colorsPath,
  descriptionsPath,
  iconPath,
  inputPath,
  menuPath,
  screenMobilePath,
  screenWebPath,
  selectPath,
  tablePath,
  tagPath,
  typographyPath,
} from "../routes/paths";

export const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <NavLink to={"/" + alertPath}>Alert</NavLink>
      </div>
      <div>
        <NavLink to={"/" + buttonPath}>Button</NavLink>
      </div>

      <div>
        <NavLink to={"/" + collapsePath}>Collapse</NavLink>
      </div>
      <div>
        <NavLink to={"/" + colorsPath}>Colors</NavLink>
      </div>
      <div>
        <NavLink to={"/" + descriptionsPath}>Descriptions</NavLink>
      </div>
      <div>
        <NavLink to={"/" + iconPath}>Icon</NavLink>
      </div>
      <div>
        <NavLink to={"/" + inputPath}>Input</NavLink>
      </div>
      <div>
        <NavLink to={"/" + menuPath}>Menu</NavLink>
      </div>
      <div>
        <NavLink to={"/" + screenMobilePath}>Screens (Mobile)</NavLink>
      </div>
      <div>
        <NavLink to={"/" + screenWebPath}>Screens (Web)</NavLink>
      </div>
      <div>
        <NavLink to={"/" + selectPath}>Select</NavLink>
      </div>
      <div>
        <NavLink to={"/" + tablePath}>Table</NavLink>
      </div>
      <div>
        <NavLink to={"/" + tagPath}>Tag</NavLink>
      </div>
      <div>
        <NavLink to={"/" + typographyPath}>Typography</NavLink>
      </div>
    </>
  );
};
