import './App.css';
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
// import { Switch } from 'react-router';
//import {  Switch } from "react-router"
import "bootstrap/dist/css/bootstrap.min.css";
import ObjectiveList from './components/objectivelist';
import AddObjective from './components/addobjective';
import ObjectiveQuestion from './components/objectivequestion';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
require('dotenv').config()


const App = ()=> {
  return (
   <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
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
        </nav>

        <div >
          <Switch>
            <Route exact path={"/objective"} component={ObjectiveList} />
            <Route exact path="/objective/create" component={AddObjective} />
            <Route path="/objective/:id" component={ObjectiveQuestion} />
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/Home'} component={HomeScreen}/>
          </Switch>
        </div>
   </Router>
  );
}

export default App;
