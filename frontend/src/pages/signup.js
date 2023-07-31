import React, {useState} from 'react';
import axios from "axios";
import "./login.css"

function Signup(){
    axios.defaults.withCredentials = true;

    const [email,setEmail] = useState("")
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const [error, setError] = useState("")
    
    function handleSubmit(){
        checkAccounts()
        postSignup()
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
    return (
        <div>
            <body>
                <div classname="center">
                    <h1>Create an Account</h1>
                    <form>
                        <div class="txt_field">
                            <input onChange={(e) => setEmail(e.target.value)} id="email" value={email} type="text" required></input>                   
                            <span></span>
                            <label>Email</label>                        
                        </div>
                        <div class="txt_field">
                            <input onChange={(e) => setUsername(e.target.value)} id="userName"  value={userName} type="username" required></input>
                            <span></span>
                            <label>Username</label>  
                        </div>
                        <div class="txt_field">
                            <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} type="password" required></input>
                            <span></span>
                            <label>Password</label>  
                        </div>
                        <button onClick={handleSubmit}>Create an Account</button>
                        <p>{error}</p>
                        <p>or sign in <a href="http://localhost:3000/login">here</a></p>
                    </form>
                </div>
            </body>
        </div>
    )    
}
export default Signup