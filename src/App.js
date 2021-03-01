import React, { useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Question from "./routes/Question";
import Result from "./routes/Result";
import "./App.css";
import imgBack from "./routes/background.png";

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body"
          style={{backgroundImage: `url(${imgBack})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`}}
        >
          <HashRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/question" component={Question} />
            <Route path="/result/" component={Result} />
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default App;