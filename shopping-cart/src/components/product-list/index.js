import React, { Component } from "react";
import "./index.css";
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  constructor() {
    super();
   
  }

  
  handleAddCart = product => {
    this.props.onAddToCart(product);
  }

   renderMoreItemsButton = () => {
      return (
        <div className="layout-row justify-content-between align-items-center">
        <button
          className="x-small icon-only outlined"
          data-testid="btn-quantity-subtract"
        >
          <i className="material-icons">remove</i>
        </button>

        <input
          type="number"
          disabled
          className="cart-quantity"
          data-testid="cart-quantity"
        />

        <button
          className="x-small icon-only outlined"
          data-testid="btn-quantity-add"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
      )
  }

  render() {
    return (
      <div className="layout-row wrap justify-content-center flex-70 app-product-list">
        {this.props.products.map((product, i) => {
          return (
                <ProductItem product={product}
                     onAddToCart={this.handleAddCart} 
                     incrementQuantity= {this.props.onIncrement} 
                     decrementQuantity={this.props.onDecrement} 
                     index = {i}/>
               );
        })}
      </div>
    );
  }
}

export const UpdateMode = {
  ADD: 1,
  SUBTRACT: 0,
};
