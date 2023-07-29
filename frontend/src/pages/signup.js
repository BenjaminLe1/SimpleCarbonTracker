import React, {useState} from 'react';
import axios from "axios";
import "./login.css"

function Signup(){
    axios.defaults.withCredentials = true;

    const [email,setEmail] = useState("")
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
    const [error, setError] = useState("")
    const [errorLog,setErrorLog] = useState("")
    
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
                    <div classname="Signup">
                        <h1>SignIn</h1>
                        <div class="txt_field">

                            <input onChange={(e) => setEmail(e.target.value)} id="email" value={email} type="text" required></input>                   
                            <span></span>
                            <label>Email</label>                        
                        </div>
                        <input onChange={(e) => setUsername(e.target.value)} id="userName"  value={userName} placeholder="username" type="text"></input>
                        <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
                        <button onClick={handleSubmit}>Create an Account</button>
                        <p>{error}</p>
                    </div>
                </div>
            </body>
        </div>
    )    
}
export default Signup