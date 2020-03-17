import React from "react";
import { Route } from "react-router-dom";
import { About } from "component/about";
import { Home } from "component/home";
import { Data } from "component/board";


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
