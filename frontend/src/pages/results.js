import React,{useState} from "react";
import axios from "axios";

function Results(){
    const [email,setEmail] = useState("")
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")

    async function postSignup(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:4000/post_signup", {
                email,
                userName,
                password
            })
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div classname="Signup">
            <form onSubmit={postSignup}>
                <input onChange={(e) => setEmail(e.target.value)} id="email" value={email} placeholder="email" type="email"></input>
                <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
                <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
                <button type="submit">Create an Account</button>
            </form>
        </div>
    )    
}

export default Results
