import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import Tasks from './components/Tasks';
import {BrowserRouter as Router, HashRouter, Link, Route, Switch, BrowserHistory} from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute';
import HeaderComponent from './components/HeaderComponent';
import createHistory from 'history/createBrowserHistory'
import TaskComponent from './components/TaskComponent.jsx'

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './bootstrap.css'


// const BrowserHistory = require('react-router/lib/BrowserHistory').default;

function App() {
  return (
    <div className="App">
      <Router history = {createHistory}>        
        <HeaderComponent/> 
        <Switch> 
          {/* <Route path="/" exact component={LoginComponent}/> */}
          <Route path="/login" component={LoginComponent}/>
          <AuthenticatedRoute path="/tasks" component={Tasks}/>
          <AuthenticatedRoute path="/task/:id" component={TaskComponent}/>
          <Route path="" component={LoginComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
