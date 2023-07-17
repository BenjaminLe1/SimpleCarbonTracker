import React from "react";
import Cover from "../../pages/cover";
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

                    {/*Do not show "quiz", "signout", "username display" IF not signed in*/}
                    {/*Do not show "cover(quiz)", "create an account", "signin" IF signed in*/}

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