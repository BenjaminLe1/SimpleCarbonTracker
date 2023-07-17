import React, {useEffect, useState} from 'react';
import axios from "axios";

function Login(){
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [signInState, setSigninState] = useState(false);
    useEffect(() => {
       fetch('http://localhost:4000/login')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setSigninState(data.signInState);
          })
          .catch((err) => {
             console.log(err.message);
          });
  }, []); 
    async function postSignin(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:4000/check_login", {
                userName,
                password
            })
        } catch(error) {
            console.error(error)
        }
    }


    return (
        <div classname="Login">
            <form onSubmit={postSignin}>
                <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
                <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )    
}

export default Login

