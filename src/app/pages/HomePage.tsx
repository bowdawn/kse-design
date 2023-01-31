import React from "react";
import { NavLink } from "react-router-dom";
import {
  buttonPath,
  collapsePath,
  colorsPath,
  iconPath,
  inputPath,
  menuPath,
  tagPath,
  typographyPath,
} from "../routes/paths";

export const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <NavLink to={"/" + buttonPath}>Button</NavLink>
      </div>
      <div>
        <NavLink to={"/" + iconPath}>Icon</NavLink>
      </div>
      <div>
        <NavLink to={"/" + collapsePath}>Collapse</NavLink>
      </div>
      <div>
        <NavLink to={"/" + colorsPath}>Colors</NavLink>
      </div>
      <div>
        <NavLink to={"/" + inputPath}>Input</NavLink>
      </div>
      <div>
        <NavLink to={"/" + menuPath}>Menu</NavLink>
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
