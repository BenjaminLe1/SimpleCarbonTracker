import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/quiz" activeStyle>
                        Footprint Quiz
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        Create an Account
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Sign In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;