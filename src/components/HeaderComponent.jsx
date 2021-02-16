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
                    <a href="https://github.com/chrisDags" className="navbar-brand" style={{fontSize: '29px'}}> Github </a>
                    <ul className="navbar-nav">
                    </ul>
                    <ul className="navbar-nav navbar-collapse" style={{justifyContent: 'end'}}>
                        {(isUserLoggedIn) && <li><Link className="nav-link" onClick={AuthService.logout} to="/login" style={{color: 'white', justifyContent: 'end'}}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)