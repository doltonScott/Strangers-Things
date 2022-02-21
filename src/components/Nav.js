import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../custom-hooks";
import { NavContainer } from "./styled";

export default function Nav() {
  const { linkProps, navLinks } = useNav();

  return (
    <NavContainer>
      {navLinks.map(({ name, icon, to }, idx) => (
        <NavLink key={idx} {...linkProps(name, to)}>
          <i className={"material-icons-outlined"}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </NavContainer>
  );
}
