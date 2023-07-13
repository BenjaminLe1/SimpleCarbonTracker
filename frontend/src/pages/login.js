import React,{useState} from "react";
import axios from "axios";

function Login(){
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")

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

