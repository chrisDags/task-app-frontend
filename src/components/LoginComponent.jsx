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
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        //event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked(event){
        event.preventDefault();
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
                    <form onSubmit={this.loginClicked}>
                        <div className="custom-div">Username: <input type ="text" name = "username" value = {this.state.username} onChange={this.handleChange}/></div>
                        <div className="custom-div">Password: <input type ="password" name = "password" value ={this.state.password} onChange={this.handleChange}/></div>
                        <div className="custom-div"><button className="btn btn-success" type="submit">Login</button></div>                    
                    </form>
                </div>
            </>
        )
    }
}

export default LoginComponent