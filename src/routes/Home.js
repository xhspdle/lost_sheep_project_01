import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import imgSheep from "./main.png";
import imgBack from "./background.png";

function Home() {
  
  return (
      <div className="App">
        <div className="App-header">        
          <div className="App-body" 
               style={{backgroundImage: `url(${imgBack})`,
                       backgroundSize: `cover`,
                       backgroundPosition: `center`}}>
            <img className="main-img" src={imgSheep} alt="sheep"/>
            <p className="main-test">성경인물 TEST</p>
            <p className="main-text">나와 닮은</p>
            <p className="main-text">성경 속 인물은</p>
            <p className="main-text">누구 일까?</p>
            <Link 
              to={{
                pathname: "/question",
                state: {
                    qId: 0
                }
              }}
            > 
              <button className="start-btn">시작</button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Home;
