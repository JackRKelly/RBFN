import React, {
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
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
import About from "./pages/About/about";
import Newsletters from "./pages/Newsletters/newsletters";
import Events from "./pages/Events/events";
import Speakers from "./pages/Speakers/speakers";
import Blogs from "./pages/Blogs/blogs";
import LoadingOverlay from "./pages/Loading/loading";
//View Specific
import Blog from "./pages/Blog/blog";
import Event from "./pages/Event/event";
import Speaker from "./pages/Speaker/speaker";
//Navigation
import MobileNavigation from "./components/MobileNavigation";
//Styles
import "./App.scss";

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
          <MobileNavigation
            navigationOpen={navigationOpen}
            setNavigationOpen={setNavigationOpen}
          />
        ) : (
          <DesktopNavigation />
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
                  <Route path="/about">
                    <About setLoading={setLoading} />
                  </Route>
                  <Route path="/newsletters">
                    <Newsletters setLoading={setLoading} />
                  </Route>
                  <Route path="/speakers">
                    <Speakers setLoading={setLoading} />
                  </Route>
                  <Route path="/speaker/:id">
                    <Speaker setLoading={setLoading} />
                  </Route>
                  <Route path="/events">
                    <Events setLoading={setLoading} />
                  </Route>
                  <Route path="/event/:id">
                    <Event setLoading={setLoading} />
                  </Route>
                  <Route path="/blogs">
                    <Blogs setLoading={setLoading} />
                  </Route>
                  <Route path="/blog/:id">
                    <Blog setLoading={setLoading} />
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
