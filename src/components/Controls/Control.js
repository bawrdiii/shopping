import React from "react"
import "./Control.css"

import Builder from "./Builder/Builder"

const products = [
    { title: 'product 1 ', type: 'product1' },
    { title: 'product 2 ', type: 'product2' },
    { title: 'product 3 ', type: 'product3' },
    { title: 'product 4 ', type: 'product4' },
]

const Controls = (props) => {
    return <div className="controls">
        <div className="price">
            <p>Total Price: <span>{props.price}</span></p>
        </div>
        {products.map((item) => {
            return (
                <Builder 
                add={() => props.productAdd(item.type)}
                    key={item.title}
                    title={item.title}
                    remove={() => props.productRemove(item.type)}
                />
            )
        })}
        <button onClick={props.order} 
        className="order-btn">
            Order
        </button>
    </div>


}

export default Controls 