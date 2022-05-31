import React from "react";
import Wrapper from "../../hoc/Wrapper";
import "./layout.css"

import Navbar from "../navigation/navbar/navbar";

const layout = (props) => {
    return (
        <Wrapper >
            <Navbar />
            <main className="content">
                {props.children}
            </main>
        </Wrapper>
    )
}

export default layout