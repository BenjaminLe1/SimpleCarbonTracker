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
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
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
                            Quiz
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
                            <img className="logo" src={require("../../pages/images/logo.png")} alt="Logo"></img>
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
                        <div class="dropdown">
                            <button onclick={myFunction} className="dropbtn">Dropdown</button>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="http://localhost:3000/youareamonkey">Sign up</a>
                                <a href="http://localhost:3000/youareamonkey">Sign in</a>
                            </div>
                        </div>
                    </NavMenu>
                </Nav>
            </>
        );
    }
};
 
export default Navbar;