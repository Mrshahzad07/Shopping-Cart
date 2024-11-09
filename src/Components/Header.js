import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="logo">
        Shopping<span className="logo-highlight">Cart</span>
      </div>
      <div className="cart-icon-container">
        <div className="cart-icon">
          <FiShoppingCart size={28} className="shopping-cart-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
        <span className="cart-text">My Cart</span>
      </div>
    </header>
  );
};

export default Header;