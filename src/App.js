import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import Tasks from './components/Tasks';
import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute';
import HeaderComponent from './components/HeaderComponent';
// import './bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>        
      <HeaderComponent/> 
        <Switch> 
          {/* <Route path="/" exact component={LoginComponent}/> */}
          <Route path="/login" component={LoginComponent}/>
          <AuthenticatedRoute path="/tasks" component={Tasks}/>
          <Route path="" component={LoginComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
