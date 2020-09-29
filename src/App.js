import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import How from "./components/How";
import { Switch, Route } from "react-router-dom";
import Find from "./components/Find/Find";

function App() {
  return (
    <div className="h-screen bg-green-900 font-chewy">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/find" component={Find} />
        <Route path="/about" component={About} />
        <Route path="/how" component={How} />
      </Switch>
    </div>
  );
}

export default App;
