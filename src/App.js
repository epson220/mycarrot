import React from "react";
import { Route, Link } from "react-router-dom";
import MainComponent from "./MainComponent";
import DashboardComponent from "./Dashboard";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/main">Main</Link>
        <Link to="dashboard">Dashboard</Link>
      </div>
      <div>
        <Route path="/main" component={MainComponent}></Route>
        <Route path="/dashboard" component={DashboardComponent}></Route>
      </div>
    </div>
  );
};

export default App;
