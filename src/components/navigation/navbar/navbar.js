import React from "react";

import NavItems from "../navitems/navitems";

import './navbar.css'

const Navbar = (props) => {

    return (
        <header className="navbar">
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Navbar