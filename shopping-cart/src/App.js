import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            product.isAddToCard = false;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }

    handleOnAddToCart = (product) => {

        const newProducts = this.state.products.map(ele =>{
            if(ele.id === product.id) {
                ele.isAddToCard = true
                ele.cartQuantity ++ ;
            }
            return ele;
        })
        const newProduct = Object.assign({}, product);
        const carts = { items: this.state.cart.items.concat(newProduct)}
        this.setState({
            cart: carts,
            products: newProducts
        })
    }

    handleIncrement = product => {
        console.log("this is increment ", product);
        const newProducts = this.state.products.map(ele =>{
            if(ele.id === product.id) {
                ele.cartQuantity ++ ;
            }
            return ele;
        })
        
        const newCarts = {
            items: this.state.cart.items.map(ele => {
                if(ele.id === product.id) {
                    ele.cartQuantity++
                }
                return ele;
            })
        }
        this.setState({
            cart: newCarts,
            products: newProducts
        })
       
    }
    
    handleDecrement = product => {
        console.log("this is decrement ", product);

        const newProducts = this.state.products.map(ele =>{
            if(ele.id === product.id) {
                ele.cartQuantity -- ;
            }
            return ele;
        })
       

        const newItems = this.state.cart.items.map(ele => {
            if(ele.id === product.id) {
                if(ele.cartQuantity === 1) {
                    ele = null;
                } else {
                    ele.cartQuantity--
                }
            }
            return ele;
        })

        const filteredItems = newItems.filter(ele => {
            if(ele) return ele;
        })
       
        const newCarts = {
            items: filteredItems
        }
        this.setState({
            cart: newCarts,
            products: this.state.products
        })
    }

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList 
                            products={this.state.products} 
                            onAddToCart={this.handleOnAddToCart}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement} />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
