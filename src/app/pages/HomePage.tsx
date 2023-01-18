import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <NavLink to="/button">Button</NavLink>
      </div>
      <div>
        <NavLink to="/input">Input</NavLink>
      </div>
      <div>
        <NavLink to="/menu">Menu</NavLink>
      </div>
    </>
  );
};
