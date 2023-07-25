import React, {useState, useEffect} from 'react';
import axios from "axios";

function Login(){

    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")
    /* axios.defaults.withCredentials = true;

    useEffect(()=> [
        axios.get("http://localhost:4000/login")
    ], []) */

    const checkLogin = () =>{
            axios.post("http://localhost:4000/check_login", {
                userName: userName,
                password: password,
            }).then((response) => {
                console.log(response.data)
                setError(response.data)
            });
    };
    /* const checkLogin=async()=>{
        const response = await axios.get("http://localhost:4000/check_login", {params : {
            userName: userName,
            password: password
        }});
        setError(response.data);
    } */

    return (
        <div classname="Login">
            <p>Sign in to take quiz!</p>
            <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
            <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="password"></input>
            <button onClick={checkLogin}>Sign In</button>
            <p>{error}</p>
            <a href="/signup">Create Account</a>
        </div>
    )    
}
export default Login

