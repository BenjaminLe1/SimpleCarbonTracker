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
        if(error === 'Success!'){
            createCookie(userName, password)
        }
    }


    function createCookie(name,pwds){
        let user = userName;
        let pwd = password;
    
    
        const today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000*24*15);
        
    
        document.cookie = "name="+user.valueOf+";path=/" + ";expires="+expire.toUTCString();
        document.cookie = "password="+encodeURI(pwd.valueOf)+";path=/" + ";expires="+expire.toUTCString();
        //can only write one entity at a time (name, pass)
        }  
    
    
        //event handler for page load - runs on every refresh
        window.onload = function(){
    
        //how to read back the stored name and password?
        //https://stackoverflow.com/q/10730362/6160662
        //https://stackoverflow.com/q/5639346/6160662
    
    
        //for now
        var uname = 'Route66';
        var pass = '123456';
    
        document.getElementById('user').value = uname;
        document.getElementById('pd').value = pass;
    
        }
        {/* <input type="text" id="user">
        <input type="password" id="pd">
        <input type="button" onclick="createCookie()" value="submit"></input> */}
    
    return (
        <div classname="Login">
            <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
            <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="password"></input>
            <button onClick={checkSignin}>Sign In</button>
            <p>{error}</p>
        </div>
    )    
}
export default Login

