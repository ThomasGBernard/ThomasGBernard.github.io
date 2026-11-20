import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Services from "../pages/services/Services";
import Legal from "../pages/legal/Legal";
import WorkWithMe from "../pages/workWithMe/WorkWithMe";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ResumePage from "../pages/resume/Resume.js";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/services"
            render={(props) => <Services {...props} theme={this.props.theme} />}
          />
          <Route
            path="/work-with-me"
            render={(props) => (
              <WorkWithMe {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/legal"
            render={(props) => <Legal {...props} theme={this.props.theme} />}
          />
          <Redirect from="/terms" to="/legal" />
          <Redirect from="/privacy" to="/legal" />
          <Route
            path="/about"
            render={(props) => <About {...props} theme={this.props.theme} />}
          />
          {/* Experience and Education are now sections of the About page */}
          <Redirect from="/experience" to="/about" />
          <Redirect from="/education" to="/about" />
          <Route
            path="/portfolio"
            render={(props) => (
              <Portfolio {...props} theme={this.props.theme} />
            )}
          />

          {/*<Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />*/}
          {/* Publications and outreach are now sections of the Portfolio page */}
          <Redirect from="/publications" to="/portfolio" />
          <Redirect from="/outreach" to="/portfolio" />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          {/*<Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/resume"
            render={(props) => <ResumePage {...props} theme={this.props.theme} />}
          />*/}
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
