import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
      <nav>
        <ul>
          <li>
            <NavLink exact to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" activeClassName="active">
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink to="/speakers" activeClassName="active">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/connect" activeClassName="active">
              Connect
            </NavLink>
          </li>
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
