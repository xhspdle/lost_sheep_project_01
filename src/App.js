import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Question from "./routes/Question";
import Result from "./routes/Result";
import "./App.css";

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home} />
    <Route path="/question" component={Question} />
    <Route path="/result/" component={Result} />
  </HashRouter>;
}

export default App;