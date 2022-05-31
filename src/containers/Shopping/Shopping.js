import React from "react";

import Controls from "../../components/Controls/Control"
import Wrapper from "../../hoc/Wrapper";
import Modal from "../../components/UI/modal/modal";
import Order from "../../components/Order/order";

import axios from "../../axios-orders";

import Loader from "../../components/UI/Loader/loader";

const Prices = {
    product1: 59,
    product2: 69,
    product3: 79,
    product4: 89,
}

class Shopping extends React.Component {
    state = {
        products: null,
        totalPrice: 0,
        purchased: false,
        load: false
    }
    componentDidMount() {
        console.log(this.props);
        axios.get('https://react-redux-main-8fece-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then((res) => {
                this.setState({ products: res.data })
            })
    }

    AddProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceAdd = Prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd
        this.setState({ totalPrice: newPrice, products: updatedProducts })

    }

    RemoveProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const PriceSub = Prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - PriceSub
        this.setState({ totalPrice: newPrice, products: updatedProducts })
    }

    purchasedHandler = () => {
        this.setState({ purchased: true })
    }
    modalCloseHandler = () => {
        this.setState({ purchased: false })
    }

    purchasedSucces = () => {
        this.setState({ load: true })
        const data = {
            products: this.state.products,
            totalprice: this.state.totalPrice,
            customer: {
                name: 'bardia',
                email: 'example@gmail.com'
            }
        }
        axios.post('/orders.json', data)
            .then((res) => {
                this.setState({ load: false, purchased: false })
            })
            .catch((err) => {
                this.setState({ load: false, purchased: false })
            })
    }


    render() {
        let order = null
        if (this.state.load) {
            order = <Loader />
        }
        let controls = <Loader />
        if (this.state.products) {
            controls =
                (
                    <Controls order={this.purchasedHandler}
                        price={this.state.totalPrice}
                        productRemove={this.RemoveProductHandler}
                        productAdd={this.AddProductHandler} />
                )
            order = <Order products={this.state.products}
                continue={this.purchasedSucces}
                cancel={this.modalCloseHandler}
                total={this.state.totalPrice}
            />
        }
        return (
            <Wrapper>
                <Modal modalClose={this.modalCloseHandler}
                    show={this.state.purchased}>

                    {order}
                </Modal>
                {controls}
            </Wrapper>
        )
    }
}

export default Shopping

