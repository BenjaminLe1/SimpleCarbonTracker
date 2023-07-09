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
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;