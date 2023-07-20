import React,{useState} from "react";
import axios from "axios";

function Signup(){
    const [email,setEmail] = useState("")
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

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

    async function postSignup(e) {
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
            <input onChange={(e) => setEmail(e.target.value)} id="email" value={email} placeholder="email" type="email"></input>
            <input onChange={(e) => setUsername(e.target.value)} id="userName" value={userName} placeholder="username" type="text"></input>
            <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="password" type="text"></input>
            <button onClick={handleSubmit}>Create an Account</button>
            <p>{error}</p>
        </div>
    )    
}
export default Signup