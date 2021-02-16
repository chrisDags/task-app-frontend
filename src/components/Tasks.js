import React from 'react'
import axios from 'axios';
import AuthService from './AuthService';
import { Component } from 'react';

export default class Tasks extends Component{
    getData(){

       this.setState({data: []})
       let username = AuthService.getLoggedInUser();
       
       AuthService.getAllTasks(username).then(response => {
           this.setState({data: response.data})
       }).catch(error => {
           this.forceUpdate()
       })

    }

    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
        this.getData = this.getData.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidUpdate(){
        window.onpopstate = e => {
            AuthService.logout()
            this.props.history.push("/login")
        
        }
    }

    componentWillUnmount(){
    }

    componentDidMount(){
        this.getData();
    }

    render(){

        let currUser = AuthService.getLoggedInUser()
        let id = 0;

        return (
            <div>
                <h1>{currUser}'s Task List</h1>
                <div className="container">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {           
                                this.state.data.map(
                                    task => 
                                            <tr key = {task.id}>
                                                <td>{id = id + 1}</td>
                                                <td>{task.name}</td>
                                                <td>{task.description}</td>
                                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
