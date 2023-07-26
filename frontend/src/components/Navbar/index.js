import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import {useState, useEffect} from "react";
import axios from "axios";
import "./ben.css"

 
const Navbar = () => {
    const [login, setLogin] = useState("")
    useEffect(()=> [
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
                setLogin(response.data.user[0].username)
            }
        })
    ], [])
    if (login === ""){
        return (
            <>
                <Nav>
                    <NavMenu>
                        <NavLink className="logonav" to="/" activeStyle>
                            <img className="logo" src={require("../../pages/images/logo.png")} alt="Logo"></img>  
                        </NavLink>
                        {/*Do not show "quiz", "signout", "username display" IF not signed in*/}
                        {/*Do not show "cover(quiz)", "create an account", "signin" IF signed in*/}

                        <NavLink to="/quiz" activeStyle>
                            Footprint Calculator
                        </NavLink>
                        <NavLink to="/account" activeStyle>
                            Signin/Signup
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        );
    }
    else{
        return (
            <>
                <Nav>
                    <NavMenu>
                        <NavLink to="/" activeStyle>
                            <img className="logo" src={require("../../pages/images/banana.png")} alt="Logo"></img>
                        </NavLink>
                        <NavLink to="/quiz" activeStyle>
                            Footprint Quiz
                        </NavLink>
                        <p style={{color: "white"}}>
                            {login}
                        </p>
                        <NavLink to="/signout" activeStyle style={{textDecorationLine: 'underline'}}>
                            Sign Out
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        );
    }
};
 
export default Navbar;