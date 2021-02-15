import { Component } from "react";

import React from 'react'
import AuthService from "./AuthService";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends Component{
    render(){
        if(AuthService.isUserLoggedIn()){
            return <Route {...this.props}/>
        }else{
            return <Redirect to = "/login"/>
        }
    }
}

export default AuthenticatedRoute