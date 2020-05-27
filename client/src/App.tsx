import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SVG from "react-inlinesvg";
import Logo from "./assets/svg/RBFN.svg";
import Home from "./pages/Home/home";
import Connect from "./pages/Connect/connect";
import About from "./pages/About/about";
import Newsletter from "./pages/Newsletter/newsletter";
import Events from "./pages/Events/events";
import Speakers from "./pages/Speakers/speakers";
import Blog from "./pages/Blog/blog";
import "./App.scss";

const App: FC = () => {
  return (
    <Router>
      <nav className="navigation">
        <ul>
          <NavLink exact to="/about" activeClassName="active">
            <li>About</li>
          </NavLink>

          <NavLink to="/newsletter" activeClassName="active">
            <li>Newsletter</li>
          </NavLink>

          <NavLink to="/speakers" activeClassName="active">
            <li>Speakers</li>
          </NavLink>

          <NavLink to="/" className="logo">
            <li>
              <SVG src={Logo} />
            </li>
          </NavLink>

          <NavLink to="/events" activeClassName="active">
            <li>Events</li>
          </NavLink>

          <NavLink to="/blog" activeClassName="active">
            <li>Blog</li>
          </NavLink>

          <NavLink to="/connect" activeClassName="active">
            <li>Connect</li>
          </NavLink>
        </ul>
      </nav>

      <Route
        render={({ location }) => (
          <TransitionGroup className="content">
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/newsletter">
                  <Newsletter />
                </Route>
                <Route path="/speakers">
                  <Speakers />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/connect">
                  <Connect />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};

export default App;
