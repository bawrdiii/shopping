import React from "react";

import './navItem.css'

const navItem = (props) => {

    return (
        <li className="nav-item">
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default navItem