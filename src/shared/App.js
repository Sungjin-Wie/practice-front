import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Data } from "../component";
import { Tabs, AppBar, TabPan } from "@material-ui/core";
const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/data" component={Data} />
    </div>
  );
};

export default App;
