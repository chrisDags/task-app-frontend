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
    shouldComponentUpdate(nextProps, nextState){
        //AuthService.logout()
        return true
    }

    componentDidMount(){
        if(AuthService.isUserLoggedIn()){
            AuthService.logout()
        }
    }


    handleChange(event){
        //event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked(){
        //event.preventDefault();
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
                    {/* <form onSubmit={this.loginClicked}> */}
                        <div className="custom-div">Username: <input type ="text" name = "username" value = {this.state.username} onChange={this.handleChange}/></div>
                        <div className="custom-div">Password: <input type ="password" name = "password" value ={this.state.password} onChange={this.handleChange}/></div>
                        <div className="custom-div"><button className="btn btn-success" onClick={this.loginClicked}>Login</button></div>                    
                    {/* </form> */}
                </div>
            </>
        )
    }
}

export default LoginComponent