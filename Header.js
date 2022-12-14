import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div>
      <nav>
        <NavLink to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/About" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
    </div>
  );
}
