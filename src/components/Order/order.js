import React from "react";

import Wrapper from "../../hoc/Wrapper";

import Button from "../UI/Button/Button";

import './order.css'

const order = (props) => {
    const summery = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })

    return (
        <Wrapper>
            <div className="order">
                <h3>Orders</h3>
                <ul>{summery}</ul>
                <p> Total Price:<span>{props.total}</span></p>
                <p>
                    continue?
                </p>
                <Button btnType="y" click={props.continue}>Yes</Button>
                <Button btnType="n" click={props.cancel}>No</Button>
            </div>
        </Wrapper>

    )
}
export default order;