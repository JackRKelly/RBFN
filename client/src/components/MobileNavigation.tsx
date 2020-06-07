import React, { Dispatch, SetStateAction, FC } from "react";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import Logo from "./assets/svg/RBFN.svg";
import Menu from "./assets/svg/menu.svg";
import Close from "./assets/svg/close.svg";

interface MobileProps {
  navigationOpen: boolean;
  setNavigationOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavigation: FC<MobileProps> = (props) => {
  const { setNavigationOpen, navigationOpen } = props;
  return (
    <>
      <nav className="navigation mobile">
        <ul>
          <NavLink exact to="/" className="logo">
            <li>
              <SVG src={Logo} />
            </li>
          </NavLink>
          <li
            className="dropdown"
            onClick={() => {
              setNavigationOpen(true);
            }}
          >
            <SVG src={Menu} />
          </li>
        </ul>
      </nav>
      <nav
        className="navigation-full"
        style={{ width: navigationOpen ? "100%" : "0%" }}
      >
        <ul>
          <li
            className="close"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <SVG src={Close} />
          </li>

          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/newsletters"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Newsletter</li>
          </NavLink>

          <NavLink
            to="/speakers"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Speakers</li>
          </NavLink>

          <NavLink
            to="/events"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Events</li>
          </NavLink>

          <NavLink
            to="/blogs"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Blog</li>
          </NavLink>

          <NavLink
            to="/connect"
            activeClassName="active"
            onClick={() => {
              setNavigationOpen(false);
            }}
          >
            <li>Connect</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
