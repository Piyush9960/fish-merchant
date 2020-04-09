import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={HomeLayout} />
      </Switch>
    </div>
  );
}

export default App;
