import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import eusoffLogo from "../../images/eusoff-logo.png"
import SignInSide from '../../pages/login'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={eusoffLogo} alt=""/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activestyle>
                        Points
                    </NavLink>
                    <NavLink to="/Submit_csv" activestyle>
                        Submit csv
                    </NavLink>
                    <NavLink to="/View_data" activestyle>
                        View Data
                    </NavLink>
                    <NavLink to="/Test" activestyle>
                        Test
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Log Out</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}
 
export default Navbar;
