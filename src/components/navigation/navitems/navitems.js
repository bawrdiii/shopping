import React from "react";

import './navitems.css'

import NavItem from "../navitem/navItem";

const navItems = (props) => {

    return (
        <ul className="nav-items">
            <NavItem link="/">
                Shopping
            </NavItem>
            <NavItem link="/" >
                Checkout
            </NavItem>
        </ul>
    )
}
export default navItems