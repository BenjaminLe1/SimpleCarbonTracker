import React,{useState} from "react";
import Axios from 'axios';

function Signup(){
    const url=""
    const [data,setData] = useState({
        email: "",
        userName: "",
        password: ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email: data.email,
            userName: data.userName,
            password: data.password
        })
            .then(res=>{
                console.log(res.data)
            })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e=> submit(e))}>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="email"></input>
                <input onChange={(e)=>handle(e)} id="userName" value={data.userName} placeholder="username" type="text"></input>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="password" type="text"></input>
                <button>Create an Account</button>
            </form>
        </div>
    );
}

export default Signup