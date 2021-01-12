import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  
  return (
      <div className="movies">
        <h1>대문대문</h1>
        <p>lost sheep project</p>
        <Link 
          to={{
            pathname: "/question",
            state: {
                qId: 0
            }
          }}
        > 
          <button>시작</button>
        </Link>
      </div>
  );
}

export default Home;
