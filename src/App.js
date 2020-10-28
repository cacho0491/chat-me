import React from "react";
import "./App.css";
import Chat from "./containers/Chat/Chat";
import Login from "./containers/Auth/Login/Login";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
require("dotenv").config();

class App extends React.Component {
  render() {
    let authRoutes = (
      <Switch>
        <Route path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    );
    if (this.props.isLoggedIn) {
      authRoutes = (
        <Switch>
          <Route path="/auth" component={Login} />
          <Route path="/" exact component={Chat} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return <div className="App">{authRoutes}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.user,
  };
};

export default withRouter(connect(mapStateToProps)(App));
