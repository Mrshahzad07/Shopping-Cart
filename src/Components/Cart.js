import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <strong>Total:</strong> ₹{totalAmount}
        </div>
      )}
    </div>
  );
};

export default Cart;
