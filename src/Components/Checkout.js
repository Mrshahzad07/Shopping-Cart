import React from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, handleCheckout }) => {
  return (
    <div className="checkout">
      <button onClick={handleCheckout} className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;
