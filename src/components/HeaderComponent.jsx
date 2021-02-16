import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthService from './AuthService.js'
import { withRouter } from 'react-router';
import './HeaderComponent.css'
//  import '../bootstrap.css'

class HeaderComponent extends Component{
    render(){

        const isUserLoggedIn = AuthService.isUserLoggedIn();
        
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark mx-auto">
                    <a href="https://github.com/chrisDags" className="navbar-brand"> Github </a>
                    <ul className="navbar-nav">
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {(isUserLoggedIn) && <div><li><Link className="myClass" onClick={AuthService.logout} to="/login">Logout</Link></li></div>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)