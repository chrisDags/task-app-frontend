import react from 'react';
import axios from 'axios';



class AuthService {

    executeJwtAuthenticationService(username, password){
        let headers = {
            "Content-Type": "application/json"
        };  
        return axios.post("http://localhost:8080/authenticate",{
            username,
            password
        }, headers)
    }

    registerSuccessfulLoginForJwt(username, token){
        sessionStorage.setItem('authenticatedUser', username)
        sessionStorage.setItem('token', 'Bearer ' + token)
        this.token = token;
    }
    
    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){                
                    config.headers.authorization = token
                }
                return config
            } 
        )
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

        if(user === null){
            return false
        }
        return true
    }

    getLoggedInUser(){
        
        let user = sessionStorage.getItem('authenticatedUser')
        if(user == null) return ''
        return user
    }

    // todo: Move methods related to CRUD operations on Tasks to a service
    getAllTasks(username){
       let token = sessionStorage.getItem('token')
       return axios.get(`http://localhost:8080/api/tasks`, {headers: {"Authorization": `${token}`}})
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

}

export default new AuthService();