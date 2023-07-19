import React, {useState} from 'react';
import axios from "axios";

function Login(){
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")
    const checkLogin=async()=>{
        const response = await axios.get("http://localhost:4000/check_login", {params : {
            userName: userName,
            password: password
        }});
        setError(response.data);
    }
    function checkSignin(e) {
        checkLogin()
    }
    
    return (
        <div classname="Login">
            <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
            <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
            <button onClick={checkSignin}>Sign In</button>
            <p style={errorMsg}>{error}</p>
        </div>
    )    
}
export default Login

//CSS
const errorMsg ={
    
}
  

