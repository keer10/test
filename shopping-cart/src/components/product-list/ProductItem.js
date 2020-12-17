import React from "react";

export default function ProductItem({ product, onAddToCart, decrementQuantity, incrementQuantity, index }) {


  const renderMoreItemsButton = () => {
    return (
      <div className="layout-row justify-content-between align-items-center">
        <button
          className="x-small icon-only outlined"
          data-testid="btn-quantity-subtract"
        >
          <i className="material-icons"  onClick={() => decrementQuantity(product)}>remove</i>
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
          <i className="material-icons" onClick={() => incrementQuantity(product)}>add</i>
        </button>
      </div>
    );
  };


  return (
    <section
      className="w-30"
      data-testid={"product-item-" + index }
      key={product.id}
    >
      <div className="card ma-16">
        <img
          alt="Your Cart"
          src={product.image}
          className="d-inline-block align-top product-image"
        />
        <div className="card-text pa-4">
          <h5 className="ma-0 text-center">{product.name}</h5>
          <p className="ma-0 mt-8 text-center">${product.price}</p>
        </div>
        <div className="card-actions justify-content-center pa-4">
          { 
            product.cartQuantity === 0 &&
            <button
              onClick={() => onAddToCart(product)}
              className="x-small outlined"
              data-testid="btn-item-add"
            >
              Add To Cart
            </button>
          }

          {product.cartQuantity > 0 && renderMoreItemsButton()}
        </div>
      </div>
    </section>
  );
}