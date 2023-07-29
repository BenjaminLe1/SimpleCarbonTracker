import React, {useState} from 'react';
//import {useEffect} from 'react';
import axios from "axios";

function Login(){
    axios.defaults.withCredentials = true;

    const [userNameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    
    const [error, setError] = useState("")
    const [errorLog,setErrorLog] = useState("")
    
    const checkLogin = () =>{
        axios.post("http://localhost:4000/check_login", {
            userName: userNameLog,
            password: passwordLog,
        }).then((response) => {
            console.log(response.data.info[0])
            setErrorLog(response.data.msg)
            if (response.data.info[0]){
                window.location.replace("http://localhost:3000/quiz")
            }
            console.log(errorLog)
        })
    };

    return (
        <div>
            <div classname="Login">
                <p>Login</p>
                <input onChange={(e) => setUsernameLog(e.target.value)} id="userNameLog" value={userNameLog} placeholder="username" type="text"></input>    
                <input onChange={(e) => setPasswordLog(e.target.value)} id="passwordLog" value={passwordLog} placeholder="password" type="password"></input>
                <button onClick={checkLogin}>Login</button>
                <p>{errorLog}</p>
            </div>
        </div>
    )    
}
export default Login