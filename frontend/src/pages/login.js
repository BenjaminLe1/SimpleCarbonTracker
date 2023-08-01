import React, {useState} from 'react';
//import {useEffect} from 'react';
import axios from "axios";
import "./pages.css"

function Login(){
    axios.defaults.withCredentials = true;

    const [userNameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    
    const [errorLog,setErrorLog] = useState("")
    
    const checkLogin = () =>{
        console.log("Test")
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
            <body>
                <div className="account-create-login-form">
                    <h1 className="account-create-login-header"> Login Now</h1>
                    
                        <input onChange={(e) => setUsernameLog(e.target.value)} id="userNameLog" value={userNameLog} className="input-box" placeholder="username" type="text"></input>    
                        <input onChange={(e) => setPasswordLog(e.target.value)} id="passwordLog" value={passwordLog} className="input-box" placeholder="password" type="password"></input>
                        <button onClick={checkLogin} className="account-create-login-submit">Login</button>
                        <p>{errorLog}</p>
                        <p className="or">OR</p>
                        <p>Create an account?</p>
                        <p><a href="/signup">Sign Up</a></p>                    
                </div>
            </body>
        </div>
    )    
}
export default Login