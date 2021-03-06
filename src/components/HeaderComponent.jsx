import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthService from './AuthService.js'
import { withRouter } from 'react-router';
import './HeaderComponent.css'

class HeaderComponent extends Component{
    render(){

        const isUserLoggedIn = AuthService.isUserLoggedIn();
        
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark mx-auto">
                    <a href="https://github.com/chrisDags" className="navbar-brand" style={{fontSize: "25px"}}> Github </a>
                    <ul className="navbar-nav">
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* {!isUserLoggedIn && <li><Link className="nav-link" to="/login" style={{color: 'white'}}>Login</Link></li>} */}
                        {(isUserLoggedIn) && <li><Link className="nav-link" onClick={AuthService.logout} to="/login" style={{color: 'white'}}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)