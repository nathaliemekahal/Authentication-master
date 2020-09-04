import React, { Component, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Company from "./components/Company";
import protectedRoute from "./components/helper/Auth";

function App() {
  const AuthApi = React.createContext();
  const Auth = React.createContext(AuthApi);
  const [auth, setAuth] = React.useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (isAuthenticated) => {
    // e.preventDefault();
    console.log("USER AUTHENTICATED", isAuthenticated);
    setAuthenticated(isAuthenticated);
  };
  return (
    <AuthApi.Provider value={(auth, setAuth)}>
      <Router>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link to="" className="navbar-brand">
                COMPANY
              </Link>
            </div>
            <div className="navbar-collapse collapse" id="menu">
              <ul className="nav navbar-right navbar-nav">
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
              <ul className="nav navbar-right navbar-nav">
                <li>
                  <Link to="/main">Home</Link>
                </li>
                <li>
                  <Link to="/company">Company</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <protectedRoute
            exact
            path="/main"
            auth={Auth.auth}
            component={Main}
          />
          {authenticated && <Company />}
          {/* <Login fn={handleLogin} />} */}
          <Route
            exact
            path="/Login"
            component={() => <Login fn={handleLogin} />}
          />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
      //{" "}
    </AuthApi.Provider>
  );
}

export default App;
