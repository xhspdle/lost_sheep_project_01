import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TagManager from "react-gtm-module";
import Home from "./routes/Home";
import Question from "./routes/Question";
import Result from "./routes/Result";
import "./App.css";
import imgBack from "./routes/background2.png";

const App = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-MQ6FT8Q'
  }
  TagManager.initialize(tagManagerArgs);
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body"
          style={{/*backgroundImage: `url(${imgBack})`,
          backgroundSize: `cover`,
  backgroundPosition: `center`*/}}
        >
          <ins className="kakao_ad_area" 
               style={{
                 display: 'none'   
               }} 
          data-ad-unit    = "DAN-LTwgeATAMnreP81l" 
          data-ad-width   = "320" 
          data-ad-height  = "100"></ins> 
          <img className="App-back-img" src={imgBack} alt="sheep and mirror"/>
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