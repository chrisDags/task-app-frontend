import { Component } from "react";
import AuthService from './AuthService.js'
import './LoginComponent.css'

import React from 'react'

class LoginComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidMount(){
        if(AuthService.isUserLoggedIn()){
            AuthService.logout()
        }
    }


    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }


    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.handleLogin()
        }
      };


    handleLogin(){
        AuthService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then( response => {
                    AuthService.registerSuccessfulLoginForJwt(this.state.username, response.data.jwt);
                    this.props.history.push(`/tasks`)
                }).catch(() => {
                    this.setState({hasLoginFailed: true})
                })
    }  
    
    render(){
        return(
            <>
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-danger">Invalid Credentials</div>}
                <div >
                    <div className="custom-div">Username: <input type ="text" name = "username" value = {this.state.username} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/></div>
                    <div className="custom-div">Password: <input type ="password" name = "password" value ={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/></div>
                    <div className="custom-div"><button className="btn btn-success" onClick={this.handleLogin} loading={this.state.load}>Login</button></div>                    
                </div>
            </>
        )
    }
}

export default LoginComponent