import React from 'react'
import axios from 'axios';
import AuthService from './AuthService';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the library
// import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faAngry, faBan, faBarcode, faCode, faCross, faEdit, faHighlighter, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import {useHistory} from 'react-router-dom'
// import { Button } from 'bootstrap';

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
        // window.onpopstate = e => {

        //     this.props.history.push("/login")
        //     // this.props.history.replace("/login")
        //     //AuthService.logout()
        //     //this.props.history.push("/login")
        //     // this.props.history.replace("/login")
        
        // }
    }

    componentWillUnmount(){
        // window.onpopstate = e => {
        //     //this.props.history.replace("/login")
        //     //AuthService.logout()
        //     //this.props.history.push("/login")
        //     // this.props.history.replace("/login")
        
        // }
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
                                <th>DATE</th>
                                <th></th>                          
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
                                                <td>{moment(task.dateCreated).format("DD-MM-YYYY")}</td>
                                               
                                                <Link className="nav-link" style={{float:"left"}} to={`/task/${id}`}><FontAwesomeIcon icon={faEdit} transform="down-4 grow-2.5"/></Link>                                           
                                                <Link className="nav-link" to={'/tasks'}><FontAwesomeIcon icon={faSkullCrossbones} transform="down-4 grow-2.5" color="darkRed"/></Link>
                                                                                              
                                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-dark">Create New Task</button>
                    
                </div>
            </div>

        )
    }
}
