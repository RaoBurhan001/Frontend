import React from'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
const Home=()=>{
    return(
        <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/objective"} className="nav-link">
              Objective
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/objective/create"} className="nav-link">
              Add Questions
            </Link>
          </li>
        </div>
      </nav> */}
      <h1>Home Screen</h1>
      </div>
        // <div>HOME SCREEN </div>
    )
}

export default Home;