import React, { FC, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Pages
import Home from "./pages/Home/home";
import Connect from "./pages/Connect/connect";
import Newsletters from "./pages/Newsletters/newsletters";
import Events from "./pages/Events/events";
import Subscribe from "./pages/Subscribe/subscribe";
import LoadingOverlay from "./pages/Loading/loading";
//View Specific
import Event from "./pages/Event/event";
//Navigation
import SVG from "react-inlinesvg";
import Logo from "./assets/svg/RBFN.svg";
import Menu from "./assets/svg/menu.svg";
import Close from "./assets/svg/close.svg";
//Styles
import "./App.scss";
//Icons
import Facebook from "./assets/svg/facebook.svg";
import Twitter from "./assets/svg/twitter.svg";
import Email from "./assets/svg/email.svg";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth < 1100) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
  }, []);

  window.addEventListener("resize", checkMobile);

  return (
    <>
      <LoadingOverlay loading={loading} />
      <Router>
        {isMobile ? (
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
              <ul className="links">
                <li>
                  <a
                    href="https://www.facebook.com/plugins/group/join/popup/?group_id=600818587170824&source=email_campaign_plugin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG src={Facebook}></SVG>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/keithkcvc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG src={Twitter}></SVG>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rbfnetwork.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SVG src={Email}></SVG>
                  </a>
                </li>
              </ul>
              <ul className="pages">
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
                  to="/newsletters"
                  activeClassName="active"
                  onClick={() => {
                    setNavigationOpen(false);
                  }}
                >
                  <li>Newsletter</li>
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
                  to="/connect"
                  activeClassName="active"
                  onClick={() => {
                    setNavigationOpen(false);
                  }}
                >
                  <li>Connect</li>
                </NavLink>
                <NavLink
                  to="/subscribe"
                  activeClassName="active"
                  onClick={() => {
                    setNavigationOpen(false);
                  }}
                >
                  <li>Subscribe</li>
                </NavLink>
              </ul>
            </nav>
          </>
        ) : (
          <nav className="navigation desktop">
            <ul>
              <NavLink exact to="/" className="logo">
                <li>
                  <SVG src={Logo} />
                </li>
              </NavLink>

              <ul className="right">
                <NavLink exact to="/" activeClassName="active">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/newsletters" activeClassName="active">
                  <li>Newsletter</li>
                </NavLink>

                <NavLink to="/events" activeClassName="active">
                  <li>Events</li>
                </NavLink>

                <NavLink to="/connect" activeClassName="active">
                  <li>Connect</li>
                </NavLink>

                <NavLink to="/subscribe" activeClassName="active">
                  <li>Subscribe</li>
                </NavLink>
              </ul>
            </ul>
          </nav>
        )}
        <Route
          render={({ location }) => (
            <TransitionGroup className="content">
              <CSSTransition
                key={location.key}
                timeout={isMobile ? 0 : 300}
                classNames={isMobile ? "fade" : "fade"}
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <Home setLoading={setLoading} />
                  </Route>
                  <Route path="/newsletters">
                    <Newsletters setLoading={setLoading} />
                  </Route>
                  <Route path="/events">
                    <Events setLoading={setLoading} />
                  </Route>
                  <Route path="/subscribe">
                    <Subscribe setLoading={setLoading} />
                  </Route>
                  <Route path="/event/:id">
                    <Event setLoading={setLoading} />
                  </Route>
                  <Route path="/connect">
                    <Connect setLoading={setLoading} />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </>
  );
};

export default App;
