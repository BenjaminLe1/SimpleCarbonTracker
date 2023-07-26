import React, {useState} from 'react';
//import {useEffect} from 'react';
import axios from "axios";

function Registration(){
    axios.defaults.withCredentials = true;

    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")
    const [email,setEmail] = useState("")
    const [userNameLog,setUsernameLog] = useState("")
    const [passwordLog,setPasswordLog] = useState("")
    const [errorLog,setErrorLog] = useState("")
    //const [login, setLogin] = useState("")
    
    function handleSubmit(){
        checkAccounts()
        if (error === "Account Created Successfully!") {
            postSignup()
        }
    }
    const checkAccounts=async()=>{
        const response = await axios.get("http://localhost:4000/check_accounts", {params : {
            email: email,
            userName: userName
        }});
        setError(response.data);
    }
    const postSignup = () => {
        axios.post("http://localhost:4000/post_signup", {
            email,
            userName,
            password
        })
    }

    const checkLogin = () =>{
            axios.post("http://localhost:4000/check_login", {
                userName: userNameLog,
                password: passwordLog,
            }).then((response) => {
                console.log(response.data.info[0])
                setErrorLog(response.data.msg)
            }).then(()=>{
                window.location.replace("http://localhost:3000/quiz")
            });
    };
    /* useEffect(()=> [
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
            }
        })
    ], []) */

    return (
        <div>
            <div classname="Signup">
                <p>Create an account</p>
                <input onChange={(e) => setEmail(e.target.value)} id="email" value={email} placeholder="email" type="email"></input>
                <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
                <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
                <button onClick={handleSubmit}>Create an Account</button>
                <p>{error}</p>
            </div>
            <div classname="Login">
                <p>Sign in</p>
                <input onChange={(e) => setUsernameLog(e.target.value)} id="userNameLog" value={userNameLog} placeholder="username" type="text"></input>
                <input onChange={(e) => setPasswordLog(e.target.value)} id="passwordLog" value={passwordLog} placeholder="password" type="password"></input>
                <button onClick={checkLogin}>Sign In</button>
                <p>{errorLog}</p>
            </div>
        </div>
    )    
}
export default Registration