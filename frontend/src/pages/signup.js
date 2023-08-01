import React, {useState} from 'react';
import axios from "axios";
import "./pages.css"

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
                <div className="account-create-login-form">
                    <h1 className="account-create-login-header"> Sign Up Now</h1>
                    <form>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="input-box" placeholder="Your Email" ></input>
                        <input onChange={(e) => setUsername(e.target.value)} value={userName} type="username" id="username" className="input-box" placeholder="Your Username" ></input>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="input-box" placeholder="Your Password" ></input>
                        <p>
                            <span>
                                <input type="checkbox"></input>
                            </span>
                            I agree to the terms of service
                        </p>
                        <button onClick={handleSubmit} className="account-create-login-submit">Create an Account</button>
                        <p>{error}</p>
                        <p className="or">OR</p>
                        <p>Already have an account?</p>
                        <p><a href="/login">Sign in</a></p>
                    </form>
                </div>     
            </body>
        </div>
    )    
}
export default Signup