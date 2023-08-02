import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import {useState, useEffect} from "react";
import axios from "axios";
import "../../pages/pages.css"
import "./boot.css"
 
const Navbar = () => {
    const [login, setLogin] = useState("")
    useEffect(()=> [
        axios.get("http://localhost:4000/check_login").then((response)=>{
            if (response.data.loggedIn === true){
                setLogin(response.data.user[0].username)
            }
        })
    ], [])
    const[open, setOpen] = useState(false)
    
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
                            <div className="calcBox">
                                <p className="navCalc">Footprint Calculator</p>
                            </div>
                        </NavLink>
                        <div className="trigger" onClick={()=>{setOpen(!open)}}>
                            <img alt="profile"src={require("../../pages/images/profile.png")} className="profile" id="prof"></img>
                        </div>
                        <div className={`sub-menu-wrap ${open? 'active' : 'inactive'}`}>
                            <div className="sub-menu">
                                <a href="http://localhost:3000/signup" class="sub-menu-link">
                                    <p>Sign up</p>
                                    <span>></span>
                                </a>
                                <a href="http://localhost:3000/login" class="sub-menu-link">
                                    <p>Sign in</p>
                                    <span>></span>
                                </a>
                            </div>
                        </div>
                        
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
                            <img className="logo" src={require("../../pages/images/logo.png")} alt="Logo"></img>
                        </NavLink>
                        <NavLink to="/quiz" activeStyle>
                            <div className="calcBox">
                                <p className="navCalc">Footprint Calculator</p>
                            </div>
                        </NavLink>
                        <div className="trigger" onClick={()=>{setOpen(!open)}}>
                            <img alt="profile"src={require("../../pages/images/profile.png")} className="profile" id="prof"></img>
                        </div>
                        <div className={`sub-menu-wrap ${open? 'active' : 'inactive'}`}>
                            <div className="sub-menu">
                                <div className="user-info">
                                    <p className="user">{login}</p>
                                </div>
                                <hr>
                                </hr>
                                <a href="http://localhost:3000/signout" class="sub-menu-link">
                                    <p>Sign out</p>
                                    <span>></span>
                                </a>
                            </div>
                        </div>
                    </NavMenu>
                </Nav>
            </>
        );
    }   
};

 
export default Navbar;