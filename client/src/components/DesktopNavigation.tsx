import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import Logo from "../assets/svg/RBFN.svg";

const DesktopNavigation: FC = () => {
  return (
    <nav className="navigation desktop">
      <ul>
        <NavLink to="/about" activeClassName="active">
          <li>About</li>
        </NavLink>

        <NavLink to="/newsletters" activeClassName="active">
          <li>Newsletter</li>
        </NavLink>

        <NavLink to="/speakers" activeClassName="active">
          <li>Speakers</li>
        </NavLink>

        <NavLink exact to="/" className="logo">
          <li>
            <SVG src={Logo} />
          </li>
        </NavLink>

        <NavLink to="/events" activeClassName="active">
          <li>Events</li>
        </NavLink>

        <NavLink to="/blogs" activeClassName="active">
          <li>Blog</li>
        </NavLink>

        <NavLink to="/connect" activeClassName="active">
          <li>Connect</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
